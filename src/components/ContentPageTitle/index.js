import React from 'react'
import './style.scss'
import DefaultButton from '../../components/DefaultButton'

import { plusIcon } from '../../icons'

function ContentPageTitle({title, buttonText, handleClick}) {
  return (
    <div className='content-page-title'>
      <h1>{title}</h1>
      <DefaultButton icon={plusIcon} text={buttonText} handleClick={handleClick}/>
    </div>
  )
}

export default ContentPageTitle