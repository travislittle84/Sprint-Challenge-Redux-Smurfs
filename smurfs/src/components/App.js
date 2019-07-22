import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getSmurfs, addSmurf, deleteSmurf } from '../actions/index'


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

  handleDelete = (event) => {
    event.preventDefault()
    const idToDelete = event.target.id
    this.props.deleteSmurf(idToDelete)
  }
   
  render() {    
    const { gettingSmurfs, smurfs, deletingSmurf } = this.props
    
    if (gettingSmurfs) {
      return <p>Getting Smurfs..</p>
    }

    if (deletingSmurf) {
      return <p>Deleting smurf..</p>
    }

    const { name, age, height } = this.state
    return (
      <div className="App">
        {smurfs.map(smurf => {
          return <p key={smurf.id}><span >{smurf.name}</span>
          <img
            alt={`Delete id: ${smurf.id}`}
            id={smurf.id}
            onClick={this.handleDelete}
            src="https://img.icons8.com/material-sharp/24/000000/delete-forever.png"
          /></p>
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
    deletingSmurf: state.deletingSmurf,
    smurfs: state.smurfs,
  }
}

const mapDispatchToProps = {
  getSmurfs: getSmurfs,
  addSmurf: addSmurf,
  deleteSmurf: deleteSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
