import React from 'react' // eslint-disable-line
import { shallow, mount, render } from 'enzyme' // eslint-disable-line
import { expect } from 'chai' // eslint-disable-line
import Application from '../../lib/containers/Application.jsx' // eslint-disable-line

require('sinon')

describe('Application Feature Test', () => {
  context('Sample Context', () => {
    it('should have a test state that equals "test"', () => {
      const application = shallow(<Application />)
      expect(application.state('test')).to.equal('test')
    })
  })
})

require('../unit/Application.unit')
