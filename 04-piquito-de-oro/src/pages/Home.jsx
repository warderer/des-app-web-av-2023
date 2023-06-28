import { useState, useEffect } from 'react'

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
    <div>
      Home
      {
        data.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))
      }
    </div>
  )
}
export default Home
