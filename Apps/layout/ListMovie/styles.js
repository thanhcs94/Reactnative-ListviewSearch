import { StyleSheet } from 'react-native';
import { colors } from '../../config/appstyles';

export default StyleSheet.create({
   container: {
    paddingRight : 16,
    paddingLeft : 16,
    paddingBottom : 16,
    paddingTop : 32,
    backgroundColor:colors.primary_color,
  },
  listView:{
    paddingTop:4,
    backgroundColor:colors.primary_color
  },
  boderView:{
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    height:40,
    borderColor:'#E4E4E4',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchView:{
    paddingLeft: 16,
    fontSize: 18,
    height:30,
    color:colors.primary_color_text,
  },

  containerItem:{
     flex: 1, 
     flexDirection: 'row',
    marginTop:8,
    marginBottom:8,
    marginBottom: 1,
    paddingBottom:8,
    borderBottomWidth: 0.9,
    borderBottomColor: colors.divider_color
  
  }, 

  viewBanner:{

  },
  viewInfor:{
     flexDirection:'column',
     marginLeft:10,
     marginRight:16,
  },
  photoBanner:{
      width:100,
      height:150
  }, 
  title:{
    fontFamily: 'Cochin',
    fontSize: 20,
    fontWeight: 'bold',
    color : colors.primary_color_text,
  }, 
  description:{
      marginTop:8,
      color : colors.primary_color_light,
  }

});
