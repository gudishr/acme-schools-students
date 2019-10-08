const Sequelize = require('sequelize')
const {UUID, UUIDV4, STRING, DECIMAL} = Sequelize

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_schools_students_db')

const Student = conn.define('student', {
  id : {
    type : UUID,
    primaryKey : true,
    defaultValue : UUIDV4
  },
  firstName : {
    type : STRING,
    allowNull : false,
  },
  lastName : {
    type : STRING,
    allowNull : false,
  },
  email : {
    type : STRING,
    allowNull : false
  },
  gpa : {
    type : DECIMAL,
    allowNull : false
  }
});

const School = conn.define('school', {
  id : {
    type : UUID,
    primaryKey : true,
    defaultValue : UUIDV4,
  },
  name : {
    type : STRING,
    allowNull : false,
  }
})

Student.belongsTo(School);
School.hasMany(Student, {as : 'students', foreignKey: 'schoolId'})

const syncAndSeed = async() => {
  await conn.sync({ force : true })

  const schools = [
    { name : 'MIT' },
    { name : 'Harvard' },
    { name : 'UCLA' },
    { name : 'CCNY' },
    { name : 'Brown' },
    { name : 'Apex Tech' }
  ]

  const [mit, harvard, ucla, ccny, brown, aptech] = await Promise.all(schools.map(school => School.create(school)))

  const students = [
    { firstName : 'Shruti', lastName : 'Gudi', email : 'sg@xyz.com', gpa : 5.68, schoolId : mit.id},
    { firstName : 'Lou', lastName : 'Preston', email : 'Loupreston@xyz.com', gpa : 8.23, schoolId :  ucla.id},
    { firstName : 'Crystal', lastName : 'Daz', email : 'crystal@xyz.com', gpa : 7.44, schoolId :  mit.id},
    { firstName : 'Vincent', lastName : 'Gomes', email : 'vgomes@xyz.com', gpa : 4.12, schoolId :  harvard.id},
  ];

  const [shruti, lou, crystal, vincent] = await Promise.all(students.map(student => Student.create(student)))
}

module.exports = {
  syncAndSeed,
  models: {
    Student,
    School
  }
}
