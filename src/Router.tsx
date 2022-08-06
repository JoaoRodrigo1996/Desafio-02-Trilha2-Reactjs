import { Routes, Route } from 'react-router-dom'
import { Defaultlayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { OrderConfirmed } from './pages/OrderConfirmed'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Defaultlayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  )
}
