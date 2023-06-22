import { useState } from 'react'

const ToDoList = () => {
  // Los estados de React sirven para guardar infomración que se va a utilizar en el componente. Esta información tiene la particularidad de que se actualiza la vista autómaticamente cuando cambia el valor.
  // El primer elemento del arreglo e sel valor del estado y el segundo elemento es una función que permite modificar el valor del estado.

  const [inputValue, setInputValue] = useState('')

  const handleAdd = () => {
    console.log('Agregue', inputValue)
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {/* Una forma común de trabajar con un input en React, es usar el evento onChange para guardar la información en el estado apenas sea tecleado. La información del input la tendra event.target.value */}

      <input
        type='text'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      <button onClick={handleAdd}>Agregar</button>

      <ul>
        <li>Item 1 <button>Eliminar</button></li>
        <li>Item 2 <button>Eliminar</button></li>
        <li>Item 3 <button>Eliminar</button></li>
      </ul>
    </div>
  )
}
export default ToDoList
