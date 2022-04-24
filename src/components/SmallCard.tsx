import React, { memo, VFC } from 'react';
import { BlockCard } from './BlockCard';
import { StyleSheet, Dimensions } from 'react-native';
import { News } from '../types/News';

const { width } = Dimensions.get('window');

export const SmallCard: VFC<News> = memo((props) => {
  const { ...item } = props;
  return <BlockCard style={styles.container} imageStyle={styles.image} data={item} />;
});

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    marginRight: 15,
    height: 200,
  },
  image: {
    height: 100,
  },
});
