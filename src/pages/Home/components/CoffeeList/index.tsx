import { Card } from '../../../../components/Card'
import { Navigation } from '../../../../components/Navigation'
import { coffees } from '../../../../data/coffees'
import { CoffeListContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeListContainer>
      <header>
        <h2>Novos cafés</h2>
      </header>

      <div>
        {coffees.map((coffee) => {
          return <Card key={coffee.id} coffee={coffee} />
        })}
      </div>
    </CoffeListContainer>
  )
}
