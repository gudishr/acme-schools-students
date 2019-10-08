// const { NavLink, Link, HashRouter, Route } = ReactRouterDOM
// const { combineReducers, createStore } = Redux
// const { Provider, connect } = ReactRedux

// const Nav = ({ students, schools }) => {
//     return(
//       <nav>
//         <NavLink to="/students">Students</NavLink>
//         <NavLink to="/schools">Schools</NavLink>
//       </nav>
// )}

// // const Nav = connect(
// //   ({ students, schools })=> {
// //   return {
// //     students,
// //     schools
// //   };
// // }
// // )(_Nav);

// class App extends React.Component{
//   // componentDidMount(){
//   //   this.props.getStudents()
//   // }
//   render(){
//     return (
//         <HashRouter>
//           <Route component = { Nav } />
//           {/* <Route component = { Students } /> */}
//         </HashRouter>
//   )}
// }

// // const App = connect(({ students })=> {
// // return {
// // students
// // };
// // }, (dispatch)=> {
// // return {
// // getStudents: ()=> dispatch(getStudents())
// // };
// // })(_App);

// React.render(<App />, document.querySelector('#root'))