import React from 'react'

export default class TextInput extends React.Component {
  render() {
    const { placeholder, cl, text } = this.props

    return (
      <input type='text' placeholder={placeholder} className={cl}>{text}</input>
    )
  }
}
