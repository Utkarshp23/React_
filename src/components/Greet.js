import React, { useState } from 'react'

const Greet = () => {
  const [clr, setColor] = useState('white')
  return (
    <div>
      <p style={{ color: clr }} onClick={() => { setColor('orange') }}>Hello</p>
    </div>
  )
}

export default Greet