import React, { Component } from 'react';
import GitHub from './GitHub';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import GitHubUser from './GitHubUser';

class App extends Component {       
  render() {        
    return (
      <div>
        <Header />
      </div>
    );
  }
}
export default App;

class Header extends Component {
  render(){
    return (      
        <BrowserRouter>
          <div> 
            <Navbar>
              <Navbar.Header>
                  <Navbar.Brand>
                    React-Bootstrap
                  </Navbar.Brand>
              </Navbar.Header>  
              <Nav>
                <NavItem><Link to="/">Home</Link></NavItem>
                <NavItem><Link to="/github">GitHub</Link></NavItem>
              </Nav>
            </Navbar>                              
            <Switch>   
              <Route path="/github/user/:login/:score" component={GitHubUser} />                                     
              <Route path="/github" component={GitHub} />              
              <Route exact path="/" component={Home} />             
              <Route path="/*" component={NotFound} />                       
            </Switch>   
          </div>  
        </BrowserRouter>              
    )
  }
}

class Home extends Component {
  render(){
    return (
      <div>
        Home        
      </div>
    )
  }
}

class NotFound extends Component {
  render(){
    return <div>Not Found</div>
  }
}
//A <Router> may have only one child element

/**
 * 

import {requireAuth} from './RequireAuth';
 * 
 *         <BrowserRouter>
          <div>    
            <Navbar>
              <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#">React-Bootstrap</a>
                  </Navbar.Brand>
              </Navbar.Header>  
              <Nav>
                <NavItem><Link to="/">Home</Link></NavItem>
                <NavItem><Link to="/github">GitHub</Link></NavItem>
              </Nav>
            </Navbar>                
            <Switch>
              <Route path="/github/user/:login/:score" component={GitHubUser} />                          
              <Route path="/github" component={GitHub} />              
              <Route exact path="/" component={Home} />             
              <Route path="/*" component={NotFound} />                       
            </Switch>   
          </div>  
        </BrowserRouter>  
 * 
 */