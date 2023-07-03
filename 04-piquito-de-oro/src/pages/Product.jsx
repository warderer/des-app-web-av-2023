import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const myRequest = new Request('../assets/lentes.json')
  const [product, setProduct] = useState({})
  const productId = useParams().id

  useEffect(() => {
    fetch(myRequest)
      .then((response) => {
        return response.json()
      }).then((glasses) => {
        const oneProduct = glasses.find((item) => item.id === productId)
        setProduct(oneProduct)
      }).catch((error) => {
        console.error(error)
      })
  }, [productId])

  if (!product) {
    return <div>Error: Producto no encontrado</div>
  }

  return (
    <div>
      <p>El ID del Producto es {productId}</p>
      <h2>Producto: {product.title}</h2>
      <p>Descripcion: {product.description}</p>
      <p>Precio: {product.price}</p>
    </div>
  )
}
export default Product
