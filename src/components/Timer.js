import React from 'react'
import './layout/header.css'
// import '../../'

const Timer = () => {
  var date = new Date();
  return (
    <div className='timer'>
      <p>{date.toDateString()}</p>
    </div>
  )
}

export default Timer