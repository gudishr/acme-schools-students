import React from 'react'
import ReactDOM from 'react-dom'

import { Provider, connect } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Nav from './Nav'
import Students from './Students'
import School from './School'
import store, { getStudents, getSchools } from './store' 
import Schools from './Schools';
import CreateStudent from './Create'

class _App extends React.Component{
  componentDidMount(){
    this.props.fetchStudents()
    this.props.fetchSchools()
  }

  render(){
    return (
        <HashRouter>
          <Route component = { Nav } />
          <CreateStudent />
          <Switch>
            <Route path="/students" component = { Students } />
            <Route exact path="/schools" component = { Schools } />
            <Route path="/schools/:id" component = { School } />
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