import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import RenderWithRouter from './helpers/RenderWithRouter'

import App from '../App'

describe('Check the Header component', () => {
  beforeEach(() => {
    RenderWithRouter(<App />)
  })
  
  test('Check if the component is rendered', () => {
    const header = screen.getByTestId('header-component')
    expect.anything(header);
  })

  test('Check logo', () => {
    const logo = screen.getByTestId('logo')
    expect.anything(logo);
  })

  test('Check search bar', () => {
    const searchBar = screen.getByTestId('search-bar')
    expect.anything(searchBar);
  })
  
  test('Check profile button', () => {
    const profileButton = screen.getAllByTestId('profile-button')
    expect.anything(profileButton)
  })

  test('Check navigation menu', () => {
    const nav = screen.getAllByTestId('nav-dropdown-button')
    expect.anything(nav)
  })

  test('Check dropdown open', () => {
    const nav = screen.getAllByTestId('nav-dropdown-button')
    fireEvent.click(nav[0])
    const dropdown = screen.getAllByTestId('nav-dropdown-open-container')
    expect.anything(dropdown)
  })
})

describe('Check the redirect', () => {
  test('Check dropdown redirect', () => {
    const { history } = RenderWithRouter(<App />);
    
    const nav = screen.getAllByTestId('nav-dropdown-button')
    fireEvent.click(nav[0])

    const link = screen.getAllByTestId('nav-dropdown-redirect-link')
    fireEvent.click(link[1])
    
    const { pathname } = history.location;

    expect(pathname).toBe('/new-order')
  })
})