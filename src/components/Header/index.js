import React from 'react'
import './style.scss'

import SearchBar from '../SearchBar'
import ButtonIcon from '../ButtonIcon'
import ProfileButton from '../ProfileButton'
import NavSelectButton from '../NavSelectButton'

import Logo from '../Logo'
import { alertIcon, settingsIcon, ordersIcon, productIcon } from '../../icons';

function HeaderComponent() {
  return (
    <header className='header-component'>
      <div className='header-top-side'>
        <Logo />
        <SearchBar theme='white'/>
        <div className='button-group'>
          <ProfileButton />
          <ButtonIcon icon={ alertIcon }/>
          <ButtonIcon icon={ settingsIcon }/>
        </div>
      </div>
      <div className='header-bottom-side'>
        <NavSelectButton icon={ ordersIcon } text={'Pedidos'}/>
        <NavSelectButton icon={ productIcon } text={'Produtos'}/>
      </div>
    </header>
  )
}

export default HeaderComponent