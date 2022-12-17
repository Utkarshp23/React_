import React from 'react'
// import PropTypes from 'prop-types'

const Fact = props => {
  var calcFact = (num) => {
    var fact = 1;
    while (num > 0) {
      fact *= num;
      num--;
    }
    return fact;
    // console.log(fact)
  }
  return (
    <div >{calcFact(props.num)}</div>
  )
}

Fact.defaultProps = {
  num: 0
}

export default Fact