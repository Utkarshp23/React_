import React, { useState } from 'react';
import pic from './layout/logo192.png';
const DispImg = () => {
  const [visible, setVisible] = useState('block');

  return (
    <div>
      <img src={pic} style={{ display: visible }} />
      <input
        type='checkbox'
        name=''
        id=''
        onChange={(e) => {
          setVisible(e.target.checked == true ? 'none' : 'block');
        }}
      />
    </div>
  );
};

export default DispImg;
