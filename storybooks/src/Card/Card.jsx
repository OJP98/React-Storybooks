import React, { Component } from 'react'
import '../index.css'

export default class Card extends Component {
  render() {

    const { link } = this.props;
    return (
      <div className="container">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <div className="icon">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h3>
                <a href={link} target="_blank" rel="noopener noreferrer">Oscar Juárez</a>
              </h3>
              <p>Este es un mensaje de prueba</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}