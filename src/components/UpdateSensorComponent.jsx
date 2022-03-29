import React, { Component } from 'react'
import SensorService from '../services/SensorService';

export default class UpdateSensorComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            x: "",
            y: "",
            energy:"",
            last_charged:"",
            temperature:"",
        }
        this.changeXHandler =this.changeXHandler.bind(this);
        this.changeYHandler =this.changeYHandler.bind(this);
        this.changeEnergyIdHandler =this.changeEnergyIdHandler.bind(this);
        this.changeLastChargedHandler =this.changeLastChargedHandler.bind(this);
        this.changeTemperatureHandler =this.changeTemperatureHandler.bind(this);
        this.updateSensor = this.updateSensor.bind(this);
    }

    updateSensor = (e) =>{
        e.preventDefault();
        if(this.state.x === ''){
            alert('x can not be empty')
        }else if(this.state.y === ''){
            alert('y can not be empty')
        }else if(this.state.energy === ''){
            alert('energy can not be empty')
        }else if(this.state.last_charged === ''){
            alert('last_charged can not be empty')
        }else if(this.state.temperature === ''){
            alert('temperature can not be empty')
        }else if(this.state.energy%1 !== 0||this.state.energy < 0){
            alert('Energy has to be a positive integer.')
        }else{
            let sensorUp = {x:this.state.x,y:this.state.y,energy:this.state.energy,last_charged:this.state.last_charged,temperature:this.state.temperature};
            SensorService.updateSensor(sensorUp).then(res =>{
                alert(res.data);
            })
        }
    }
    
    changeXHandler(event){
        this.setState({x:event.target.value})
    }
    changeYHandler(event){
        this.setState({y:event.target.value})
    }
    changeEnergyIdHandler(event){
        this.setState({energy:event.target.value})
    }
    changeLastChargedHandler(event){
        this.setState({last_charged:event.target.value})
    }
    changeTemperatureHandler(event){
        this.setState({temperature:event.target.value})
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
                    <h3 className='text-center'>Update Sensor</h3>
                    <div className='card-body'>
                        <form action='submit' >
                            <div className='form-group'>
                                <label>X coordinate</label>
                                <input type='number' placeholder='X coordinate' name="x" className='form-control'
                                value={this.state.x} onChange={this.changeXHandler} required/>
                            </div>
                            <div className='form-group'>
                                <label>Y coordinate</label>
                                <input type='number' placeholder='Y coordinate' name="y" className='form-control'
                                value={this.state.y} onChange={this.changeYHandler} required/>
                            </div>
                            <div className='form-group'>
                                <label>energy</label>
                                <input type='number' placeholder='energy' name="energy" className='form-control'
                                value={this.state.energy} onChange={this.changeEnergyIdHandler} required/>
                            </div>
                            <div className='form-group'>
                                <label>last_charged</label>
                                <input type='datetime-local' placeholder='yyyy-mm-dd' name="last_charged" className='form-control'
                                value={this.state.last_charged} onChange={this.changeLastChargedHandler} required/>
                            </div>
                            <div className='form-group'>
                                <label>temperature</label>
                                <input type='number' placeholder='temperature' name="temperature" className='form-control'
                                value={this.state.temperature} onChange={this.changeTemperatureHandler} required/>
                            </div>
                            <p>   </p>
                            <button type='submit' className='btn btn-success' onClick={this.updateSensor}>Update</button>
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