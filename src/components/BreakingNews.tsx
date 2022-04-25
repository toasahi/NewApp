import React, { memo, VFC } from 'react';
import { HorizontalList } from './HorizontalList';

export const BreakingNews: VFC = memo(() => {
  return <HorizontalList title={'News'} />;
});
