import React, { useState } from 'react';

const ANIMALS = ['Dog', 'Cat', 'Bird', 'Reptile', 'Rabbit'];

const Search = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const breeds = [];

  return (
    <div className='search-params'>
      <form>
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
    </div>
  );
};

export default Search;
