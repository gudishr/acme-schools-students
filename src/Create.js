import React from 'react'
import { connect } from 'react-redux'
import { createStudent } from './store'

class _CreateStudent extends React.Component{
  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: '',
      schoolId: '',
    }
    // this.create = this.create.bind(this)
    // this.onChange = this.onChange.bind(this)
  }

  // async create(){
  //   try {
  //     await this.props.create(this.state)
  //   }
  //   catch(ex){
  //     console.log(ex)
  //   }
  // }

  render(){
    const { lastName, email, gpa, schoolId } = this.state
    const { createStudent, schools } = this.props
    return (
      <div className="createstudent">
        {/* { error && <div className='error'>{ error}</div> } */}
        First Name <input name="firstName" value={ this.state.firstName } onChange={(ev)=> this.setState({ firstName: ev.target.value})} />
        Last Name <input name="lastName" value={ lastName } onChange={(ev)=> this.setState({ lastName: ev.target.value})} />
        Email <input name="email" value={ email } onChange={(ev)=> this.setState({ email: ev.target.value})} />
        GPA <input name="gpa" value={ gpa } onChange={(ev)=> this.setState({ gpa: ev.target.value})} />
        Schools <select onChange = {(ev) => this.setState({ schoolId : ev.target.value})}>
          <option>--Not Enrolled--</option>
          {schools.map(school => <option key={school.id} value={school.id}>{school.name}</option>)}
        </select>
        <button onClick={ () => createStudent(this.state) }>Save</button>
      </div>
    );
  }
}

const mapStateToProps = ({schools}) => {
  return (
    {schools}
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    createStudent: (student)=> dispatch(createStudent(student))
    }
}

const CreateStudent = connect(mapStateToProps, mapDispatchToProps)(_CreateStudent)

export default CreateStudent