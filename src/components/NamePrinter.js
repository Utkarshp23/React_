import React from 'react'
// import PropTypes from 'prop-types'

const NamePrinter = props => {
  // var namearr = props.namearr;
  var emp = props.emp;
  return (
    <div>
      {/* <ul>
        {namearr.map((nm) => {
          return <li key={nm}>{nm}</li>
        })}
      </ul> */}

      <table border={1}>
        <thead>

        </thead>
        <tbody>
          {
            emp.map((obj) => {
              return (
                <tr>
                  <td>{obj.empid}</td>
                  <td>{obj.name}</td>
                  <td>{obj.salary}</td>
                </tr>
              )
            })
          }

        </tbody>

      </table>

    </div>
  )
}

NamePrinter.defaultProps = {
  emp: {}
}

export default NamePrinter