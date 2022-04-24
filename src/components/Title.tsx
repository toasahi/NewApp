import React, { memo, VFC } from 'react';
import { Text } from 'react-native';

type Props = {
  children: React.ReactNode;
  numberOfLines: number;
  size: number;
};

export const Title: VFC<Props> = memo((props) => {
  const { children, numberOfLines, size } = props;
  return (
    <Text numberOfLines={numberOfLines} style={{ fontWeight: 'bold', fontSize: size, opacity: 0.8 }}>
      {children}
    </Text>
  );
});
