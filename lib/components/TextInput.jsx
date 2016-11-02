import React from 'react'

export default class TextInput extends React.Component {
  constructor() {
    super()
    this.state = {
      value: undefined,
    }
  }
  render() {
    const { placeholder, cl, text, change, value } = this.props
    return (
      <input type='text'
             placeholder={placeholder}
             className={cl}
             onChange={change}
             value={value}>{text}</input>
    )
  }
}
