import React, { Component } from 'react'
// import mxM3 from './mx3.jpg'

// let src = ['fuente']

export default class Pic extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
          <img src={this.props.fuente} alt=''/>
      </div>
    )
  }
}

