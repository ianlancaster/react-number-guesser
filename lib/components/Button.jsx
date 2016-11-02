import React from 'react'

export default class Button extends React.Component {
  render() {
    const { cl, click, text } = this.props
    const disabled = this.props.disabled === 'true' ? 'disabled' : ''

    return (
      <button disabled={disabled} type='button' className={cl} onClick={click}>{text}</button>
    )
  }
}
