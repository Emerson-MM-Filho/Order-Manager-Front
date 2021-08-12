import React from 'react'
import { screen } from '@testing-library/react'
import RenderWithRouter from './helpers/RenderWithRouter'

import Header from '../components/Header'

describe('Test the Header component', () => {
  beforeEach(() => {
    RenderWithRouter(<Header />)
  })
  
  test('Check if the component is rendered', () => {
    const header = screen.getByTestId('header-component')
    expect.anything(header);
  })

  test('Check if the logo is rendered', () => {
    const logo = screen.getByTestId('logo')
    expect.anything(logo);
  })

  test('Check if the search bar is rendered', () => {
    const searchBar = screen.getByTestId('search-bar')
    expect.anything(searchBar);
  })
})