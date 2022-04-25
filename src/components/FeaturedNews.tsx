import React, { memo, useEffect, VFC } from 'react';
import { BlockCard } from './BlockCard';
import { data } from '../dummy/data';
import { useGetNews } from '../hooks/useGetNews';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const FeaturedNews: VFC = memo(() => {
  const { getSuggestNews, suggestNews } = useGetNews();
  useEffect(() => {
    getSuggestNews();
  }, [getSuggestNews]);
  return (
    <>
      {suggestNews === undefined ? (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <BlockCard data={suggestNews === undefined ? data[0] : suggestNews} style={{ marginVertical: 15 }} />
      )}
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
