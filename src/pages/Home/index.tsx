import { Header } from '../../components/Header'

import coffeImg from '../../assets/Imagem.svg'
import { HomeContainer, HomeContent, ItemsContainerGrid } from './styles'
import { Items } from './components/Items'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeList } from './components/CoffeeList'
import { useCart } from '../../hooks/useCart'

export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <div>
          <section>
            <h2>Encontre o café perfeito para qualquer hora do dia</h2>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <ItemsContainerGrid>
              <Items
                bgColor={'yellow_dark'}
                icon={ShoppingCart}
                title="Compra simples e segura"
              />
              <Items
                bgColor={'gray'}
                icon={Package}
                title="Embalagem mantém o café intacto"
              />
              <Items
                bgColor={'yellow_light'}
                icon={Timer}
                title="Entrega rápida e rastreada"
              />
              <Items
                bgColor={'purple_light'}
                icon={Coffee}
                title="O café chega fresquinho até você"
              />
            </ItemsContainerGrid>
          </section>

          <img src={coffeImg} alt="" />
        </div>
      </HomeContent>
      <CoffeeList />
    </HomeContainer>
  )
}
