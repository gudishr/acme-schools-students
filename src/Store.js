import { combineReducers, createStore } from "redux";
import axios from 'axios'
import { applyMiddleware } from 'redux'
import thunks from 'redux-thunk'

//constants
const SET_STUDENTS = 'SET_STUDENTS'
const DESTROY_STUDENT = 'DESTROY_STUDENT'
const SET_SCHOOLS = 'SET_SCHOOLS'

//action creators
const setStudents = (students)=> ({ type: SET_STUDENTS, students })
const _destroyStudent = (student)=> ({ type: DESTROY_STUDENT, student })
const setSchools = (schools)=> ({ type: SET_SCHOOLS, schools })

//thunks
const getStudents = ()=> {
  return async(dispatch)=> {
      const students = (await axios.get('/api/students')).data
      return dispatch(setStudents(students))
  }
}

const destroyStudent = (student)=> {
  return async(dispatch)=> {
    await axios.delete(`/api/students/${student.id}`, student)
    return dispatch(_destroyStudent(student))
  }
}

const getSchools = () => {
  return async(dispatch)=> {
      const schools = (await axios.get('/api/schools')).data
      return dispatch(setSchools(schools))
  }
}

//store
const store = createStore(
  combineReducers({
    students: (state = [], action)=> {
      if(action.type === SET_STUDENTS){
        return action.students
      }
      if(action.type === DESTROY_STUDENT){
        return state.filter(student => student.id !== action.student.id)
      }
      return state
    },
    schools: (state = [], action)=> {
      if(action.type === SET_SCHOOLS){
        return action.schools
      }
      return state
    }
  }), applyMiddleware(thunks)
)

export default store

export { getStudents, getSchools, destroyStudent }
