import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { metrics, fonts, colors } from '../../styles';





const styles = StyleSheet.create({

  container: {
   
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems:'center',    
    paddingTop: 10 + Constants.statusBarHeight,
    backgroundColor:colors.regular,
  
  
  },
  logo:{
  
    alignContent:'center',
    
   

  }

  
});


export default styles;