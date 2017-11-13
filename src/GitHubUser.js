import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class GitHubUser extends Component {
 
  constructor(props){ 
      super(props);  
      this.handleClick = this.handleClick.bind(this);                                   
  }

  handleClick(e) {
    this.props.history.push("/github");  
  }

  render() { 
    return (
      <div>                
        <h1>User Login: { this.props.match.params.login }</h1>
        <h2>User Score: { this.props.match.params.score }</h2>`                                                                                                                                
        <Button bsStyle="primary" onClick={this.handleClick}>Go to GitHub Users</Button>        
      </div>
    );
  }
}

export default GitHubUser;