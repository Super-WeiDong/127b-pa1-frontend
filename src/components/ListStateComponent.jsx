import React, { Component } from 'react'
import StateService from '../services/StateService'

export default class ListStateComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            states: []
        }
        this.addState = this.addState.bind(this)
    }
  componentDidMount(){
    StateService.getState().then((res) => {
        this.setState({states : res.data});
    })
  }

  addState(){
      this.props.history.push('add-state');
  }
  
  render() {
    return (
      <div>
          <h2 className='text-center'>State List</h2>
         
          <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>abbreviation</th>
                            <th>area</th>
                            <th>population</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.states.map(
                                state =>
                                <tr key = {state.name}>
                                    <td>{state.name}</td>
                                    <td>{state.abbreviation}</td>
                                    <td>{state.area}</td>
                                    <td>{state.population}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addState}> Add State</button>
                </div>
          </div>
      </div>
    )
  }
}