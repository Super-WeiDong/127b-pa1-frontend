import React, { Component } from 'react'
import SensorService from '../services/SensorService';

export default class SwitchDutiesComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            a:'',
            b:'',
        }
        this.changeAHandler =this.changeAHandler.bind(this);
        this.changeBHandler =this.changeBHandler.bind(this);
        this.updateDuties = this.updateDuties.bind(this);
    }

    updateDuties = (e) =>{
        e.preventDefault();
        if(this.state.a === ''){
            alert('a can not be empty')
        }else if(this.state.b === ''){
            alert('b can not be empty')
        }else if(this.state.a === this.state.b){
            alert('can not switch duties of the same person')
        }else{
            SensorService.Switch(this.state.a,this.state.b).then(res =>{
                alert(res.data);
            })
        }
    }
    
    changeAHandler(event){
        this.setState({a:event.target.value})
    }
    changeBHandler(event){
        this.setState({b:event.target.value})
    }
    cancel(){
        this.props.history.push('/sensor');
    }
  render() {
    return (
      <div>
          <div className='container'>
              <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h3 className='text-center'>Switch Duties</h3>
                    <div className='card-body'>
                        <form action="">
                            <div className='form-group'>
                                <label>name of worker A</label>
                                <input type='text' placeholder='name of worker A' name="a" className='form-control'
                                value={this.state.a} onChange={this.changeAHandler} />
                            </div>
                            <div className='form-group'>
                                <label>name of worker A</label>
                                <input type='text' placeholder='name of worker B' name="b" className='form-control'
                                value={this.state.b} onChange={this.changeBHandler} />
                            </div>
                            <p>   </p>
                            <button className='btn btn-success' onClick={this.updateDuties}>Save</button>
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