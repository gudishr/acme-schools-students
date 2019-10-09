import React from 'react'
import { connect } from 'react-redux'

const _Schools = ({ students, schools }) => {
  const _schools = schools.map(school => {
    const _students = students.filter(student => student.schoolId === school.id)
    return {...school, students : _students }
  })
  return (
    <div className="schools">
        { _schools.map(school => <li key={ school.id }>
          <div>{school.name}</div>
          <div>{school.students.length}</div>
        </li>
        )}
    </div>    
  )
}

const mapStateToProps = ({students, schools}) => {
  return (
    {students, schools}
  )
}

const Schools = connect(mapStateToProps)(_Schools)

export default Schools