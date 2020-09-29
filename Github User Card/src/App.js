import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './Components/UserCard'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {}
    }
  }

  // Works with out conditionals in the render function because we change state after the initial rendering
  componentDidMount() {
    axios.get('https://api.github.com/users/leachtucker')
      .then(resp => {
        this.setState({
          ...this.state,
          userData: resp.data
        });
      })
      .catch(err =>{
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <UserCard userData={this.state.userData}/>
      </div>
    );
  }
}

export default App;
