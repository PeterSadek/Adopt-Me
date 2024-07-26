import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Search from './components/Search';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Details from './components/Details';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AdoptedPetContext from './AdoptedPetContext';

const queryClient = new QueryClient({
  queries: {
    staleTime: Infinity,
    cacheTime: Infinity
  }
});

const App = () => {
  const adoptedPet = useState(null);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to='/'>Adopt Me!</Link>
        </header>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <Routes>
            <Route path='/' element={<Search />} />
            <Route path='/details/:id' element={<Details />} />
          </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
