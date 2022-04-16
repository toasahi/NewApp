import React, { memo, VFC } from 'react';
import { StyleSheet, View } from 'react-native';

export const Screen: VFC = memo(() => {
  return <View style={styles.container}></View>;
});

const styles = StyleSheet.create({
  container: {},
});
