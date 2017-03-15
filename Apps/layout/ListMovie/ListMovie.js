/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
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
  TouchableOpacity
} from 'react-native';

export default class ListMovie extends Component {
  constructor(props){
    super(props);
    this.state={
      dataSource: new ListView.DataSource({
        rowHasChanged:(r1, r2) => r1!==r2
      }),
    }
  }
/*this function will call first */
componentDidMount(){
    this.setState({
      dataSource:this.getMoviesFromApiAsync()
    });
  }


 getMoviesFromApiAsync() {
      return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({isLoading: false, jsonData: responseJson});
          console.log(responseJson);
          return responseJson;
        })
        .catch((error) => {
          console.error(error);
        });
    }

renderRow(property){
  return(
    //<TouchableOpacity onPress={()=>{this.props.chonCaSi(property.Ten, property.Hinh, property.MoTa)}}>
      <View style={styles.containerItem}>

        <View style ={styles.viewBanner}>
          <Image style={styles.photoBanner} source={{uri:property.Hinh}} />
       </View>

      <View style = {styles.viewInfor}>
        <Text style = {styles.title}>{property.Ten}</Text>
        <Text style = {styles.description}>{property.Mota}</Text>
      </View>
  </View>
  //</TouchableOpacity>
  )
}

  render() {
     rows = this.dataSource.cloneWithRows(this.state.jsonData.list || [])
    return (
      <View style={styles.container}>
       <ListView
        dataSource = {this.state.dataSource}
        renderRow  = {this.renderRow}
      />
      </View>
    );
  }
}

function CaSi(ten, hinh, mota){
  this.Ten = ten;
  this.Hinh = hinh;
  this.Mota = mota;
}