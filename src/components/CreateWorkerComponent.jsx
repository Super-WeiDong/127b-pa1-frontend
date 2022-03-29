import React, { Component } from 'react'
import WorkerService from '../services/WorkerService';


export default class CreateWorkerComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            ssn:'',
            name :'',
            rank:'',
            employing_state:'',
        }
        this.changeSsnHandler =this.changeSsnHandler.bind(this);
        this.changeNameHandler =this.changeNameHandler.bind(this);
        this.changeRankHandler =this.changeRankHandler.bind(this);
        this.changeEmployingStateHandler =this.changeEmployingStateHandler.bind(this);
        this.saveWorker = this.saveWorker.bind(this);
    }


    saveWorker = (e) =>{
        e.preventDefault();
        if(this.state.ssn === ''){
            alert('ssn can not be empty')
        }else if(this.state.name === ''){
            alert('name can not be empty')
        }else if(this.state.rank === ''){
            alert('rank can not be empty')
        }else if(this.state.employing_state === ''){
            alert('employing_state can not be empty')
        }else if(this.state.ssn.length!== 9) {
			alert(this.state.ssn + ' is not 9 digit. Please type in 9 digit ssn number.')
		}else if(this.state.rank%1 !== 0||Number(this.state.rank)<0){
            alert('Rank has to be a positive integer.')
        }else{
            let worker = {ssn:this.state.ssn,name:this.state.name,rank:this.state.rank,employing_state:this.state.employing_state};
            console.log('worker =>' + JSON.stringify(worker));
            WorkerService.createWorker(worker).then(res =>{
                alert(res.data);
        })
        }
    }
    
    changeSsnHandler(event){
        this.setState({ssn:event.target.value})
    }
    changeNameHandler(event){
        this.setState({name:event.target.value})
    }
    changeRankHandler(event){
        this.setState({rank:event.target.value})
    }
    changeEmployingStateHandler(event){
        this.setState({employing_state:event.target.value})
    }
    cancel(){
        this.props.history.push('/worker');
    }
  render() {
    return (
      <div>
          <div className='container'>
              <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Add Worker</h3>
                    <div className='card-body'>
                        <form action="">
                            <div className='form-group'>
                                <label>ssn</label>
                                <input type='number' placeholder='type in a 9 digit number' name="ssn" className='form-control'
                                value={this.state.ssn} onChange={this.changeSsnHandler} />
                            </div>
                            <div className='form-group'>
                                <label>name</label>
                                <input type='text' placeholder='name' name="name" className='form-control'
                                value={this.state.name} onChange={this.changeNameHandler} />
                            </div>
                            <div className='form-group'>
                                <label>rank</label>
                                <input type='number' placeholder='type in a integer' name="rank" className='form-control'
                                value={this.state.rank} onChange={this.changeRankHandler} />
                            </div>
                            <div className='form-group'>
                                <label>employing_state</label>
                                <input type='text' placeholder='abbreviation of state e.g. MA' name="employing_state" className='form-control'
                                value={this.state.employing_state} onChange={this.changeEmployingStateHandler} />
                            </div>
                            <p>   </p>
                            <button className='btn btn-success' onClick={this.saveWorker}>Save</button>
                            <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:'10px'}}>Cancel</button>
                            <button className='btn btn-primary' onClick={this.cancel.bind(this)} style={{marginLeft:'10px'}}>Back to table</button>
                        </form>
                    </div>
                </div>
              </div>
          </div>
      </div>
    )
  }
}