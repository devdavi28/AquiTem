import {StyleSheet}from 'react-native'
import Constants from 'expo-constants';
import {colors, metrics, fonts} from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor:colors.white,
    paddingTop:5 + Constants.statusBarHeight,
  },
 
  pointImage: {
    width: '100%',
    height: 80,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop:10,
   
  },

  pointName: {
    color: '#322153',
    fontSize: 25,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 10,
  },

  pointItems: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
    color: '#6C6C80'
  },

  address: {
    marginTop: 8,
  },
  
  addressTitle: {
    color: '#322153',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },

  addressContent: {
    fontFamily: 'Roboto_400Regular',
    lineHeight: 24,
    marginTop:5,
    color: '#6C6C80'
  },

  boxProduto:{
    marginTop: 8,

  },


  textDestac: {
    fontFamily: 'Roboto_400Regular',
    lineHeight: 24,
    marginTop:5,
    color: '#6C6C80'
  },

  textName:{
    color: '#322153',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },

  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#999',
    paddingVertical: 20,
    paddingHorizontal: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
  button: {
    width: '48%',
    backgroundColor: '#34CB79',
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    marginLeft: 8,
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
  },

  containerLoad:{
    flex:1,
    alignContent:'center',
    justifyContent:'center'
  },

  textLoad:{
    textAlign:'center',
    justifyContent:'center',
   
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