// @flow

import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  text : string
}

const TestView = (props : Props) => (
  <View>
    <Text>{props.text}</Text>
  </View>
);

export default TestView;
