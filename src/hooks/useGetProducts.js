import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useGetProducts(API) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(API);
      setProducts(response.data);
    };
    fetchData();
  }, [API]);

  return products;
}
