import React, { Component } from 'react'
import ForestService from '../services/ForestService'

export default class ListForestComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            forests: []
        }
        this.addForest = this.addForest.bind(this)
        this.updateForest = this.updateForest.bind(this)
    }
  componentDidMount(){
    ForestService.getForests().then((res) => {
        this.setState({forests : res.data});
    })
  }
  addForest(){
      this.props.history.push('add-forest');
  }
  updateForest(){
    this.props.history.push('update-forest');
    }
  render() {
    return (
      <div>
          <h2 className='text-center'>Forests List</h2>
         
          <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>forest_no</th>
                            <th>name</th>
                            <th>area</th>
                            <th>acid_level</th>
                            <th>mbr_xmin</th>
                            <th>mbr_xmax</th>
                            <th>mbr_ymin</th>
                            <th>mbr_ymax</th>
                            <th>state</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.forests.map(
                                forest =>
                                <tr key = {forest.forest_no}>
                                    <td>{forest.forest_no}</td>
                                    <td>{forest.name}</td>
                                    <td>{forest.area}</td>
                                    <td>{forest.acid_level}</td>
                                    <td>{forest.mbr_xmin}</td>
                                    <td>{forest.mbr_xmax}</td>
                                    <td>{forest.mbr_ymin}</td>
                                    <td>{forest.mbr_ymax}</td>
                                    <td>{forest.state}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addForest}> Add Forest</button>
                </div>
                <p>   </p>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.updateForest}> Update Forest</button>
                </div>
          </div>

      </div>
    )
  }
}


