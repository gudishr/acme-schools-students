import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import { HashRouter, Link, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Student from './Student'

const Nav = ({ students, schools }) => {
    return(
      <nav>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/schools">Schools</NavLink>
      </nav>
)}

// const Nav = connect(
//   ({ students, schools })=> {
//   return {
//     students,
//     schools
//   };
// }
// )(_Nav);

class App extends React.Component{
  // componentDidMount(){
  //   this.props.getStudents()
  // }
  render(){
    return (
        <HashRouter>
          <Route component = { Nav } />
          {/* <Route component = { Students } /> */}
        </HashRouter>
  )}
}

// const App = connect(({ students })=> {
// return {
// students
// };
// }, (dispatch)=> {
// return {
// getStudents: ()=> dispatch(getStudents())
// };
// })(_App);

React.render(<App />, document.querySelector('#root'))