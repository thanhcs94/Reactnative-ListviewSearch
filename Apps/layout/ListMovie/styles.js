import { StyleSheet } from 'react-native';
import { colors } from '../../config/appstyles';

export default StyleSheet.create({
   container: {
    padding : 16, 
    marginTop: 30
  },

  containerItem:{
     flex: 1, 
     flexDirection: 'row',
     marginTop:10
  }, 

  viewBanner:{
    
  },
  viewInfor:{
     flexDirection:'column',
     padding:8
  },
  photoBanner:{
      width:90,
      height:150
  }, 
  title:{
    fontWeight:'500'
  }, 
  description:{
      marginTop:8
  }

});
