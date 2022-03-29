import React, { Component } from 'react'

export default class FooterComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }
  render() {
    return (
      <div>
          <footer className='footer'>
                <p></p>
                <span className='text-muted'>
                    All Rights Reserverd 2022 @Weidongwang
                </span>
          </footer>
      </div>
    )
  }
}