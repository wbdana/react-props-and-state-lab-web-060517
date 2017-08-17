import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    }
  }

  onChangeType = (newType) => {
    this.setState({
      filters: {
        type: `${newType}`
      }
    })
  }

  onFindPetsClick = () => {
    const url = '/api/pets'
    if (this.state.filters.type !== 'all') {
      var type = this.state.filters.type
      fetch(url + `?type=${type}`)
        .then( (response) => {return response.json()} )
        // .then( (response) => {console.log(response)} )
        .then( (pets) => { this.setState({
          pets: [...pets]
        })})
    } else {
      fetch(url)
        .then( (response) => {return response.json()} )
        .then( (pets) => { this.setState({
          pets: [...pets]
        })})
    }
  }

  onAdoptPet = (petId) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} filters={this.state.filters} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} adoptedPets={this.state.adoptedPets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
