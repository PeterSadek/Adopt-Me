import React from 'react';

const Pet = ({ name, animal, breed, images, location, id }) => {
  let animalImage = 'http://pets-images.dev-apis.com/pets/none.jpg';
  if (images.length) {
    animalImage = images[0];
  }
  return (
    <a href={`/details/${id}`} className='pet'>
      <div className='image-container'>
        <img src={animalImage} alt={name} />
      </div>
      <div className='info'>
        <h1>{name}</h1>
        <h2>
          <span className='capitalize'>{animal}</span> - {breed} - {location}
        </h2>
      </div>
    </a>
  );
};

export default Pet;
