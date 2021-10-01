import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import './style.scss'

import { createOrderAction } from '../../redux/actions/newOrder'

import NewOrderProvider from '../../context/newOrder/newOrderProvider'
import Header from '../../components/Header'
import NewOrderTable from '../../components/NewOrderTable'
import NewOrderForm from '../../components/NewOrderForm'
import ContentPageTitle from '../../components/ContentPageTitle'

function NewAndEditOrder() {
  const { id: idOrderToEdit } = useParams()
  const orderToEdit = idOrderToEdit && JSON.parse(localStorage.getItem('allOrders')).find(current => current.id === idOrderToEdit)

  const history = useHistory()
  const dispatch = useDispatch()
  const state = useSelector(state => state.order)
  return (
    <NewOrderProvider>
      <div data-testid='new-order-page'>
        <Header />
        <div className='new-order-container'>
          <ContentPageTitle
            title={orderToEdit ? 'Editar Pedido' : 'Novo Pedido'}
            buttonText='Salvar Pedido'
            handleClick={() => dispatch(createOrderAction(state, history))}
          />
          <div className='new-order-page-content'>
            <NewOrderTable orderToEdit={orderToEdit}/>
            <NewOrderForm orderToEdit={orderToEdit}/>
          </div>
        </div>
      </div>
    </NewOrderProvider>
  )
}

export default NewAndEditOrder