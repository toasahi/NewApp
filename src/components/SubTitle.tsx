import React, { memo, VFC } from 'react';
import { Text } from 'react-native';

type Props = {
  children: React.ReactNode;
  numberOfLines: number;
  size: number;
};

export const SubTitle: VFC<Props> = memo((props) => {
  const { children, numberOfLines = 2, size = 15 } = props;
  return (
    <Text numberOfLines={numberOfLines} style={{ fontSize: size }}>
      {children}
    </Text>
  );
});
