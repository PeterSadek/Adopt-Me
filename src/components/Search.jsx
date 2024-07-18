import React, { useState } from 'react';
import useBreedList from '../useBreedList';
import Results from './Results';
import { useQuery } from '@tanstack/react-query';
import fetchSearchData from '../apis/fetchSearchData';

const ANIMALS = ['dog', 'cat', 'bird', 'reptile', 'rabbit'];

const Search = () => {
  const [animal, setAnimal] = useState('');
  const [breeds] = useBreedList(animal);
  const [formState, setFormState] = useState({
    location: '',
    animal: '',
    breed: ''
  });

  const result = useQuery(['data', formState], fetchSearchData);

  const pets = result?.data?.pets ?? [];

  return (
    <div className='search-params'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          setFormState({
            location: formData.get('location'),
            breed: formData.get('breed'),
            animal: formData.get('animal')
          });
        }}
      >
        <label htmlFor='location'>
          Location
          <input
            type='text'
            name='location'
            id='location'
            placeholder='Location'
          />
        </label>

        <label htmlFor='animal'>
          Animal
          <select
            className='capitalize'
            name='animal'
            id='animal'
            onChange={(e) => setAnimal(e.target.value)}
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
          <select name='breed' id='breed'>
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
