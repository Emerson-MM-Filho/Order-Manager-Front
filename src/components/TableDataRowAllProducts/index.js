import React, { /*useContext,*/ useState } from 'react'
import { useHistory } from 'react-router'
import './style.scss'

// import AllOrdersContext from '../../context/allOrders/allOrdersContext'
import ButtonIcon from '../ButtonIcon'

import { eyeIcon, editIcon, trashIcon } from '../../icons'


function TableDataRowAllProducts({data}) {
  const [complete, setComplete] = useState(false)

  const history = useHistory()

  const productType = () => {
    return data.type === 'Wheight' ? 'Quilo' : 'Unidade'
  }

  // const { setModal, setOrder } = useContext(AllOrdersContext)

  return(
    <tr className={`all-orders-table-row ${complete && 'product-selected'}`}>
      <td><input type='checkbox' onClick={() => setComplete(!complete)}/></td>
      <td>{data.id}</td>
      <td className='product-name'>{data.name}</td>
      <td>{productType()}</td>
      <td>{data.tag[0]}</td>
      <td>{data.description}</td>
      <td>{data.options.length}</td>
      <td className='actions'>
        <ButtonIcon
          className='show-more-icon'
          // onClick={() => {
          //   setModal(true)
          //   setOrder(data)
          // } }
          icon={eyeIcon}
        />
        <ButtonIcon
          className='edit-icon'
          icon={editIcon}
          onClick={() => history.push(`/order-edit/${data.id}`)}
        />
        <ButtonIcon className='trash-icon' icon={trashIcon} />
      </td>
    </tr>
  )
}

export default TableDataRowAllProducts