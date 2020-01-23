import React from 'react';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import _ from 'lodash'
import Home from './components/common/Home'
import Register from './components/users/Register'
import Login from './components/users/Login'
import { startLogoutUser } from './actions/user'

import NotesList from './components/notes/List'
import NotesShow from './components/notes/Show'
import NotesNew from './components/notes/New'
import NotesEdit from './components/notes/Edit'

import CategoryList from './components/categories/List'
import CategoryShow from './components/categories/Show'
import CategoryNew from './components/categories/New'
import CategoryEdit from './components/categories/Edit'

function App(props) {
  const handleLogout = () =>
  {
      props.dispatch(startLogoutUser())
  }
  return (
   <BrowserRouter>
   <div>
    <div className="container-fullwidth">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
     
       <Link to="/" className="navbar-brand mb-0 h1"><img src="C:\Users\Sneha\ticket-master\src\ticket.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>Notes Application</Link>
      
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
       </button>
       

       <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
       <ul class="nav justify-content-end">
         <li class="navbar-nav">
           <Link  class=" nav-item nav-link active" to="/">Home<span class="sr-only">(current)</span></Link>
         </li>
         <div>

        { 
        
          (!_.isEmpty(props.user))?(
      
            <div>
           <li class="navbar-nav"><Link class="nav-item nav-link active" to="/notes">Notes <span class="sr-only">(current)</span></Link>
          <Link class="nav-item nav-link active" to="/categories">Categories <span class="sr-only">(current)</span></Link>
          <Link class="nav-item nav-link active" to="#" onClick = {handleLogout}  >Logout<span class="sr-only">(current)</span></Link></li>
          </div>
           ):(
           <div>
           <li class="navbar-nav"><Link class="nav-item nav-link active" to="/users/register">Register</Link>
          <Link class="nav-item nav-link active" to="/users/login">Login</Link></li>
           </div>
          )
 }  
 </div>
       </ul>
       </nav>
       <br/>
       <br/>
       </div>
       
       <div className="container">
         <Switch>
         <Route path="/" component={Home} exact={true} />
         <Route path="/users/register" component={Register} exact={true} />
         <Route path="/users/login" component={Login} exact={true} />
        
         

         <Route path="/notes" component={NotesList} exact={true} />
         <Route path="/notes/new" component={NotesNew} exact={true}/>
         <Route path="/notes/edit/:id" component={NotesEdit} exact={true}/>
         <Route path="/notes/:id" component={NotesShow} exact={true}/>

         <Route path="/categories" component={CategoryList} exact={true}/>
         <Route path="/categories/new" component={CategoryNew} exact={true} />
         <Route path="/categories/edit/:id" component={CategoryEdit} exact={true}/>
         <Route path="/categories/:id" component={CategoryShow} exact={true} />
         </Switch>
         </div>

       </div>
   </BrowserRouter>
  )
}

const mapStateToProps=(state)=>{
  return{
     user:state.user
  }
}
export default connect(mapStateToProps)(App)
