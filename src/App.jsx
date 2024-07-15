import React from 'react';
import ReactDOM from 'react-dom';
import Animal from './Animal.jsx';

const App = () => {
  //   return React.createElement(
  //     'div',
  //     {},
  //     React.createElement('h1', {}, 'Adopt Me!'),
  //     React.createElement(Animal, {
  //       name: 'Scar',
  //       species: 'Dog',
  //       color: 'Black',
  //     }),
  //     React.createElement(Animal, {
  //       name: 'Garfield',
  //       species: 'Cat',
  //       color: 'Orange',
  //     }),
  //   );

  return (
    <div>
      <h1>Adopt Me!</h1>
      <Animal name="Scar" species="Dog" color="Black" />
      <Animal name="Garfield" species="Cat" color="Orange" />
    </div>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
