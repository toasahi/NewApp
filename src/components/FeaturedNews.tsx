import React, { memo, VFC } from 'react';
import { BlockCard } from './BlockCard';
import { data } from '../dummy/data';

export const FeaturedNews: VFC = memo(() => {
  return <BlockCard data={data[0]} style={{ marginVertical: 15 }} />;
});
