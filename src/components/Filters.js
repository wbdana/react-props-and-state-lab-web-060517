import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'all'
    }
  }

  applyFilter = (e) => {


  }

  changeType = (e) => {
    console.log(e)
    // this.setState({
    //   type:
    // })
  }

  handleChange= (event) => {
    console.log(event.target.value)
    this.setState({type: event.target.value})
    setTimeout(() => {console.log(this.state)}, 5000)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.applyFilter} value={this.state.type}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
