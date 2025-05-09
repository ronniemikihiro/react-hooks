import { useState, useEffect } from 'react'

const List = ({getItems}) => {
  const [myItems, setMyItems] = useState([])

  useEffect(() => {
    console.log('Fetching items from db...')
    setMyItems(getItems)
  }, [])

  return (
    <div>
        {myItems && myItems.map((item) => (
            <p key={item}>{item}</p>
        ))}
    </div>
  )
}

export default List