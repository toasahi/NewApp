import React, { memo, useEffect, VFC } from 'react';
import { FlatList } from 'react-native';
import { Title } from './Title';
import { SmallCard } from './SmallCard';
import { useGetNews } from '../hooks/useGetNews';
import { Dummy } from '../types/News';

type Props = {
  title: string;
  data: Dummy[];
};

export const HorizontalList: VFC<Props> = memo((props) => {
  const { title, data } = props;
  const { getNews } = useGetNews();
  useEffect(() => {
    getNews();
  }, [getNews]);
  return (
    <>
      <Title size={20} numberOfLines={2}>
        {title}
      </Title>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <SmallCard {...item} />}
      />
    </>
  );
});
