import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor(props) {
    super(props)
  }

  isAdopted = (pet) => {
    return this.props.adoptedPets.includes(pet.id)
  }

  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map( (pet, index) => {return <Pet pet={pet} isAdopted={this.isAdopted(pet)} onAdoptPet={this.props.onAdoptPet} key={index} />})}
      </div>
    )
  }
}

export default PetBrowser;
