import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './Components/UserCard'
import SearchForm from './Components/SearchForm';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      searchField: ''
    }
  }

  onChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    this.setState({
      [name]: value,
    })
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    this.fetchUserData(this.state.searchField);
  }

  fetchUserData = (username) => {
    axios.get(`https://api.github.com/users/${username}`)
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

  // Works without conditionals in the render function because we change state after the initial rendering
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
        <SearchForm searchField={this.state.searchField} onChange={this.onChange} onSubmit={this.onSubmit} />
        <UserCard userData={this.state.userData} onChange={this.onChange} />
      </div>
    );
  }
}

export default App;
