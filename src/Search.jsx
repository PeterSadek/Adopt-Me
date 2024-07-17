import React, { useEffect, useState } from 'react';
import useBreedList from './useBreedList.js';
import Results from './Results.jsx';

const ANIMALS = ['Dog', 'Cat', 'Bird', 'Reptile', 'Rabbit'];

const Search = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([]);
  const [breeds, isLoading, error] = useBreedList(animal);

  useEffect(() => {
    // requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div className='search-params'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
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

      <Results pets={pets} isLoading={isLoading} error={error} />
    </div>
  );
};

export default Search;
