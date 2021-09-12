import React from 'react'
import './style.scss'

import SearchBar from '../SearchBar'
import ButtonIcon from '../ButtonIcon'
import ProfileButton from '../ProfileButton'
import NavSelectButton from '../NavSelectButton'

import Logo from '../Logo'
import { alertIcon, settingsIcon, ordersIcon, productIcon } from '../../icons';

const ordersLinks = [
  {name: 'Todos os Pedidos', link: '/'},
  {name: 'Novo Pedido', link: '/new-order'}
]

const productsLinks = [
  {name: 'Todos os Produtos', link: '/products'},
  {name: 'Novo Produto', link: '/new-product'}
]

function Header() {
  return (
    <header className='header-component' data-testid='header-component'>
      <div className='header-top-side'>
        <Logo testId='logo'/>
        <SearchBar theme='white' testId='search-bar'/>
        <div className='button-group'>
          <ProfileButton />
          <ButtonIcon icon={ alertIcon }/>
          <ButtonIcon icon={ settingsIcon }/>
        </div>
      </div>
      <div className='header-bottom-side'>
        <NavSelectButton icon={ ordersIcon } text={'Pedidos'} options={ordersLinks}/>
        <NavSelectButton icon={ productIcon } text={'Produtos'} options={productsLinks}/>
      </div>
    </header>
  )
}

export default Header