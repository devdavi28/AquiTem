import Constants from 'expo-constants';
import {StyleSheet}from 'react-native'


const styles = StyleSheet.create({
  
    itemsContainer: {
   
    borderColor: '#999', 
    flexDirection: 'row',
    marginTop:98,
     position:'absolute',

  },

  item: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eee',
    height: 74,
    width: 74,
    borderRadius:50,
    paddingHorizontal:5,
    paddingTop: 12,
    paddingBottom:10,
    marginRight: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
  },

  selectedItem: {
    borderColor: '#34CB79',
    borderWidth: 2,
  },

  itemTitle: {
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
    fontSize: 10,
    marginTop:4, 
    color:'#999'
    
  },
});
export default styles;