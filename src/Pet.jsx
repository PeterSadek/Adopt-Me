import React from 'react';

const Pet = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.species}</h3>
      <h3>{props.color}</h3>
    </div>
  );
};

export default Pet;
