import React from 'react'
import './style.scss'

import { searchIcon } from '../../icons'

function SearchBar({theme, testId}) {
  return (
    <div className='search-bar' data-testid={testId}>
      <span className={theme}>{ searchIcon }</span>
      <input type='text' className={theme} placeholder='Pesquisar'/>
    </div>
  )
}

export default SearchBar