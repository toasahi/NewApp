import React, { memo } from 'react';
import { Screen } from '../Screen';
import { Text, View } from 'react-native';

export const Weather = memo(() => {
  return (
    <Screen>
      <View>
        <Text>天気のページ</Text>
      </View>
    </Screen>
  );
});
