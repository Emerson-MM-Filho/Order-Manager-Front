import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import './style.scss'

import { createOrderAction } from '../../redux/actions/newOrder'

import NewOrderProvider from '../../context/newOrder/newOrderProvider'
import Header from '../../components/Header'
import NewOrderTable from '../../components/NewOrderTable'
import NewOrderForm from '../../components/NewOrderForm'
import ContentPageTitle from '../../components/ContentPageTitle'

function NewAndEditOrder() {
  const history = useHistory()
  const dispatch = useDispatch()
  const state = useSelector(state => state.order)
  return (
    <NewOrderProvider>
      <div data-testid='new-order-page'>
        <Header />
        <div className='new-order-container'>
          <ContentPageTitle
            title='Novo Pedido'
            buttonText='Salvar Pedido'
            handleClick={() => {
              dispatch(createOrderAction(state, history))
            }}
          />
          <div className='new-order-page-content'>
            <NewOrderTable />
            <NewOrderForm />
          </div>
        </div>
      </div>
    </NewOrderProvider>
  )
}

export default NewAndEditOrder