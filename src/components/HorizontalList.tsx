import React, { memo, VFC } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Title } from './Title';
import { SmallCard } from './SmallCard';

type Props = {
  title: string;
};

export const HorizontalList: VFC<Props> = memo((props) => {
  const { title } = props;
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
      {/*  renderItem={({ item }) => <SmallCard item={item} />}*/}
      {/*/>*/}
    </>
  );
});

const styles = StyleSheet.create({
  container: {},
});
