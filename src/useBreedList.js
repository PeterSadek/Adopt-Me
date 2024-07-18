import { useQuery } from '@tanstack/react-query';
import fetchBreedList from './apis/fetchBreedList';

function useBreedList(animal) {
  const result = useQuery(['breeds', animal], fetchBreedList);
  const breedList = [result?.data?.breeds ?? []];

  return breedList;
}

export default useBreedList;
