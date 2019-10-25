import React, { Component } from 'react'

export default class Background extends Component {
	render() {
		const { title, text, url, animated } = this.props
		let face = ''
		animated ? face = 'face face2' : face = 'face static2'

		return (
			<div className="container">
				<div className="card">
					<div className={ face }>
            <div className="content">
              <h3>
                <a href={ url } target="_blank" rel="noopener noreferrer">{ title }</a>
              </h3>
              <p>{ text }</p>
            </div>
          </div>
				</div>
			</div>
		)
	}
}