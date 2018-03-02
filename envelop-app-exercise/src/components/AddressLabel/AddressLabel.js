import React from 'react';

let person = {
  name: 'Kobe James',
  address1: '1234 SW 56TH Ave',
  address2: 'Miami, FL 33133'
}

const AddressLabel = (props) => {

  const {name, address1, address2} = props.person;

  return (
    <div className="addresslabel">
      <p>{name}</p>
      <p>{address1}</p>
      <p>{address2}</p>
    </div>
  );
}

export default AddressLabel;
