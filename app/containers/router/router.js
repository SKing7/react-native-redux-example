// @flow

import React from 'react';
import { Text } from 'react-native';
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import styles, {
  cooknColor,
  headerStyles,
  tabStyles,
} from './styles';

const ViewOne = () => (
  <Text style={styles.text}>I am View One</Text>
);

const ViewTwo = () => (
  <Text style={styles.text}>I am View Two</Text>
);

const ViewThree = () => (
  <Text style={styles.text}>I am View Three</Text>
);

const tabRouterOptions = {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: cooknColor,
    labelStyle: { ...tabStyles.label },
  },
};

const TabRouter = TabNavigator({
  ViewOne: { screen: ViewOne },
  ViewTwo: { screen: ViewTwo },
  ViewThree: { screen: ViewThree },
}, { ...tabRouterOptions });

TabRouter.navigationOptions = {
  title: 'Cookn',
  header: {
    style: { ...headerStyles.container },
    titleStyle: { ...headerStyles.text },
  },
};

const router = StackNavigator({
  Home: { screen: TabRouter },
});

export default router;
