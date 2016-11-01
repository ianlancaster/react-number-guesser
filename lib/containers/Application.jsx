import React, { Component } from 'react'

export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      test: 'test',
    }
  }
  render() {
    return (
      <div>
        <p>React/Sass/Mocha/Chai/Enzyme</p>
      </div>
    )
  }
}
