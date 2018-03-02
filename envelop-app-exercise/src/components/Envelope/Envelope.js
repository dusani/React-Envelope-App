import React from 'react';
import AddressLabel from '../AddressLabel/AddressLabel'

let fromPerson = {
  name: 'Mario Blink',
  address1: '1023 Central Avenue',
  address2: 'Jersey City, NJ 07304'
}

let toPerson = {
  name: 'Luigi Brown',
  address1: '3094 Riverwood Drive',
  address2: 'Chico, CA 95928'
}

const Envelope = (props) => {
  return (
    <div className="label">
      
      <div className="sender">
        <AddressLabel person = {fromPerson}/>
      </div>

      <div className="recipient">
        <AddressLabel person = {toPerson}/>
      </div>
    </div>
  );
}

export default Envelope;
