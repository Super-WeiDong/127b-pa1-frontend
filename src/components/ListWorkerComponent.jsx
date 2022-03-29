import React, { Component } from 'react'
import WorkerService from '../services/WorkerService'

export default class ListWorkerComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            workers: []
        }
        this.addWorker = this.addWorker.bind(this)
        this.topKWorker = this.topKWorker.bind(this)
    }
  componentDidMount(){
    WorkerService.getWorkers().then((res) => {
        this.setState({workers : res.data});
    })
  }

  addWorker(){
      this.props.history.push('add-worker');
  }
  topKWorker(){
    this.props.history.push('topk');
  }
  render() {
    return (
      <div>
          <h2 className='text-center'>Workers List</h2>
         
          <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>ssn</th>
                            <th>name</th>
                            <th>rank</th>
                            <th>employing_state</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.workers.map(
                                worker =>
                                <tr key = {worker.ssn}>
                                    <td>{worker.ssn}</td>
                                    <td>{worker.name}</td>
                                    <td>{worker.rank}</td>
                                    <td>{worker.employing_state}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addWorker}> Add Worker</button>
                </div>
                <p> </p>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.topKWorker}> TopK Worker</button>
                </div>
          </div>
      </div>
    )
  }
}