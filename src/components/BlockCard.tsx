import React, { memo, VFC } from 'react';
import { Image, ImageStyle, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Title } from './Title';
import { SubTitle } from './SubTitle';
import { Dummy } from '../types/News';

type Props = {
  style: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  data: Dummy;
};

export const BlockCard: VFC<Props> = memo((props) => {
  const { style, imageStyle, data } = props;
  return (
    <View style={[styles.container, style]}>
      <Image source={{ uri: data.thumbnail }} style={[styles.image, imageStyle]} />
      <View style={styles.contentContainer}>
        <Title numberOfLines={3} size={25}>
          {data.title}
        </Title>
        <SubTitle numberOfLines={2} size={15}>
          {data.desc}
        </SubTitle>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 5,
  },
});
