import React, { Component } from 'react' // eslint-disable-line
import Button from '../components/Button.jsx' // eslint-disable-line
import TextInput from '../components/TextInput.jsx' // eslint-disable-line
import TextLine from '../components/TextLine.jsx' // eslint-disable-line

export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      currentGuess: null,
      textInputValue: '',
      maxGuess: 100,
      minGuess: 0,
      randomNumber: undefined,
    }
    this.guessButtonClick = this.guessButtonClick.bind(this)
    this.clearButtonClick = this.clearButtonClick.bind(this)
    this.resetButtonClick = this.resetButtonClick.bind(this)
    this.inputFieldChange = this.inputFieldChange.bind(this)
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
  guessButtonClick() {
    this.setState({
      currentGuess: this.state.textInputValue,
    })
    this.clearButtonClick()
  }
  clearButtonClick() {
    this.setState({ textInputValue: '' })
  }
  resetButtonClick() {
    const { randomNumber, currentGuess, minGuess, maxGuess } = this.state
    this.setState({
      currentGuess: null,
      textInputValue: '',
      maxGuess: randomNumber == currentGuess ? maxGuess + 10 : maxGuess, // eslint-disable-line
      minGuess: randomNumber == currentGuess ? minGuess - 10 : minGuess, // eslint-disable-line
      randomNumber: undefined,
    })
    this.generateRandomNumber()
  }
  inputFieldChange(e) {
    this.setState({ textInputValue: e.target.value })
  }
  render() {
    const { textInputValue, randomNumber, minGuess, maxGuess } = this.state

    const currentGuess = this.state.currentGuess ? parseInt(this.state.currentGuess, 10) : ''

    console.log('currentGuess', currentGuess)
    console.log('randomNumber', randomNumber)

    let textLine1 = ''
    let textLine2 = ''
    if (currentGuess > randomNumber) { textLine2 = 'That number is too high. Guess Again.' }
    if (currentGuess < randomNumber) { textLine2 = 'That number is too low. Guess Again.' }
    if (currentGuess > maxGuess || currentGuess < minGuess) { textLine2 = 'That guess is outside of the range of values. Try again.' }
    if (isNaN(currentGuess)) { textLine2 = 'That is not a number. Try Again' }
    if (currentGuess) { textLine1 = 'Your last guess was...' }
    if (currentGuess === randomNumber) {
      textLine1 = ''
      textLine2 = 'Woohoo! You guessed the number!'
    }
    if (!currentGuess) {
      textLine1 = `Guess a number between ${minGuess} and ${maxGuess}`
      textLine2 = ''
    }

    const guessButtonDisabled = textInputValue === ''
    const clearButtonDisabled = textInputValue === ''
    const resetButtonDisabled = textLine2 === ''

    return (
      <main>
        <h1>Number Guesser in React</h1>
        <TextLine text={textLine1} />
        <TextLine cl='numberGuess' text={currentGuess} />
        <TextLine text={textLine2} />
        <form>
          <TextInput placeholder='Your best guess'
                     value={textInputValue}
                     min={minGuess}
                     max={maxGuess}
                     change={this.inputFieldChange}/>
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
