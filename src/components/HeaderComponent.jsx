import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

  render() {
    return (
      <div>
          <header>
              <nav className='navbar navbar-right navbar-expand-xl navbar-dark bg-dark text-center'>
                  <div>
                    <a href="#home" className='navbar-brand'>Home </a>
                    <a href="#forest" className='navbar-brand'>Forest </a>
                    <a href="#coverage" className='navbar-brand'>Coverage </a>
                    <a href="#worker" className='navbar-brand'>Worker </a>
                    <a href="#sensor" className='navbar-brand'>Sensor </a>
                    <a href="#report" className='navbar-brand'>Report </a>
                    <a href="#state" className='navbar-brand'>State </a>
                  </div>
              </nav>
          </header>
      </div>
    )
  }
}
