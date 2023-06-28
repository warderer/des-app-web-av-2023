import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const myRequest = new Request('../assets/lentes.json')
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(myRequest)
      .then((response) => {
        return response.json()
      }).then((glasses) => {
        console.log(glasses)
        setData(glasses)
      }).catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        {
            data.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))
        }
      </div>
    </div>
  )
}
export default Home
