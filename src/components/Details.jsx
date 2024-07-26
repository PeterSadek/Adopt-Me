import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchPetDetails from '../apis/fetchPetDetails';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import { useContext } from 'react';
import AdoptedPetContext from '../AdoptedPetContext';

const Details = () => {
  const { id } = useParams();
  const result = useQuery(['details', id], fetchPetDetails);
  const [, setAdoptedPet] = useContext(AdoptedPetContext);

  const navigate = useNavigate();

  if (result.isLoading)
    return (
      <span className='loading-pane'>
        <h2 className='loader'>⚙</h2>
      </span>
    );

  const pet = result.data.pets[0];

  // throw new Error('erorr has occured');
  return (
    <div className='details'>
      <Carousel images={pet.images} id={pet.id} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          <span className='capitalize'>{pet.animal} </span>- {pet.breed} -{' '}
          {pet.city}, {pet.state}
        </h2>
        <button
          onClick={() => {
            navigate('/');
            setAdoptedPet(pet);
          }}
        >
          Adopt {pet.name}
        </button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

const DetailsErrorBoundary = () => (
  <ErrorBoundary>
    <Details />
  </ErrorBoundary>
);

export default DetailsErrorBoundary;
