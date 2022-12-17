import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>Counter:{count}</h4>
      <button onClick={() => { setCount(count + 1) }}>inc</button>
      <button onClick={() => { setCount(count - 1) }}>dec</button>
    </div>
  )
}

export default Counter