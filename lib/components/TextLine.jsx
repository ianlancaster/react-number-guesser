import React from 'react'

export default class TextLine extends React.Component {
  render() {
    const { cl, text } = this.props

    return (
      <p className={cl}>{text}</p>
    )
  }
}
