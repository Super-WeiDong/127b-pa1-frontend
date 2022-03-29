import React, { Component } from 'react'


export default class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }
   
  render() {
    return (
      <div className='container-fluid" row form-group text-center'>
          <span></span>
          <h1>Hello!</h1>
          <h1>Welcome to Forest Management System</h1>
          <div >
              <ul class="list-group">
                <li class="list-group-item"><a href="#forest" className='navbar-brand'>Forest </a></li>
                <li class="list-group-item"><a href="#coverage" className='navbar-brand'>Coverage </a></li>
                <li class="list-group-item"><a href="#worker" className='navbar-brand'>Worker </a></li>
                <li class="list-group-item"><a href="#sensor" className='navbar-brand'>Sensor </a></li>
                <li class="list-group-item"><a href="#report" className='navbar-brand'>Report </a></li>
                <li class="list-group-item"> <a href="#state" className='navbar-brand'>State </a></li>
              </ul>
        </div>
      </div>
    )
  }
}
