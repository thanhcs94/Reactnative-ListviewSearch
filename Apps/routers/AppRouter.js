/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//Step 1 : import library
import React, { Component } from 'react';
import ListMovie from '../layout/ListMovie/ListMovie';
import MovieDetail from '../layout/MovieDetail/MovieDetail';
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
        case "List":  return (<ListMovie url = {this.props.url} onClickDetail={(mId)=>{
        navigator.push({
          name:"Detail",
          para:{mId:mId}
          }
      );
      }}
      />);

      case "Detail": return (<MovieDetail clickBack={()=>{
        navigator.pop();
      }}
       mId={route.para.mId}
      />)
    
        break;
      default:
    }
  }
  render() {
    return (
      <Navigator
        initialRoute = {{name:"List"}}
        renderScene  = {this.renderScene.bind(this)}
        //this to send context
      />
    )
  }
}