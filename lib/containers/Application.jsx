import React, { Component } from 'react' // eslint-disable-line
import Button from '../components/Button.jsx' // eslint-disable-line
import TextInput from '../components/TextInput.jsx' // eslint-disable-line
import TextLine from '../components/TextLine.jsx' // eslint-disable-line

export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      test: 'test',
    }
  }
  componentDidMount() {
    this.setApplicationHeight()
  }
  setApplicationHeight() {
    const application = document.getElementById('application')
    application.style.height = `${window.innerHeight}px`
    window.onresize = () => {
      application.style.height = `${window.innerHeight}px`
    }
  }
  render() {
    return (
      <main>
        <h1>Number Guesser in React</h1>
        <TextLine text='text line one' />
        <TextLine cl='numberGuess' text='22'/>
        <TextLine text='text line three'/>
        <form>
          <TextInput placeholder='Your best guess'/>
          <section>
            <Button text='Guess' disabled='false'/>
            <Button text='Clear' disabled='true'/>
          </section>
          <Button text='Reset Game' disabled='true'/>
        </form>
      </main>
    )
  }
}
