import { useState, useEffect } from 'react';
import axios from 'axios';


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
        'X-RapidAPI-Key': '00a722ef00mshf2b27c800ff1cfap1c4cd6jsn4aab2c0fbf2e',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
        const response = await axios.request(options);

        setData(response.data.data);
        setIsLoading(false);
    }   catch (error) {
        setError(error);
        alert('There is an error')
    }   finally {
        setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return { data, isLoading, error, refetch };
}

export default useFetch;

