import React, { memo, VFC } from 'react';
import { BlockCard } from './BlockCard';
import { StyleSheet, Dimensions } from 'react-native';
import { Dummy } from '../types/News';

const { width } = Dimensions.get('window');

export const SmallCard: VFC<Dummy> = memo((props) => {
  const { ...item } = props;
  console.log(item);
  return <BlockCard style={styles.container} imageStyle={styles.image} />;
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
