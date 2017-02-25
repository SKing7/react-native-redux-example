// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Router from './containers/router/router';

const app = () => (
  <View style={styles.container}>
    <Router />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default app;
