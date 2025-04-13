import { useState, useEffect, useMemo } from 'react'

const HookUseMemo = () => {
  const [number, setNumber] = useState(0)

  //const premiumNumbers = ['0', '100', '200']
  const premiumNumbers = useMemo(() => {
    return ['0', '100', '200']
  }, [])

  useEffect(() => {
    console.log('Changed premium numbers')
  }, [premiumNumbers])

  return (
    <div>
        <h2>useMemo</h2>
        <input type="text" onChange={(e) => setNumber(e.target.value)} />
        {premiumNumbers.includes(number) ? <p>Correct Number</p> : <p>Wrong Number</p>}
    </div>
  )
}

export default HookUseMemo