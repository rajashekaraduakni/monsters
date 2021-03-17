import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {
  constructor(){
    super();
    this.state = {
      monisters:[],
      searchField: ''
    };
  }
  handleChange = (e) => {
    this.setState({ searchField:e.target.value })
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    .then(users => this.setState({monisters: users}))
  }
  render(){  
    const {monisters, searchField} = this.state;
    const filtersMonisters = monisters.filter(monister => 
        monister.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
      <h1>Monsters </h1>
        <SearchBox 
        placeholder="Search for Monster"
        handleChange={this.handleChange}
        />
        <CardList  monisters={filtersMonisters}> 
        </CardList>
      
      </div>
    );
  }
}

export default App;
