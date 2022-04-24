import React, { memo, useEffect, VFC } from 'react';
import { FlatList } from 'react-native';
import { Title } from './Title';
import { SmallCard } from './SmallCard';
import { useGetNews } from '../hooks/useGetNews';

type Props = {
  title: string;
};

export const HorizontalList: VFC<Props> = memo((props) => {
  const { title } = props;
  const { getNews, news } = useGetNews();
  useEffect(() => {
    getNews();
  }, [getNews]);
  console.log(news?.articles[0].content);
  return (
    <>
      <Title size={20} numberOfLines={2}>
        {title}
      </Title>
      {/*<FlatList*/}
      {/*  data={data}*/}
      {/*  keyExtractor={(item) => item.id}*/}
      {/*  horizontal*/}
      {/*  showsHorizontalScrollIndicator={false}*/}
      {/*  renderItem={({ item }) => <SmallCard {...item} />}*/}
      {/*/>*/}
      <FlatList
        data={news?.articles}
        keyExtractor={(item) => item.url}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <SmallCard {...item} />}
      />
    </>
  );
});
