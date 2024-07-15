// import React from 'react';

const Animal = (props) => {
  //   return React.createElement(
  //     'div',
  //     {},
  //     React.createElement('h2', {}, props.name),
  //     React.createElement('h3', {}, props.species),
  //     React.createElement('h3', {}, props.color),
  //   );

  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.species}</h3>
      <h3>{props.color}</h3>
    </div>
  );
};

export default Animal;
