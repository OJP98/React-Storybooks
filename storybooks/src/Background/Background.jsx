import React, { Component } from 'react'

export default class Background extends Component {
  render() {
    const { bgColor, animated, icon } = this.props
    let face = ''
    animated ? face = 'face face1' : face = 'face static'

    return (
      <div className="container">
        <div className="card">
          <div className={ face }>
            <div className="content">
              <div className="icon" style={{ background: bgColor }}>
                <i className="fa" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}