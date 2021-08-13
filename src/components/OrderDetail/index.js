import React from 'react';
import { connect } from 'react-redux';
import './style.scss'

import { showOrderDetailModalAction } from '../../redux/actions/allOrders'
import DefaultModal from '../DefaultModal'; 
import { closeIcon } from '../../icons'

function OrderDetail({closeModal}) {
  return (
    <DefaultModal>
      <div className='order-detail'>
        <h2>Detalhes do Pedido</h2>
        <button type='button' onClick={() => closeModal(false)}>{closeIcon}</button>
      </div>
    </DefaultModal>
  )
}

const mapDispatchToProps = (dispatch) => ({
  closeModal: (param) => dispatch(showOrderDetailModalAction(param))
})

export default connect(null, mapDispatchToProps)(OrderDetail);