/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//Step 1 : import library
import React, { Component } from 'react';
import ListMovie from '../layout/ListMovie/ListMovie';
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

      case "List":  return (<ListMovie clickRed={()=>{
        navigator.push({name:"Detail"},
      );
      }}
      />);

      case "Detail": return <Detailsss clickRed={()=>{
        navigator.push({name:"List"},
      );
      }}>
      </Detailsss>
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

class Detailsss extends Component {

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

