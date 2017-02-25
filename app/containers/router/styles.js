// @flow

import { StyleSheet } from 'react-native';

export const cooknColor = '#835EDD';

export const headerStyles = {
  container: {
    backgroundColor: cooknColor,
  },
  text: {
    color: 'white',
  },
};

export const cardStyles = {
  padding: 10,
  paddingBottom: 0,
};

export const tabStyles = {
  label: {
    fontSize: 14,
  },
};

export default StyleSheet.create({
  tabContainerOuter: {
    flex: 1,
  },
  text: {
    padding: 20,
    textAlign: 'center',
  },
});
