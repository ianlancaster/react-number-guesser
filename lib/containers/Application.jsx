import React, { Component } from 'react' // eslint-disable-line
import Button from '../components/Button.jsx' // eslint-disable-line
import TextInput from '../components/TextInput.jsx' // eslint-disable-line
import TextLine from '../components/TextLine.jsx' // eslint-disable-line

export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      textLine1: 'Guess a number between 1 and 100',
      currentGuess: '',
      textLine2: '',
      textInputValue: '',
      maxGuess: 100,
      minGuess: 0,
    }
    this.guessButtonClick = this.guessButtonClick.bind(this)
    this.clearButtonClick = this.clearButtonClick.bind(this)
    this.resetButtonClick = this.resetButtonClick.bind(this)
    this.inputFieldKeyup = this.inputFieldKeyup.bind(this)
  }
  componentDidMount() {
    this.setApplicationHeight()
    this.generateRandomNumber()
  }
  setApplicationHeight() {
    const application = document.getElementById('application')
    application.style.height = `${window.innerHeight}px`
    window.onresize = () => {
      application.style.height = `${window.innerHeight}px`
    }
  }
  generateRandomNumber() {
    const { maxGuess, minGuess } = this.state
    const randomNumber = Math.round(Math.random() * (maxGuess - minGuess)) + minGuess
    this.setState({ randomNumber })
  }
  setButtonDisabled() {
    this.setGuessButtonDisabled()
    this.setClearButtonDisabled()
    this.setResetButtonDisabled()
  }
  setGuessButtonDisabled() {
    return this.state.textInputValue === ''
  }
  setClearButtonDisabled() {
    return true
  }
  setResetButtonDisabled() {
    return true
  }
  guessButtonClick() {
    // console.log('ping')
  }
  clearButtonClick() {
    // console.log('ping')
  }
  resetButtonClick() {
    // console.log('ping')
  }
  inputFieldKeyup(e) {
    this.setState({ textInputValue: e.target.value })
    this.setButtonDisabled()
  }
  render() {
    const { textLine1,
            currentGuess,
            textLine2,
            textInputValue } = this.state

    const guessButtonDisabled = this.setGuessButtonDisabled()
    const clearButtonDisabled = this.setClearButtonDisabled()
    const resetButtonDisabled = this.setResetButtonDisabled()

    console.log(this.state.randomNumber)

    return (
      <main>
        <h1>Number Guesser in React</h1>
        <TextLine text={textLine1} />
        <TextLine cl='numberGuess' text={currentGuess} />
        <TextLine text={textLine2} />
        <form>
          <TextInput placeholder='Your best guess' value={textInputValue} keyup={this.inputFieldKeyup}/>
          <section>
            <Button text='Guess' disabled={guessButtonDisabled} click={this.guessButtonClick} />
            <Button text='Clear' disabled={clearButtonDisabled} click={this.clearButtonClick} />
          </section>
          <Button text='Reset Game' disabled={resetButtonDisabled} click={this.resetButtonClick}/>
        </form>
      </main>
    )
  }
}
