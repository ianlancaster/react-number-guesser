import React from 'react'

export default class TextInput extends React.Component {
  constructor() {
    super()
    this.state = {
      value: undefined,
    }
  }
  render() {
    const { placeholder, cl, text, change, value, min, max } = this.props
    return (
      <input type='number'
             min={min}
             max={max}
             placeholder={placeholder}
             className={cl}
             onChange={change}
             value={value}>{text}</input>
    )
  }
}
