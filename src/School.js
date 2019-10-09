import React from 'react'
import { connect } from 'react-redux'

const _School = ({ match, schools, students }) => {
    const id = match.params.id
    let school = schools.find(_school => _school.id === id)

    const _students = students.filter(student => student.schoolId === school.id)
    school = {...school, students : _students }

     return (
        <div>
            <div>{school.name}</div>
                {school.students.map(student => <li key={student.id}>
                    <div>{student.firstName} {student.lastName}</div>
                    <div>GPA {student.gpa}</div>
                </li>)
                }
        </div>
     )
}

const mapStateToProps = ({ students, schools }) => {
  return (
    { students, schools }
  )
}

const School = connect(mapStateToProps)(_School)

export default School;