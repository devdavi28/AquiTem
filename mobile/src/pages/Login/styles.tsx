import {StyleSheet}from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    
  
  },

  main: {
    flex: 1,
    marginTop:10,
    flexDirection:'row',
    alignItems:'flex-start',
    
    
  
  },

  img:{
    width:55,
    height:55,
    position:'absolute',
    marginTop:33,
    marginHorizontal:160,
    
  },

  title: {
 
    fontSize: 35,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 55,

  },

  description: {
    color: '#6C6C80',
    fontSize: 18,
    marginTop: 5,
 
    maxWidth: 270,
    lineHeight: 24,
  },
    textDesc:{
      color:"#e20",
      fontFamily: 'Ubuntu_700Bold',
    },


  footer: {
    flex:1,
    
    
  
  },

  select: {},

  input: {
    height:45,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal:15,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 45,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 45,
    width: 45,
    borderTopLeftRadius:10,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 22,
  },
  textFooter: {
    textAlign: 'center',
    fontSize: 17,   
    marginTop:10

  },
});
export default styles;