import { useLayoutEffect, useEffect, useState } from 'react'

const HookUseLayoutEffect = () => {
  const [name, setName] = useState('João')
  
  useEffect(() => {
    console.log('useEffect')
    setName('Pedro')
  }, [])

  useLayoutEffect(() => {
    console.log('useLayoutEffect')
    setName('Marcos')
  }, [])

  console.log(name)

  return (
    <div>
        <h2>useLayoutEffect</h2>
        <p>Name: {name}</p>
        <hr />
    </div>
  )
}

export default HookUseLayoutEffect