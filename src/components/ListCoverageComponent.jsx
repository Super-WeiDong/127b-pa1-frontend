import React, { Component } from 'react'
import CoverageService from '../services/CoverageService'

export default class ListCoverageComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            coverages: []
        }
    }
  componentDidMount(){
    CoverageService.getCoverages().then((res) => {
        this.setState({coverages : res.data});
    })
  }
  render() {
    return (
      <div>
          <h2 className='text-center'>Coverage List</h2>
         
          <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>forest_no</th>
                            <th>state</th>
                            <th>percentage</th>
                            <th>area</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.coverages.map(
                                coverage =>
                                <tr key = {coverage.forest_no}>
                                    <td>{coverage.forest_no}</td>
                                    <td>{coverage.state}</td>
                                    <td>{coverage.percentage}</td>
                                    <td>{coverage.area}</td>
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