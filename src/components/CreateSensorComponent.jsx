import React, { Component } from 'react'
import SensorService from '../services/SensorService';

export default class CreateSensorComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            sensor_id :'',
            x:'',
            y:'',
            last_charged:'',
            maintainer:'',
            last_read:'',
            energy:'',
        }
        this.changeSensorIdHandler =this.changeSensorIdHandler.bind(this);
        this.changeXHandler =this.changeXHandler.bind(this);
        this.changeYHandler =this.changeYHandler.bind(this);
        this.changeLastChargedHandler =this.changeLastChargedHandler.bind(this);
        this.changeMaintainerHandler =this.changeMaintainerHandler.bind(this);
        this.changeLastReadHandler =this.changeLastReadHandler.bind(this);
        this.changeEnergyHandler =this.changeEnergyHandler.bind(this);
        this.saveSensor = this.saveSensor.bind(this);
    }

    saveSensor = (e) =>{
        e.preventDefault();
        console.log(Number(this.state.energy) < 0)
        if(this.state.sensor_id === ''){
            alert('sensor_id can not be empty')
        }else if(this.state.x === ''){
            alert('x can not be empty')
        }else if(this.state.y === ''){
            alert('y can not be empty')
        }else if(this.state.last_charged === ''){
            alert('last_charged can not be empty')
        }else if(this.state.maintainer === ''){
            alert('maintainer can not be empty')
        }else if(this.state.last_read === ''){
            alert('last_read can not be empty')
        }else if(this.state.energy === ''){
            alert('energy can not be empty')
        }else if(this.state.sensor_id%1 !== 0||this.state.sensor_id < 0){
            alert('sensor_id has to be a positive integer.')
        }else if(this.state.energy%1 !== 0||this.state.energy < 0){
            alert('Energy has to be a positive integer.')
        }else{
            let sensor = {sensor_id:this.state.sensor_id,x:this.state.x,y:this.state.y,last_charged:this.state.last_charged,maintainer:this.state.maintainer,last_read:this.state.last_read,energy:this.state.energy};
            console.log('sensor =>' + JSON.stringify(sensor));
            SensorService.createSensor(sensor).then(res =>{
                alert(res.data);
            })
        } 
    }
    
    changeSensorIdHandler(event){
        this.setState({sensor_id:event.target.value})
    }
    changeXHandler(event){
        this.setState({x:event.target.value})
    }
    changeYHandler(event){
        this.setState({y:event.target.value})
    }
    changeLastChargedHandler(event){
        this.setState({last_charged:event.target.value})
    }
    changeMaintainerHandler(event){
        this.setState({maintainer:event.target.value})
    }
    changeLastReadHandler(event){
        this.setState({last_read:event.target.value})
    }
    changeEnergyHandler(event){
        this.setState({energy:event.target.value})
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
                    <h3 className='text-center'>Add Sensor</h3>
                    <div className='card-body'>
                        <form action="">
                            <div className='form-group'>
                                <label>sensor_id</label>
                                <input type='number' placeholder='sensor_id' name="sensor_id" className='form-control'
                                value={this.state.sensor_id} onChange={this.changeSensorIdHandler} />
                            </div>
                            <div className='form-group'>
                                <label>x</label>
                                <input type='number' placeholder='x' name="x" className='form-control'
                                value={this.state.x} onChange={this.changeXHandler} />
                            </div>
                            <div className='form-group'>
                                <label>y</label>
                                <input type='number' placeholder='y' name="y" className='form-control'
                                value={this.state.y} onChange={this.changeYHandler} />
                            </div>
                            <div className='form-group'>
                                <label>last_charged</label>
                                <input type='datetime-local' placeholder='yyyy-mm-dd' name="last_charged" className='form-control'
                                value={this.state.last_charged} onChange={this.changeLastChargedHandler} />
                            </div>
                            <div className='form-group'>
                                <label>maintainer</label>
                                <input type='number' placeholder='type in ssn of maintainer' name="maintainer" className='form-control'
                                value={this.state.maintainer} onChange={this.changeMaintainerHandler} />
                            </div>
                            <div className='form-group'>
                                <label>last_read</label>
                                <input type='datetime-local' placeholder='yyyy-mm-dd' name="last_read" className='form-control'
                                value={this.state.last_read} onChange={this.changeLastReadHandler} />
                            </div>
                            <div className='form-group'>
                                <label>energy</label>
                                <input type='number' placeholder='type in a integer' name="energy" className='form-control'
                                value={this.state.energy} onChange={this.changeEnergyHandler} />
                            </div>
                            <p>   </p>
                            <button className='btn btn-success' onClick={this.saveSensor}>Save</button>
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
