import {useState, useEffect} from 'react';

export default function useJsonFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setError(response.statusText);
          throw new Error(response.statusText);
        }
        const respData = await response.json();
        setData(respData.status);
      } catch (e) {
        
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  },[]);

  return [data, loading, error];
}
