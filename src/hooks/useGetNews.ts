import { useCallback, useState } from 'react';
import { News } from '../types/News';
import { axios } from '../api/BaseAxois';
import { API_KEY } from '@env';

export const useGetNews = () => {
  const [news, setNews] = useState<Array<News>>([]);
  console.log(API_KEY);
  const getNews = useCallback(() => {
    axios
      .get<Array<News>>(API_KEY)
      .then((result) => setNews(result.data))
      .catch(() => console.log('error'));
  }, []);

  return { getNews, news };
};
