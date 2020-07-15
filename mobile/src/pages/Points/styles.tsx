import Constants from 'expo-constants';
import {StyleSheet}from 'react-native'
import {colors, fonts} from '../../styles'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:10,
    paddingTop:5 + Constants.statusBarHeight,
    backgroundColor:"#fff"
  },

  title: {
    fontSize: 20,
    fontFamily: 'Ubuntu_700Bold',
    marginTop:25,
  },
  textDesc:{
    color:"#e20",
    fontFamily: 'Ubuntu_700Bold',
  },

  userName: {
    fontSize:16,
    fontFamily: 'Roboto_400Regular',
    marginTop:20,
    marginHorizontal:60
  },
  header: {
   
    marginTop:10,
    flexDirection:'row',
      
  },

  img:{
    width:40,
    height:40,
    position:'absolute',
    marginTop:10,
    marginHorizontal:97,
  },
  

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 4,
    fontFamily: 'Roboto_400Regular',
  },

  mapContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop:-20,
  },

  map: {
    width: '100%',
    height: '100%',
  },

  mapMarker: {
    width: 90,
    height: 80, 
  },

  mapMarkerContainer: {
    width: 90,
    height: 70,
    borderColor: '#34CB79',
    borderWidth: 1,
    flexDirection: 'column',
    backgroundColor:'#fff',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center'
  },

  mapMarkerImage: {
    width:90,
    height: 45,
    resizeMode: 'cover',
  },

  mapMarkerTitle: {
    flex: 1,
    fontFamily: 'Roboto_400Regular',
    color: '#000',
    fontSize: 13,
    lineHeight: 23,
        textAlign: 'center',

    
  },

  itemsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 32,
  },

  item: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eee',
    height:60,
    width: 90,
    borderRadius: 8,
    paddingHorizontal:10,
    paddingBottom: 16,
    marginRight: 8,
    justifyContent: 'space-between',
  
  },

  selectedItem: {
    borderColor: '#34CB79',
    borderWidth: 2,
  },

  itemTitle: {
    fontFamily: 'Roboto_400Regular',
    textAlign:'center',
    fontSize: 12,
   
  },
});
export default styles;