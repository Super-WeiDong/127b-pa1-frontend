import React, { Component } from 'react'
import SensorService from '../services/SensorService'

export default class ListSensorRankingComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            sensors: []
        }
    }
  componentDidMount(){
    SensorService.sensorRanking().then((res) => {
        this.setState({sensors : res.data});
    })
  }
  cancel(){
    this.props.history.push('/sensor');
  }
  render() {
    return (
      <div>
          <h2 className='text-center'>Sensors Ranking List</h2>
         
          <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>sensor_id</th>
                            <th>report_number</th>
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
                                    <td>{sensor.report_number}</td>
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
                    <button className='btn btn-primary' onClick={this.cancel.bind(this)} style={{marginLeft:'10px'}}>Back to table</button>
                </div>
          </div>
      </div>
    )
  }
}