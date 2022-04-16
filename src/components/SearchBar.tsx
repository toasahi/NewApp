import React, { memo, VFC } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export const SearchBar: VFC = memo(() => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Search here.." />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 45,
  },

  searchInput: {
    width: '100%',
    height: '100%',
    paddingLeft: 8,
    fontSize: 16,
  },
});
