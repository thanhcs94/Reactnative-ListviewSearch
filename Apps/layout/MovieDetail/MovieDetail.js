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
import Loading from '../../components/Loading/Loading';
import styles from './styles';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  TextInput,
  Animated,
  ScrollView,
  LayoutAnimation

} from 'react-native';

export default class MovieDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '-1',
            movie_id: this.props.mId, // Get value(s)
            height: 200,
            line : 4,
            marginScroll: 500
        }
    }


    clickToOpen(){
        var height = this.state.height;
        var line = this.state.line;
        var marginScroll = this.state.marginScroll;
        if(height == 200){
            height = 50;
            line = 0
            marginScroll = 100
        }else{
            height = 200;
            line = 4
            marginScroll = 500
        }
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.setState({
            height,
            line,
            marginScroll
        })
    }


    /*this function will call first */
    componentDidMount() {
        this.getMoviesFromApiAsync()
    }

    getMoviesFromApiAsync() {
        return fetch('https://api.themoviedb.org/3/movie/' + this.state.movie_id + '?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({isLoading: false, jsonData: responseJson});
                console.log(responseJson);
                console.log("Movie detail : " + responseJson.overview);
                this.setState({
                    data: responseJson
                });
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }

  render() {
      var height = this.state.height;
      var line = this.state.line; // 0: will be showed all lines
      var marginScroll = this.state.marginScroll;
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress = {this.props.clickBack}>
        <View style={{marginLeft:4,flexDirection: 'row'}}>
        <Image style = {{width: 20, height:20, marginBottom:8}} source={images.ic_backpress} />
        <Text style={styles.textBack}>Back</Text>
        </View>
     </TouchableOpacity>

      <View style = {styles.viewPhoto}>
      {/*<Loading style={{alignItems:'center', flex:1}}/>*/}
      <Image
          style={styles.photoBanner}
          source={{uri:'https://image.tmdb.org/t/p/original/'+this.state.data.poster_path}}
          indicator={ProgressBar}
      />

      <View style ={[styles.viewInformation]}>
          <ScrollView
              style={{}}>
              <TouchableOpacity onPress={() => this.clickToOpen()}>
                  <View style={[styles.page, {backgroundColor:colors.movie_detail_banner_color,marginTop: marginScroll}]}>

                      <Text style={styles.title}>{this.state.data.original_title}</Text>
                      <Text style= {styles.textDateTime}>{this.state.data.release_date}</Text>
                      <View style  = {{flexDirection:'row', flex:2, maxHeight:30, height:30 , marginLeft:8, marginTop:4}} >

                        <View style  = {{flexDirection:'row', flex:1, alignItems:'center'}}>
                          <Image source = {images.ic_date} style ={{width:16, height:16}}/>
                          <Text style= {styles.textMovieInfor}>69%</Text>
                        </View>

                        <View style  = {{flexDirection:'row', flex:1, alignItems:'center'}}>
                          <Image source = {images.ic_time} style ={{width:20, height:20}}/>
                          <Text style= {styles.textMovieInfor}>{this._call()}</Text>
                        </View>
                      </View>
                      <Text style={styles.description} numberOfLines={line}>{this.state.data.overview}</Text>
                  </View>
              </TouchableOpacity>
          </ScrollView>
       </View>  

      </View>
      </View>
    );
  }

    _call(){
        var timeMV = this.state.data.runtime;
        var hour = parseInt(timeMV/60);
        var minutes = timeMV%60;
        var t ="";
        var s ="";
        if(parseInt(hour)>0)
            t = hour+" hour";
        if(parseInt(hour)>0)
            s = minutes+" minutes";
        return t+" "+s;
    }

     _timeDifference(previous) {

        var current = new Date().getTime();
        console.log("datetime "+ current);
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;

        var elapsed = current - previous;

        if (elapsed < msPerMinute) {
            return Math.round(elapsed/1000) + ' seconds ago';
        }

        else if (elapsed < msPerHour) {
            return Math.round(elapsed/msPerMinute) + ' minutes ago';
        }

        else if (elapsed < msPerDay ) {
            return Math.round(elapsed/msPerHour ) + ' hours ago';
        }

        else if (elapsed < msPerMonth) {
            return 'approximately ' + Math.round(elapsed/msPerDay) + ' days ago';
        }

        else if (elapsed < msPerYear) {
            return 'approximately ' + Math.round(elapsed/msPerMonth) + ' months ago';
        }

        else {
            return 'approximately ' + Math.round(elapsed/msPerYear ) + ' years ago';
        }
    }

}



/*
{
  "adult": false,
  "backdrop_path": "/5pAGnkFYSsFJ99ZxDIYnhQbQFXs.jpg",
  "belongs_to_collection": {
    "id": 748,
    "name": "X-Men Collection",
    "poster_path": "/1Zo4J5SAni8lyXt7NxJwJZ0f0ip.jpg",
    "backdrop_path": "/Abnosho2v3bcdvDww6T7Hfeczm1.jpg"
  },
  "budget": 97000000,
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    }
  ],
  "homepage": "http://www.foxmovies.com/movies/logan",
  "id": 263115,
  "imdb_id": "tt3315342",
  "original_language": "en",
  "original_title": "Logan",
  "overview": "In the near future, a weary Logan cares for an ailing Professor X in a hide out on the Mexican border. But Logan's attempts to hide from the world and his legacy are up-ended when a young mutant arrives, being pursued by dark forces.",
  "popularity": 170.249545,
  "poster_path": "/45Y1G5FEgttPAwjTYic6czC9xCn.jpg",
  "production_companies": [
    {
      "name": "Twentieth Century Fox Film Corporation",
      "id": 306
    },
    {
      "name": "Donners' Company",
      "id": 431
    },
    {
      "name": "Marvel Entertainment",
      "id": 7505
    },
    {
      "name": "TSG Entertainment",
      "id": 22213
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "2017-02-28",
  "revenue": 460961042,
  "runtime": 141,
  "spoken_languages": [
    {
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "His Time Has Come",
  "title": "Logan",
  "video": false,
  "vote_average": 7.7,
  "vote_count": 1325
}
*/

