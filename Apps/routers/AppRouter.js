/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//Step 1 : import library
import React, { Component } from 'react';
//import ListMovie from '../../layout/ListMovie/ListMovie';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator,
  Image,
  TextInput,
  ListView,} from 'react-native';
  
export default class AppRouter extends Component {

  renderScene(route,navigator){
    switch (route.name) {
      case "List": return <View/>;

      case "Detail": return <View ></View>;

        break;
      default:
    }
  }
  render() {
    return (
      <Navigator
        initialRoute = {{name:"List"}}
        renderScene  = {this.renderScene}
      />
    )
  }
}
