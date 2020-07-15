import Constants from 'expo-constants';
import {StyleSheet}from 'react-native'


const styles = StyleSheet.create({
  
  itemsContainer: {
    flexDirection: 'row',
    marginTop: 95,
     position:'absolute',

  },

  item: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eee',
    height: 83,
    width: 83,
    borderRadius: 8,
    paddingHorizontal: 13,
    marginTop:10,
    paddingBottom: 16,
    marginRight: 8,
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
    fontSize: 11,
    marginTop:27, 
    color:'#999'
    
  },
});
export default styles;