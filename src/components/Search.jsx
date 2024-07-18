import React, { useState } from 'react';
import useBreedList from '../useBreedList';
import Results from './Results';
import { useQuery } from '@tanstack/react-query';
import fetchSearchData from '../apis/fetchSearchData';

const ANIMALS = ['Dog', 'Cat', 'Bird', 'Reptile', 'Rabbit'];

const Search = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [breeds] = useBreedList(animal);

  const result = useQuery(
    ['data', { animal, location, breed }],
    fetchSearchData
  );

  const pets = result?.data?.pets ?? [];

  return (
    <div className='search-params'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor='location'>
          Location
          <input
            type='text'
            id='location'
            placeholder='Location'
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label htmlFor='animal'>
          Animal
          <select
            name='animal'
            id='animal'
            onChange={(e) => setAnimal(e.target.value.toLowerCase())}
          >
            <option></option>
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor='breed'>
          Breed
          <select
            name='breed'
            id='breed'
            onChange={(e) => setBreed(e.target.value)}
          >
            <option></option>
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default Search;
