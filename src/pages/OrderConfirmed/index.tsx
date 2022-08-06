import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'

import ilustrationImg from '../../assets/ilustration.svg'
import { Items } from '../Home/components/Items'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../Checkout'
import { paymentMethods } from '../Checkout/components/CompleteOrderForm/PaymentMethods'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function OrderConfirmed() {
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [state, navigate])

  if (!state) {
    return <></>
  }

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <section>
        <OrderDetailsContainer>
          <Items
            bgColor={'purple_light'}
            icon={MapPin}
            title={
              <>
                <span>Entrega em</span>
                <strong>
                  {' '}
                  {state.street}, {state.number}
                </strong>
                <br />
                <span>
                  {state.district} - {state.city}, {state.uf}
                </span>
              </>
            }
          />
          <Items
            bgColor={'yellow_light'}
            icon={Clock}
            title={
              <>
                <span>Previsão de entrega</span>
                <br />
                <strong>20 min - 30 min</strong>
              </>
            }
          />
          <Items
            bgColor={'yellow_dark'}
            icon={CurrencyDollar}
            title={
              <>
                <span>Pagamento na entrega</span>
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </>
            }
          />
        </OrderDetailsContainer>

        <img src={ilustrationImg} alt="" />
      </section>
    </OrderConfirmedContainer>
  )
}
