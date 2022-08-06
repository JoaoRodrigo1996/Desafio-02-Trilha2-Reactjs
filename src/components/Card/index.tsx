import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

import coffeeImg from '../../assets/expresso.svg'
import { useCart } from '../../hooks/useCart'
import { formatCurrency } from '../../utils/formatCurrency'
import { QuantityInput } from '../QuantityInput'

import {
  CardContainer,
  CardFooter,
  Description,
  Tags,
  Title,
  AddCartWrapper,
} from './styles'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function Card({ coffee }: CoffeeProps) {
  const { addCoffeToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const formattedPrice = formatCurrency(coffee.price)

  function handleAddToCard() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeToCart(coffeeToAdd)
  }

  function handleIncreaseQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecreaseQuantity() {
    setQuantity((state) => state - 1)
  }

  return (
    <CardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Title>{coffee.name}</Title>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <p>R$</p>
          <strong>{formattedPrice}</strong>
        </div>

        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
            quantity={quantity}
          />
          <button onClick={handleAddToCard}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CardContainer>
  )
}
