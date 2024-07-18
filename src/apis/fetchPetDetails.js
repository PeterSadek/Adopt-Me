async function fetchPetDetails({ queryKey }) {
  const id = queryKey[1];
  const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!res.ok)
    throw new Error(`problem with fetching your data from details/${id}`);

  return res.json();
}
export default fetchPetDetails;
