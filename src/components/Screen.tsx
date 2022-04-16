import React, { memo, VFC } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

type Props = {
  children: React.ReactNode;
};

export const Screen: VFC<Props> = memo((props) => {
  const { children } = props;
  return <View style={styles.container}>{children}</View>;
});

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
    backgroundColor: '#f7f3f3',
    flex: 1,
  },
});
