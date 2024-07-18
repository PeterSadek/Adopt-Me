import Pet from './Pet';

const Results = ({ pets, isLoading }) => {
  return (
    <div className='search'>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : pets.length == 0 ? (
        <h2>Select a pet</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>

    // <div className='search'>
    //   {pets.map((pet) => (
    //     <Pet
    //       key={pet.id}
    //       name={pet.name}
    //       animal={pet.animal}
    //       breed={pet.breed}
    //       images={pet.images}
    //       location={`${pet.city}, ${pet.state}`}
    //       id={pet.id}
    //     />
    //   ))}
    // </div>
  );
};

export default Results;
