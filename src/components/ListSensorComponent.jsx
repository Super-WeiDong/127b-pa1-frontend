import React, { Component } from 'react'
import SensorService from '../services/SensorService'

export default class ListSensorComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            sensors: []
        }
        this.addSensor = this.addSensor.bind(this)
        this.switch = this.switch.bind(this)
        this.update = this.update.bind(this)
        this.ranking = this.ranking.bind(this)
    }
  componentDidMount(){
    SensorService.getSensors().then((res) => {
        this.setState({sensors : res.data});
    })
  }
  addSensor(){
      this.props.history.push('add-sensor');
  }
  switch(){
    this.props.history.push('switch-duty');
  }
  update(){
    this.props.history.push('update-sensor');
  }
  ranking(){
    this.props.history.push('ranking');
  }
  render() {
    return (
      <div>
          <h2 className='text-center'>Sensors List</h2>
         
          <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>sensor_id</th>
                            <th>x</th>
                            <th>y</th>
                            <th>last_charged</th>
                            <th>maintainer</th>
                            <th>last_read</th>
                            <th>energy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.sensors.map(
                                sensor =>
                                <tr key = {sensor.sensor_id}>
                                    <td>{sensor.sensor_id}</td>
                                    <td>{sensor.x}</td>
                                    <td>{sensor.y}</td>
                                    <td>{sensor.last_charged}</td>
                                    <td>{sensor.maintainer}</td>
                                    <td>{sensor.last_read}</td>
                                    <td>{sensor.energy}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addSensor}> Add Sensor</button>
                    <p>   </p>
                    <button className='btn btn-primary' onClick={this.switch} > Switch Workers Duties</button>
                    <p>   </p>
                    <button className='btn btn-primary' onClick={this.update} > Update Sensor</button>
                    <p>   </p>
                    <button className='btn btn-primary' onClick={this.ranking} > Display Sensor Ranking</button>
                </div>
          </div>
      </div>
    )
  }
}