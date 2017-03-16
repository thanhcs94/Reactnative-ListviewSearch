/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import SearchBar from 'react-native-search-bar';
import Button from '../../components/Button/Button';
import {images} from '../../config/images';
import {colors} from '../../config/appstyles';
import {capitalizeFirst} from '../../lib/string';
import {capitalizeAll} from '../../lib/string';
import styles from './styles';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity,
  TextInput

} from 'react-native';

export class MovieDetail extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={{backgroundColor:'yellow', flex:1 }}>
      <TouchableOpacity onPress = {this.props.clickRed}>
      <Text style={{marginTop: 50}}>what's fuck'</Text>
      </TouchableOpacity>
      </View>
    );
  }
}