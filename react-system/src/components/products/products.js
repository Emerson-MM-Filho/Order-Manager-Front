import './products.css'

import ContentContainer from "../ui/contentContainer";
import MainButton from "../ui/mainButton";
import ProductCard from "./productCard";
import {RiPrinterFill} from "react-icons/ri";

const Products = () => {
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
  return (
    <div>
      <ContentContainer sectionTitle="Produtos" contentTitle="Todos os Produtos">
        {<MainButton buttonName='Salvar'/>}
        {<MainButton buttonName={<RiPrinterFill className="newOrderButtonIcon"/>}/>}
      </ContentContainer>
      <div className='cardsContainer'>
        {products.map((current) => {
          return (
            <ProductCard
              name={current.name}
              description={current.description}
              price={current.price}
              type={(current.type === 'unity') ? 'Uni.' : 'Kg'}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Products