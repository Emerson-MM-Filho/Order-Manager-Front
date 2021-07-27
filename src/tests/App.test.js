import React from 'react'
import { screen } from '@testing-library/react'
import RenderWithRouter from './helpers/RenderWithRouter'

import App from '../App'

describe('Test the routes', () => {
  test('Check if the "/" route renders the home page', () => {
    const { history } = RenderWithRouter(<App />)
    const { pathname } = history.location

    expect(pathname).toBe('/')

    const homeComponent = screen.getByTestId('homeComponent')

    expect.anything(homeComponent);
  })
})