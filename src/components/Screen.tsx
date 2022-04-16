import React, { memo, VFC } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Platform, View } from 'react-native';

type Props = {
  children: React.ReactNode;
};

export const Screen: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      {Platform.OS === 'android' ? (
        <View style={styles.container}>{children}</View>
      ) : (
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>
      )}
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
    backgroundColor: '#f7f3f3',
    flex: 1,
  },
});
