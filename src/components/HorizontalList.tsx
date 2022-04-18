import React, { memo, useEffect, VFC } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Title } from './Title';
import { SmallCard } from './SmallCard';
import { useGetNews } from '../hooks/useGetNews';

type Props = {
  title: string;
};

export const HorizontalList: VFC<Props> = memo((props) => {
  const { title } = props;
  const { getNews } = useGetNews();
  useEffect(() => {
    getNews();
  }, [getNews]);
  return (
    <>
      <Title size={20} numberOfLines={2}>
        {title}
      </Title>
      {/*<FlatList*/}
      {/*  data={news}*/}
      {/*  keyExtractor={(item) => item.articles[0].source.name}*/}
      {/*  horizontal*/}
      {/*  showsHorizontalScrollIndicator={false}*/}
      {/*  renderItem={({ item }) => <SmallCard item={item.articles[0]} />}*/}
      {/*/>*/}
    </>
  );
});

const styles = StyleSheet.create({
  container: {},
});
