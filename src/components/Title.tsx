import React, { memo, VFC } from 'react';
import { Text } from 'react-native';

type Props = {
  children: React.ReactNode;
  numberOfLines: number;
  size: number;
};

export const Title: VFC<Props> = memo((props) => {
  const { children, numberOfLines = 2, size = 18 } = props;
  return (
    <Text numberOfLines={numberOfLines} style={{ fontWeight: 'bold', fontSize: size }}>
      {children}
    </Text>
  );
});
