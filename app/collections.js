import React from 'react';
import fetchWithAuth from '../storefront';

function Collections() {
  const [collections, setCollections] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchWithAuth(
          process.env.perfect-interior-design.myshopify.com + '/collections.json',
          process.env.f825539bdca754484bf6206760f0bd06
        );
        setCollections(response.collections);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {collections.map((collection) => (
        <li key={collection.id}>
          <h2>{collection.title}</h2>
        </li>
      ))}
    </ul>
  );
}

export default Collections;