import { useEffect, useState } from 'react'

const HookUseEffect = () => {
  //1 - useEffect, without dependencies
  useEffect(() => {
    console.log('In execution!')
  })
  
  const [number, setNumber] = useState(1)

  const changeSomething = () => {
    setNumber(number + 1)
  }

  //2 - empty dependency array
  useEffect(() => {
    console.log('I will be executed only once')
  }, [])

  //3 - item in dependency array
  const [anotherNumber, setAnotherNumber] = useState(0)

  useEffect(() => {
    if (anotherNumber > 0)
        console.log('I will be executed only when just anotherNumber')
  }, [anotherNumber])

  //4 - cleanup useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
        console.log('Hello World')
    }, 2000)

    return () => clearTimeout(timer)
    
  }, [anotherNumber])

  return (
    <div>
        <h2>useEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Execute</button>
        <p> Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Change AnotherNumber</button>
        <hr />
    </div>
  )
}

export default HookUseEffect