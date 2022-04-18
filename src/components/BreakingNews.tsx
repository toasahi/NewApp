import React, { memo, VFC } from 'react';
import { HorizontalList } from './HorizontalList';
import { data } from '../dummy/data';

export const BreakingNews: VFC = memo(() => {
  return <HorizontalList title={'Breaking'} data={data} />;
});
