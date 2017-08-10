import React from 'react';

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }

  getGenderSymbol(props) {
    if (this.props.gender === 'male') {
      return '♂'
    } else {
      return '♀'
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.props.name} (gender: ♂ or ♀) Gender: {this.getGenderSymbol}</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui primary button">Adopt pet</button>
          <button className="ui disabled button">Already adopted</button>
        </div>
      </div>
    );
  }
}

export default Pet;
