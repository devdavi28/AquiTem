import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import { colors, fonts, metrics } from '../../styles'


const styles = StyleSheet.create({

  container: {
  marginTop:95,
     
  },

  boxContainer:{
   backgroundColor:'#999',
   height:400,
   },

    produtoContainer: {
    padding: metrics.padding,
    borderTopWidth: 1,
    borderColor: colors.lighter,
    backgroundColor:'#fff',
    shadowColor: colors.light,
    shadowRadius: 3,
    shadowOpacity: 0.1,
    height:500,       
     
  },
 
  containerLoad:{
    flex:1,
    alignContent:'center',
    justifyContent:'center'
  },

  textLoad:{
    textAlign:'center',
    justifyContent:'center',
    fontSize:fonts.regular,
  },
  
  imageContainer: {
    padding: metrics.padding,
  },

  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain', // a imagem se adaptar a o espaço

  },

  //titulo do Produto
  title: {
    textAlign: 'center',
     fontFamily: 'Ubuntu_700Bold',
    color: colors.darker,
  },
// descrição do Produto
  description: {
    textAlign: 'center',
    color: colors.dark,
    fontSize: fonts.smaller,
    fontFamily: 'Roboto_500Medium',
  },
// preço//
  price: {
    textAlign: 'center',
    color: colors.price,
    fontSize: fonts.regular,
    marginTop: 5,
  },
});



  
 
  
  

export default styles;
