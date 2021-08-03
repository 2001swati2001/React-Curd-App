import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home.js";
import Navbar from "./components/Layout/Navbar.js";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import AddUser from './components/userdata/AddUser';
import EditUser from './components/userdata/EditUser';
import ViewUser from './components/userdata/ViewUser';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
          <Switch>
            
            <Route exact path={process.env.PUBLIC_URL + '/'}> 
              <Home /> 
            </Route>

            <Route exact path={process.env.PUBLIC_URL + "/users/add"}> 
              <AddUser /> 
            </Route>

            <Route exact path={process.env.PUBLIC_URL + "/users/edit/:id"}>  
              <EditUser /> 
            </Route>

            <Route exact path={process.env.PUBLIC_URL +"/users/view/:id"}> 
              <ViewUser /> 
            </Route>

          </Switch>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
