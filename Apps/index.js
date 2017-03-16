/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import Button from '../Apps/components/Button/Button';
import {images} from '../Apps/config/images';
import {colors} from '../Apps/config/appstyles';
import {capitalizeFirst} from '../Apps/lib/string';
import {capitalizeAll} from '../Apps/lib/string';
import ListMovie from '../Apps/layout/ListMovie';
import TabBar from '../Apps/layout/TabBar/TabBar';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const onButtonPress = () => {
  alert('Button has been pressed!');
};

export default class Index extends Component {
  render() {
    return (
     // <View style={styles.container}>
        <TabBar/>
     // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary_color,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
