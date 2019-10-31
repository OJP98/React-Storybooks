import React, { Component } from 'react'

export default class Background extends Component {
  render() {
    const { bgColor, animated, icon } = this.props
    let face = ''
    let iconClass = ''
    animated ? face = 'face face1' : face = 'face static'

    if (icon === 'github') iconClass = 'fa fa-github-square'
    else if (icon === 'linkedin') iconClass = 'fa fa-linkedin-square'
    else if (icon === 'twitter') iconClass = 'fa fa-twitter-square'
    else iconClass = 'fa'

    return (
      <div className="container">
        <div className="card">
          <div className={ face }>
            <div className="content">
              <div className="icon" style={{ background: bgColor }}>
                <i className={ iconClass } aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}