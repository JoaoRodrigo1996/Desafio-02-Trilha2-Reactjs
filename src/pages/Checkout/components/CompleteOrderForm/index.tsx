import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { SectionTitle } from '../SectionTitle'
import { AddressForm } from './AddressForm'
import { PaymentMethods } from './PaymentMethods'
import { CompleteOrderFormContainer, FormSectionContainer } from './styles'

export function CompleteOrderForm() {
  return (
    <CompleteOrderFormContainer>
      <h1>Complete seu pedido</h1>

      <FormSectionContainer>
        <SectionTitle
          icon={<MapPinLine size={22} color="#C47F17" />}
          title="Endereço de entrega"
          subTitle="Informe o endereço onde deseja receber seu pedido"
        />

        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          icon={<CurrencyDollar size={22} color="#8047F8" />}
          title="Pagamento"
          subTitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />

        <PaymentMethods />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
