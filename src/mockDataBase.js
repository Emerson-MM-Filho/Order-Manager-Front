export const mockOrders = [
  {
    id: '#SK2546',
    createAt: '13/07/2021',
    note: 'Decorar o bolo com a cor azul',
    payment: {
      method: 'Cartão',
      status: 'A Receber',
    },
    delivery: {
      date: '10/10/2021',
      time: '16:20',
      method: 'dispatch',
    },
    client: {
      name: 'Emerson Filho',
      phone: 69981563880,
      address: {
        street: 'Rua Luiz Lenzi',
        number: 3693,
        district: 'Village do sol',
        complement: 'Casa com muro cinza',
      },
    }, 
    products: [
      {
        id: 1,
        name: 'Torta',
        quantity: 2000,
        type: 'Wheight',
        description: 'Torta com massa crocante decorada de acordo com a opção de sabor.',
        tag: ['torta'],
        code: '#PR256',
        option: {
          id: 1,
          optionName: 'Chocotorta Argentina',
          price: 60,
          image: 'https://www.comidaereceitas.com.br/wp-content/uploads/2017/01/chocotorta.jpg'
        },
      },
      {
        id: 2,
        name: 'Bombom',
        quantity: 5,
        type: 'Unity',
        description: 'Bombom decorado com fios de chocolate',
        tag: ['bombom'],
        code: '#PR345',
        option: {
          id: 1,
          optionName: 'Morango',
          price: 8,
          image: 'https://p7m4z9n9.stackpathcdn.com/wp-content/uploads/2020/04/receita_bombomdemorango.jpg'
        },
      },
      {
        id: 3,
        name: 'Bala Baiana',
        quantity: 15,
        type: 'Unity',
        description: 'Bala de coco coberta com açucar',
        tag: ['Bala'],
        code: '#PR345',
        option: {
          id: 1,
          optionName: 'Côco',
          price: 2.50,
          image: 'https://comidinhasdochef.com/wp-content/uploads/2018/05/Bala-Baiana-de-Coco.jpg'
        },
      },
    ],
  },
  {
    id: '#SK2547',
    createAt: '14/07/2021',
    note: '',
    payment: {
      method: 'Dinheiro',
      status: 'Pago',
    },
    delivery: {
      date: '11/10/2021',
      time: '10:00',
      method: 'pickUp',
    },
    client: {
      name: 'Luana Escarponeza',
      phone: 69999428777,
      address: {
        street: 'Rua Antonio Deodato Durce',
        number: 1374,
        district: 'Centro',
        complement: 'Prédio da Melissa',
      },
    }, 
    products: [
      {
        id: 2,
        name: 'Bombom',
        quantity: 5,
        type: 'Unity',
        description: 'Bombom decorado com fios de chocolate',
        tag: ['bombom'],
        code: '#PR345',
        option: {
          id: 1,
          optionName: 'Morango',
          price: 8,
          image: 'https://p7m4z9n9.stackpathcdn.com/wp-content/uploads/2020/04/receita_bombomdemorango.jpg'
        },
      },
      {
        id: 3,
        name: 'Bala Baiana',
        quantity: 15,
        type: 'Unity',
        description: 'Bala de coco coberta com açucar',
        tag: ['Bala'],
        code: '#PR345',
        option: {
          id: 1,
          optionName: 'Côco',
          price: 2.50,
          image: 'https://comidinhasdochef.com/wp-content/uploads/2018/05/Bala-Baiana-de-Coco.jpg'
        },
      },
    ],
  },
  {
    id: '#SK2548',
    createAt: '15/07/2021',
    note: 'Entregar para Isael Junior',
    payment: {
      method: 'Cartão',
      status: 'A Receber',
    },
    delivery: {
      date: '12/10/2021',
      time: '17:30',
      method: 'dispatch',
    },
    client: {
      name: 'Beatriz Dias',
      phone: 69981563833,
      address: {
        street: 'Avenida Porto Velho',
        number: 1765,
        district: 'Centro',
        complement: '',
      },
    }, 
    products: [
      {
        id: 3,
        name: 'Bala Baiana',
        quantity: 15,
        type: 'Unity',
        description: 'Bala de coco coberta com açucar',
        tag: ['Bala'],
        code: '#PR345',
        option: {
          id: 1,
          optionName: 'Côco',
          price: 2.50,
          image: 'https://comidinhasdochef.com/wp-content/uploads/2018/05/Bala-Baiana-de-Coco.jpg'
        },
      },
    ],
  },
]

export const mockProducts = [
  {
    id: 1,
    name: 'Torta',
    type: 'Wheight',
    description: 'Torta com massa crocante decorada de acordo com a opção de sabor.',
    tag: ['torta'],
    code: '#PR256',
    options: [
      {
        id: 2,
        optionName: 'Chocotorta Argentina',
        price: 60,
        image: 'https://www.comidaereceitas.com.br/wp-content/uploads/2017/01/chocotorta.jpg'
      },
      {
        id: 3,
        optionName: 'Morango',
        price: 80,
        image: 'https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/03/torta-morango-confeitaria2-scaled.jpg'
      },
    ],
  },
  {
    id: 4,
    name: 'Bolo',
    type: 'Wheight',
    description: 'Bolo redondo',
    tag: ['Bolo'],
    code: '#PR275',
    options: [
      {
        id: 5,
        optionName: 'Morango',
        price: 80,
        image: 'https://www.comidaereceitas.com.br/wp-content/uploads/2017/01/chocotorta.jpg'
      },
      {
        id: 6,
        optionName: 'Abacaxi',
        price: 60,
        image: 'https://www.receitasagora.com.br/wp-content/uploads/2020/08/receita-de-bolo-de-abacaxi-e1596638401347.jpg'
      },
    ],
  },
]

export const addOrder = order => {
  mockOrders.push(order)
}