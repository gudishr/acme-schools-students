import React from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import { getSchools } from './Store';

class _Students extends React.Component{
  render(){
    const { students, schools } = this.props
    return (
      <div className="students">
        { students.map(student => <li key={ student.id }>
          <div>{student.firstName} {student.lastName}</div>
          <div>GPA: {student.gpa}</div>
          <select>
            <option value="None">Not Enrolled</option>
            {schools.map(school => <option key={school.id} selected={school.id === student.schoolId ? "selected" : ""} value={school.name}>{school.name}</option>)}
          </select>
          {/* <button></button> */}
        </li>
        )}
      </div>    
    )
  }
}

const mapStateToProps = ({students, schools}) => {
  return (
    {students, schools}
  )
}

const Students = connect(mapStateToProps)(_Students)

export default Students
