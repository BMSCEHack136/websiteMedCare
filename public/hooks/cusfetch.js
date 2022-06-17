import { useState, useEffect, useCallback } from "react";
// import { callGet } from 'src/api/AxiosHelper';

const useFetch = (endpoint, params) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchs = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await callGet(endpoint, params);

      // if(!response.ok){
      //    throw new Error('Request failed !');
      // }

      // const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message || "Something went wrong !");
    }
    setLoading(false);
  }, [endpoint]);

  useEffect(() => {
    fetchs();
  }, [fetchs]);

  return { data, loading, error };
};
export default useFetch;
