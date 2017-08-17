import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    let newType = event.target.value
    this.props.onChangeType(newType)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.props.filters.type} onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="micropig">Micropig</option>
          </select>
        </div>
        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
