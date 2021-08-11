import React from 'react'
import './style.scss'

import DefaultContainer from '../DefaultContainer'
import SearchBar from '../SearchBar'

function AllOrdersTable() {
  return (
    <DefaultContainer>
      <div className='all-orders-table-container'>
        <SearchBar theme='gray'/>
      </div>
    </DefaultContainer>
  )
}

export default AllOrdersTable