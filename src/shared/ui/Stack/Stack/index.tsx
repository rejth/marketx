import React from 'react';
import { Flex, FlexProps } from '../Flex';

type StackProps = Omit<FlexProps, 'direction'>;

export function Stack(props: StackProps) {
  return <Flex direction="row" {...props} />;
}
