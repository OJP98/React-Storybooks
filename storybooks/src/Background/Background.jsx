import React, { Component } from 'react'

export default class Background extends Component {
  render() {
    const { color } = this.props

    return (
      <div style={{backgroundColor: color}}>
        <p>Holaa</p>
      </div>
    )
  }
}