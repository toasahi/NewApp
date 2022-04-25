import { useCallback, useState } from 'react';
import { axios } from '../api/BaseAxois';

export const useGetWeather = () => {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(false);
  const getWeather = useCallback(() => {
    setLoading(true);
    axios
      .get('')
      .then((result) => setWeather(result.data))
      .catch(() => console.log('error'))
      .finally(() => setLoading(false));
  }, []);

  return { getWeather, weather, loading };
};
