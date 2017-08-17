import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }

  genderSymbol = () => {
    if (this.props.pet.gender === 'male') {
      return '♂'
    } else {
      return '♀'
    }
  }

  adopt = (event) => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  renderButton = (props) => {
    if (this.props.isAdopted !== true) {
      return <button className="ui primary button" onClick={this.adopt}>Adopt pet</button>
    } else {
      return <button className="ui disabled button">Already adopted</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.props.pet.name} <br/> Gender: {this.genderSymbol()}</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderButton()}
        </div>
      </div>
    );
  }
}

export default Pet;
