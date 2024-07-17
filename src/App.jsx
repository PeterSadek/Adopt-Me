import React from 'react';
import ReactDOM from 'react-dom/client';
import Search from './components/Search';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Details from './components/Details';

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to='/'>Adopt Me!</Link>
      </header>

      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
