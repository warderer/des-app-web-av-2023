import { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import './App.css'

function App () {
  const [gifs, setGifs] = useState([]) // Aqui guardo la lista de gifs
  const API_KEY = import.meta.env.VITE_GIPHY_API_KEY

  // Las llamadas a la API se hacen en useEffect
  // UseEffect usa un arreglo de dependencias vacio para que solo se ejecute una vez cuando carguen mis componentes
  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=30&offset=0&rating=g&bundle=messaging_non_clips`)
      .then((response) => {
        return response.json()
      }).then((results) => {
        console.log(results.data)
        setGifs(results.data)
      }).catch((error) => {
        console.error(error)
      })
  }, [])

  return (

    <div className='App'>
      <div className='grid-cards'>
        {
          gifs.map((gif) => (
            <ImageCard
              key={gif.id}
              title={gif.title}
              url={gif.images.fixed_height.url}
            />
          ))
        }
      </div>
    </div>

  )
}

export default App
