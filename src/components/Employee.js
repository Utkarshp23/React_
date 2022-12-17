import React from 'react';
import emps from './Emps';

const Employee = () => {
  return (
    <table className='table table-dark table-striped'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>EmpId</th>
          <th scope='col'>Ename</th>
          <th scope='col'>Salary</th>
          <th scope='col'>DeptId</th>
        </tr>
      </thead>
      <tbody>
        {emps.map((emp, i) => {
          return (
            <tr>
              <th scope='row'>{i + 1}</th>
              <td>{emp.eid}</td>
              <td>{emp.ename}</td>
              <td>{emp.salary}</td>
              <td>{emp.dept.did}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Employee;
