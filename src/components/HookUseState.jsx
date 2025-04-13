import { useState } from 'react'

const HookUseState = () => {
  //1 - useState
  let userName = 'João'
  const [name, setName] = useState('Ronnie')

  const changeName = () => {
    userName = 'João Souza'
    setName('Ronnie Mikihiro')
  }

  //2 - useState and input
  const [age, setAge] = useState(18)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(age)
  }

  return (
    <div>
      {/* useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeName}>Change Name</button>

      <hr />

      {/* useState and input */}
      <h2>useState and input</h2>
      <p>Digite a sua idade: </p>
      <form onSubmit={handleSubmit}>
        <input type='text' value={age} onChange={(e) => setAge(e.target.value)} />
        <input type='submit' value='Send' />
      </form>
      <p>Você tem {age} anos!</p>
      <hr />

    </div>
  )
}

export default HookUseState