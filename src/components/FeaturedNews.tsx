import React, { memo, VFC } from 'react';
import { BlockCard } from './BlockCard';

export const FeaturedNews: VFC = memo(() => {
  return <BlockCard style={{ marginVertical: 15 }} />;
});
