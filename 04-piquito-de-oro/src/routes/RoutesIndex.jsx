import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Faq from '../pages/Faq'
import Product from '../pages/Product'
import NotFound from '../pages/NotFound'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
export default RoutesIndex
