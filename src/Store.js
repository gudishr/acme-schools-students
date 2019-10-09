import { combineReducers, createStore } from "redux";
import axios from 'axios'
import { applyMiddleware } from 'redux'
import thunks from 'redux-thunk'

//constants
const SET_STUDENTS = 'SET_STUDENTS'
const SET_SCHOOLS = 'SET_SCHOOLS'

//action creators
const setStudents = (students)=> ({ type: SET_STUDENTS, students })
const setSchools = (schools)=> ({ type: SET_SCHOOLS, schools })

//thunks
const getStudents = () => {
  return async(dispatch)=> {
      const students = (await axios.get('/api/students')).data;
      return dispatch(setStudents(students));
  }
}

const getSchools = () => {
  return async(dispatch)=> {
      const schools = (await axios.get('/api/schools')).data;
      return dispatch(setSchools(schools));
  }
}

//store
const store = createStore(
  combineReducers({
    students: (state = [], action)=> {
      if(action.type === SET_STUDENTS){
        return action.students
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

export { getStudents, getSchools }
