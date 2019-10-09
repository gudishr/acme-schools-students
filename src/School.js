import React from 'react'
import { connect } from 'react-redux'
import { updateStudent } from './Store';

const _School = ({ match, schools, students, updateStudent }) => {
    const id = match.params.id
    let school = schools.find(_school => _school.id === id)

    const _students = students.filter(student => student.schoolId === school.id)
    school = {...school, students : _students }

     return (
        <div>
            <div>{school.name} ({school.students.length} Students enrolled)</div>
            <select onChange = {(e) => updateStudent({ ...students.find(student => student.id === e.target.value), schoolId : school.id})}>
              <option value="">Add Student...</option>
              {students.filter(student => student.schoolId !== school.id).map( student => <option key={student.id} value={student.id}>{ student.firstName }</option>)}
            </select>
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateStudent: (student)=> dispatch(updateStudent(student)),
    }
}

const School = connect(mapStateToProps, mapDispatchToProps)(_School)

export default School;