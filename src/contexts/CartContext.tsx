import { createContext, ReactNode, useEffect, useState } from 'react'
import { Coffee } from '../components/Card'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  cartItemsTotal: number
  addCoffeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  RemoveCoffe: (cartItemId: number) => void
  cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const STORAGE_KEY = 'coffeDelivery:cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storageCartItems = localStorage.getItem(STORAGE_KEY)

    if (storageCartItems) {
      return JSON.parse(storageCartItems)
    }

    return []
  })

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addCoffeToCart(coffee: CartItem) {
    const coffeeAlreadyExist = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExist < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExist].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeAlreadyExist = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeAlreadyExist >= 0) {
        const item = draft[coffeeAlreadyExist]
        draft[coffeeAlreadyExist].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function RemoveCoffe(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeAlreadyExist = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeAlreadyExist >= 0) {
        draft.splice(coffeeAlreadyExist, 1)
      }
    })

    setCartItems(newCart)
  }

  function cleanCart() {
    setCartItems([])
  }

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeToCart,
        changeCartItemQuantity,
        RemoveCoffe,
        cartItemsTotal,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
