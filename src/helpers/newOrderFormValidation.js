import { currentDate, hour, minutes } from '../helpers/currentDateTime'

export const newOrderFormValidation = (obj) => {
  const {
    delivery: {
      haveDeliveryTime,
      date,
      time,
      method,
    },
    client: {
      name,
      phone,
      address: {
        street,
        number,
        district,
      },
    },
    products,
  } = obj

  if ( name !== undefined && phone !== undefined ) {

    if ( method === 'dispatch' ) {
      if ( street === undefined && number === undefined && district === undefined ) {
        throw new Error('[ERRO] - Não foi inserido o nome da rua, número da residência ou bairro!')
      }
    }

    if ( haveDeliveryTime ) {
      if ( date === undefined && time === undefined ) {
        throw new Error('[ERRO] - Não foi inserida a data ou hora de entrega!')
      }
      if (date === currentDate) {
        const orderHour = parseInt(time.split(':')[0])
        const orderMinutes = parseInt(time.split(':')[1])

        const currentHour = parseInt(hour)
        const currentMinute = parseInt(minutes)

        if (orderHour < currentHour || (orderHour === currentHour && orderMinutes < currentMinute)) {
          throw new Error ('[ERRO] - Não é possível adicionar um pedido para uma hora que já passou!')
        }
      }
    }

    if ( products !== undefined ) {
      if ( products.length > 0 ) {
        return true
      }
      throw new Error('[ERRO] - Não é possível adicionar um pedido sem produtos!')
    }
    throw new Error('[ERRO] - Não é possível adicionar um pedido sem produtos!')

  }
  throw new Error('[ERRO] - Não foi inserido o nome ou telefone do cliente!')
}

