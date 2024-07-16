import React from 'react';
import ReactDOM from 'react-dom/client';
// import Pet from './Pet.jsx';
import Search from './Search.jsx';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Search />
    </div>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
