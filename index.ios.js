/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Index from './Apps';
import AppRouter from './Apps/routers/AppRouter';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class PrWe1 extends Component {
  render() {
    return (
      <AppRouter/>
    );
  }
}

AppRegistry.registerComponent('PrWe1', () => PrWe1);
