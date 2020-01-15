import React, { Component } from 'react';
import { Cardlist } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monster: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res =>
        res.json())
      .then(users => this.setState({ monster: users }))
  }

  handleChance= (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monster, searchField } = this.state
    const filteredMonster = monster.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1> Monster Rolodex </h1>
        <SearchBox
          placeholder='search monster'
          handleChance={this.handleChance}
        />
        <Cardlist monster={filteredMonster} />
      </div>
    )
  }
}

export default App;
