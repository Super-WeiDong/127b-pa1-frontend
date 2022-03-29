import React, { Component } from 'react'
import ReportService from '../services/ReportService'

export default class ListReportComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            reports: []
        }
    }
  componentDidMount(){
    ReportService.getReports().then((res) => {
        this.setState({reports : res.data});
    })
  }
  render() {
    return (
      <div>
          <h2 className='text-center'>Reports List</h2>
         
          <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>sensor_id</th>
                            <th>report_time</th>
                            <th>temperature</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.reports.map(
                                report =>
                                <tr key = {report.report_time}>
                                    <td>{report.sensor_id}</td>
                                    <td>{report.report_time}</td>
                                    <td>{report.temperature}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
          </div>
      </div>
    )
  }
}