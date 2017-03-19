import { StyleSheet } from 'react-native';
import { colors } from '../../config/appstyles';

export default StyleSheet.create({
    container: {
    flex:1,
    paddingTop : 32,
    backgroundColor:colors.primary_color,
  },
  textBack:{
      color:colors.primary_color_text,
      fontSize: 16
  },
  photoBanner:{
    flex: 1,
    alignItems:'center',
    width: null,
    height: null,
    justifyContent:'center'

  }, 
  viewPhoto:{
    flex: 1,
    alignItems:'stretch',
    justifyContent:'center'
  }, 
  viewInformation:{
    opacity:0.9,
    position: 'absolute',
    bottom: 0,
    justifyContent:'flex-end'
  },
   page:{
        bottom: 0,
        marginLeft:30,
        marginRight:30,
    },
    title:{
    fontFamily: 'Cochin',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems:'center',
    marginTop:10,
    marginLeft:8,
    color : colors.primary_color_text,
    justifyContent:'center',
  },
  textDateTime:{
      marginTop:16,
      marginLeft:8,
      marginRight:8,
      color : colors.primary_color_light,
      alignItems:'flex-start',
      fontSize: 14,
  },
  textMovieInfor:{
      marginLeft:8,
      marginRight:8,
      color : colors.primary_color_light,
      alignItems:'flex-start',
      fontSize: 14,
  },
  description: {
      marginTop:4,
      marginLeft:8,
      marginRight:8,
      color : colors.primary_color_light,
      alignItems:'flex-start',
      fontSize: 14,
      fontWeight: 'bold',
  }
});