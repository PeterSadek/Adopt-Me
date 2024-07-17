import { useEffect, useState } from 'react';

const localCache = {};

function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    // if (animal) {
    //   requestBreedList();
    // } else {
    //   setBreedList([]);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animal]);

  async function requestBreedList() {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);

      // setBreedList(json.breeds || []);
    } catch {
      (err) => setError(err);
    } finally {
      setLoading(false);
    }
  }

  return [breedList, isLoading, error];
}

export default useBreedList;
