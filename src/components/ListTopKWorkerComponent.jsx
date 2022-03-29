import React, { Component } from 'react'
import WorkerService from '../services/WorkerService'

export default class ListTopKWorkerComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            topks: [],
            k:""
        }
        this.changeKStateHandler =this.changeKStateHandler.bind(this);
    }
    showWorker = (e) =>{
        e.preventDefault();
        if(this.state.k === ''){
            alert('k can not be empty')
        }else if(this.state.k%1 !== 0||Number(this.state.k)<0)
            alert('k has to be a positive integer.')
        WorkerService.getTopKWorkers(this.state.k).then((res) => {
            this.setState({topks : res.data});
        })
    }
    changeKStateHandler(event){
        this.setState({k:event.target.value})
    }
    cancel(){
        this.props.history.push('/worker');
    }
  render() {
    return (
      <div>
          <h2 className='text-center'>TopK Workers</h2>
         
          <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>ssn</th>
                            <th>name</th>
                            <th>rank</th>
                            <th>employing_state</th>
                            <th>number_of_sensor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.topks.map(
                                topk =>
                                <tr key = {topk.ssn}>
                                    <td>{topk.ssn}</td>
                                    <td>{topk.name}</td>
                                    <td>{topk.rank}</td>
                                    <td>{topk.employing_state}</td>
                                    <td>{topk.number_of_sensor}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <form action="">
                    <div className='form-group'>
                        <label>k</label>
                        <input type='number' placeholder='type in a integer' name="k" className='form-control'
                        value={this.state.k} onChange={this.changeKStateHandler} />
                    </div>
                    <p>   </p>
                    <button className='btn btn-success' onClick={this.showWorker}>Show</button>
                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:'10px'}}>Cancel</button>
                    <button className='btn btn-primary' onClick={this.cancel.bind(this)} style={{marginLeft:'10px'}}>Back to table</button>
                </form>
          </div>
      </div>
    )
  }
}