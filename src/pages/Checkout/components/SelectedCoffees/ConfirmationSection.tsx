import { Button } from '../../../../components/Button'
import { useCart } from '../../../../hooks/useCart'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { ConfirmationSectionContainer, Total } from './styles'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()

  const cartTotalPrice = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsPrice = formatCurrency(cartItemsTotal)
  const formattedCartTotalPrice = formatCurrency(cartTotalPrice)
  const formattedDeliveryPrice = formatCurrency(DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      <div>
        <span>Total de itens</span>
        <p>R$ {formattedItemsPrice}</p>
      </div>
      <div>
        <span>Entrega</span>
        <p>R$ {formattedDeliveryPrice}</p>
      </div>
      <Total>
        <p>Total</p>
        <p>R$ {formattedCartTotalPrice}</p>
      </Total>
      <Button
        text="Confirmar pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  )
}
