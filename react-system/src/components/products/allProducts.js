import './allProducts.css'

import ContentContainer from "../ui/contentContainer";
import MainButton from "../ui/mainButton";
import {RiPrinterFill} from "react-icons/ri";
import ProductCard from "./productCard";

const AllProducts = ({clicked}) => {
  const products = [
    {
      name: 'bombom',
      type: 'unity',
      description: 'Descrição do produto - Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sale: 'prompt-delivery',
      price: 8.00,
      flavors: ['morango', 'brigadeiro'],
      image: '../../images/logo.jpeg'
    },
    {
      name: 'torta',
      type: 'unity',
      description: 'Descrição do produto - Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sale: 'prompt-delivery',
      price: 12.00,
      flavors: ['morango', 'brigadeiro'],
      image: '../../images/logo.jpeg'
    },
    {
      name: 'bombom',
      type: 'unity',
      description: 'Descrição do produto - Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sale: 'prompt-delivery',
      price: 8.00,
      flavors: ['morango', 'brigadeiro'],
      image: '../../images/logo.jpeg'
    },
    {
      name: 'torta',
      type: 'unity',
      description: 'Descrição do produto - Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sale: 'prompt-delivery',
      price: 12.00,
      flavors: ['morango', 'brigadeiro'],
      image: '../../images/logo.jpeg'
    },
    {
      name: 'bombom',
      type: 'unity',
      description: 'Descrição do produto - Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sale: 'prompt-delivery',
      price: 8.00,
      flavors: ['morango', 'brigadeiro'],
      image: '../../images/logo.jpeg'
    },
    {
      name: 'torta',
      type: 'unity',
      description: 'Descrição do produto - Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sale: 'prompt-delivery',
      price: 12.00,
      flavors: ['morango', 'brigadeiro'],
      image: '../../images/logo.jpeg'
    },
    {
      name: 'bombom',
      type: 'unity',
      description: 'Descrição do produto - Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sale: 'prompt-delivery',
      price: 8.00,
      flavors: ['morango', 'brigadeiro'],
      image: '../../images/logo.jpeg'
    },
    {
      name: 'torta',
      type: 'unity',
      description: 'Descrição do produto - Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sale: 'prompt-delivery',
      price: 12.00,
      flavors: ['morango', 'brigadeiro'],
      image: '../../images/logo.jpeg'
    },
    {
      name: 'bombom',
      type: 'unity',
      description: 'Descrição do produto - Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sale: 'prompt-delivery',
      price: 8.00,
      flavors: ['morango', 'brigadeiro'],
      image: '../../images/logo.jpeg'
    },
    {
      name: 'torta',
      type: 'unity',
      description: 'Descrição do produto - Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sale: 'prompt-delivery',
      price: 12.00,
      flavors: ['morango', 'brigadeiro'],
      image: '../../images/logo.jpeg'
    },
    {
      name: 'bombom',
      type: 'unity',
      description: 'Descrição do produto - Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sale: 'prompt-delivery',
      price: 8.00,
      flavors: ['morango', 'brigadeiro'],
      image: '../../images/logo.jpeg'
    },
    {
      name: 'torta',
      type: 'unity',
      description: 'Descrição do produto - Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sale: 'prompt-delivery',
      price: 12.00,
      flavors: ['morango', 'brigadeiro'],
      image: '../../images/logo.jpeg'
    },
    {
      name: 'bombom',
      type: 'unity',
      description: 'Descrição do produto - Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sale: 'prompt-delivery',
      price: 8.00,
      flavors: ['morango', 'brigadeiro'],
      image: '../../images/logo.jpeg'
    },
    {
      name: 'torta',
      type: 'unity',
      description: 'Descrição do produto - Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sale: 'prompt-delivery',
      price: 12.00,
      flavors: ['morango', 'brigadeiro'],
      image: '../../images/logo.jpeg'
    },
    {
      name: 'bombom',
      type: 'unity',
      description: 'Descrição do produto - Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sale: 'prompt-delivery',
      price: 8.00,
      flavors: ['morango', 'brigadeiro'],
      image: '../../images/logo.jpeg'
    },
    {
      name: 'torta',
      type: 'unity',
      description: 'Descrição do produto - Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sale: 'prompt-delivery',
      price: 12.00,
      flavors: ['morango', 'brigadeiro'],
      image: '../../images/logo.jpeg'
    },
    {
      name: 'bombom',
      type: 'unity',
      description: 'Descrição do produto - Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sale: 'prompt-delivery',
      price: 8.00,
      flavors: ['morango', 'brigadeiro'],
      image: '../../images/logo.jpeg'
    },
    {
      name: 'torta',
      type: 'unity',
      description: 'Descrição do produto - Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sale: 'prompt-delivery',
      price: 12.00,
      flavors: ['morango', 'brigadeiro'],
      image: '../../images/logo.jpeg'
    },
    {
      name: 'bombom',
      type: 'unity',
      description: 'Descrição do produto - Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sale: 'prompt-delivery',
      price: 8.00,
      flavors: ['morango', 'brigadeiro'],
      image: '../../images/logo.jpeg'
    },
    {
      name: 'torta',
      type: 'unity',
      description: 'Descrição do produto - Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sale: 'prompt-delivery',
      price: 12.00,
      flavors: ['morango', 'brigadeiro'],
      image: '../../images/logo.jpeg'
    },
  ]

  const buttonClicked = element => clicked(element)

  return (
    <div>
      <ContentContainer sectionTitle="Produtos" contentTitle="Todos os Produtos">
        {<MainButton buttonName='Adicionar' buttonValue='addProduct' functionOnClick={buttonClicked}/>}
        {<MainButton buttonName={<RiPrinterFill className="newOrderButtonIcon"/>} buttonValue='printListProduct' functionOnClick={buttonClicked}/>}
      </ContentContainer>
      <div className='cardsContainer'>
        {products.map((current, index) => {
          return (
            <ProductCard
              name={current.name}
              description={current.description}
              price={current.price}
              type={(current.type === 'unity') ? 'Uni.' : 'Kg'}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default AllProducts