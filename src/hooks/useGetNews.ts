import { useCallback, useState } from 'react';
import { ArticleResponse, News } from '../types/News';
import { axios } from '../api/BaseAxois';

export const useGetNews = () => {
  const [news, setNews] = useState<ArticleResponse>();
  const [suggestNews, setSuggestNews] = useState<News>();
  const getNews = useCallback(() => {
    axios
      .get<ArticleResponse>('')
      .then((result) => setNews(result.data))
      .catch(() => console.log('error'));
  }, []);

  const getSuggestNews = useCallback(() => {
    axios
      .get<ArticleResponse>('')
      .then((result) => setSuggestNews(result.data.articles[0]))
      .catch(() => console.log('error'));
  }, []);

  return { getNews, news, getSuggestNews, suggestNews };
};
