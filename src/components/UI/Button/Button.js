import React from 'react';

const button = (props) => {
  <button
  onClick={props.click}>
  {props.children}
  </button>
}

export default button;
