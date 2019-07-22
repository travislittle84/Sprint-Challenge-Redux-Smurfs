import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getSmurfs, addSmurf } from '../actions/index'


class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }
  componentDidMount() {
    this.props.getSmurfs()
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newSmurf = {
      id: Date.now(),
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    this.props.addSmurf(newSmurf)
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }
   
  render() {    
    const { gettingSmurfs, smurfs } = this.props
    
    if (gettingSmurfs) {
      return <p>Getting Smurfs..</p>
    }
    const { name, age, height } = this.state
    return (
      <div className="App">
        {smurfs.map(smurf => {
          return <p key={smurf.id}>{smurf.name}</p>
        })}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
          <input type="text" name="age" placeholder="Age" value={age} onChange={this.handleChange} />
          <input type="text" name="height" placeholder="Height" value={height} onChange={this.handleChange} />
          <button type="submit">Add Smurf</button>
        </form>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gettingSmurfs: state.gettingSmurfs,
    errorMessage: state.errorMessage,
    smurfs: state.smurfs,
  }
}

const mapDispatchToProps = {
  getSmurfs: getSmurfs,
  addSmurf: addSmurf,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
