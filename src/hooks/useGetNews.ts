import { useCallback, useState } from 'react';
import { ArticleResponse, News } from '../types/News';
import { axios } from '../api/BaseAxois';

export const useGetNews = () => {
  const [news, setNews] = useState<ArticleResponse>();
  const getNews = useCallback(() => {
    axios
      .get<ArticleResponse>('')
      .then((result) => setNews(result.data))
      .catch(() => console.log('error'));
  }, []);

  return { getNews, news };
};
