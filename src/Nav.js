import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const _Nav = ({ students, schools }) => {
  return(
    <nav>
      <NavLink to="/students">Students ({students.length})</NavLink>
      <NavLink to="/schools">Schools ({schools.length})</NavLink>
    </nav>
)}

const Nav = connect(({ students, schools })=> {
  return {
    students,
    schools
  }
})(_Nav)

export default Nav