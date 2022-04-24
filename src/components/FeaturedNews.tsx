import React, { memo, useEffect, VFC } from 'react';
import { BlockCard } from './BlockCard';
import { data } from '../dummy/data';
import { useGetNews } from '../hooks/useGetNews';

export const FeaturedNews: VFC = memo(() => {
  const { getSuggestNews, suggestNews } = useGetNews();
  useEffect(() => {
    getSuggestNews();
  }, [getSuggestNews]);
  return <BlockCard data={suggestNews === undefined ? data[0] : suggestNews} style={{ marginVertical: 15 }} />;
});
