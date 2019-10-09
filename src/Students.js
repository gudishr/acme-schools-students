import React from 'react'
import { connect } from 'react-redux'
import { destroyStudent, updateStudent } from './Store';

class _Students extends React.Component{
  render(){
    const { students, schools, destroyStudent, updateStudent } = this.props
    return (
      <div className="students">
        { students.map(student => <li key={ student.id }>
          <div>{student.firstName} {student.lastName}</div>
          <div>GPA: {student.gpa}</div>
          <select onChange = {(e) => updateStudent({ ...student, schoolId : e.target.value})}>
            <option value="">Not Enrolled</option>
            {schools.map(school => <option key={school.id} selected={school.id === student.schoolId ? "selected" : ""} value={school.id}>{school.name}</option>)}
          </select>
          <button onClick = {() => destroyStudent(student)}>Destroy Student</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    destroyStudent: (student)=> dispatch(destroyStudent(student)),
    updateStudent : (student)=> dispatch(updateStudent(student))
    }
}

const Students = connect(mapStateToProps, mapDispatchToProps)(_Students)

export default Students
