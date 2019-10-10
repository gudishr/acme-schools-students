import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'

const _Nav = ({ students, schools }) => {

  const _schools = schools.map(school => {
    const _students = students.filter(student => student.schoolId === school.id)
    return {...school, num : _students }
  })

  let mostpopular = _schools[0]

  _schools.forEach(school => {
    school.num > mostpopular.num ? mostpopular = school : mostpopular
  })

  console.log(mostpopular)

  return(
    <nav>
      <NavLink to="/students">Students ({students.length})</NavLink>
      <NavLink to="/schools">Schools ({schools.length})</NavLink>
      <NavLink to={ mostpopular ? `/schools/${mostpopular.id}` : "#" }>Most Popular</NavLink>
    </nav>
)}

const Nav = connect(({ students, schools })=> {
  return {
    students,
    schools
  } 
})(_Nav)

export default Nav