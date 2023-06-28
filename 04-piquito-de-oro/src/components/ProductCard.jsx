const ProductCard = ({ id, title, description, url, price, quantity }) => {
  const grayscale = quantity === 0 ? { filter: 'grayscale(100%) brightness(60%)' } : {}

  return (
    <div className='col-md-3 my-3 d-flex align-items-stretch'>
      <div className='card'>
        <a href={`/product/${id}`}>
          <div className='image-container'>
            <img className='product-image' src={`/assets/img/${url}`} alt={title} style={grayscale} />
          </div>
        </a>
        <div className='card-body d-flex flex-column justify-content-between'>
          <div>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
          </div>

          <div className='mx-auto mt-3'>
            <p className='card-price'>${price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductCard
