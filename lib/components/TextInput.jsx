import React from 'react'

export default class TextInput extends React.Component {
  render() {
    const { placeholder, cl, text, keyup, textInputValue } = this.props

    return (
      <input type='text'
             placeholder={placeholder}
             className={cl}
             onKeyUp={keyup}
             value={textInputValue}>{text}</input>
    )
  }
}
