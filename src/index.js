import React from 'react'
import ReactDOM from 'react-dom'

import { Provider, connect } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Nav from './Nav'
import Students from './Students'
import store, { getStudents, getSchools } from './store' 

class _App extends React.Component{
  componentDidMount(){
    this.props.fetchStudents()
    this.props.fetchSchools()
  }

  render(){
    return (
        <HashRouter>
          <Route component = { Nav } />
          <Switch>
            <Route exact path="/students" component = { Students } />
          </Switch>
        </HashRouter>
  )}
}

const mapStateToProps = ({students, schools}) => {
  return (
    {students, schools}
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudents: ()=> dispatch(getStudents()),
    fetchSchools: ()=> dispatch(getSchools()),
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(_App);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'))