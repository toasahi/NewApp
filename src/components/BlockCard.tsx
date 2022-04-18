import React, { memo, VFC } from 'react';
import { Image, ImageStyle, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Title } from './Title';
import { SubTitle } from './SubTitle';

type Props = {
  style: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
};

export const BlockCard: VFC<Props> = memo((props) => {
  const { style, imageStyle } = props;
  return (
    <View style={[styles.container, style]}>
      <Image source={require('../../assets/defaultImage.jpeg')} style={[styles.image, imageStyle]} />
      <View style={styles.contentContainer}>
        <Title numberOfLines={3} size={25}>
          Some Title
        </Title>
        <SubTitle numberOfLines={2} size={15}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum delectus ab dolorum odio nulla corporis
          eligendi totam vitae modi adipisci aspernatur corrupti doloremque deleniti, fugit tempore ex exercitationem
          quidem.
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
