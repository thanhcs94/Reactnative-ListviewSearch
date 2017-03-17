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
    width: null,
    height: null,

  }, 
  viewPhoto:{
    flex: 1,
  }
});