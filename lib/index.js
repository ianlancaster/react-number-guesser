import React from 'react'
import { render } from 'react-dom'
import Application from './containers/Application.jsx' // eslint-disable-line

require('./styles/main.scss')

render(<Application/>, document.getElementById('application'))
