import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, metrics } from '../../../styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 3,
    width: (width - 45) / 2,
    marginBottom: metrics.padding,
    shadowColor: colors.light,
    shadowRadius: 3,
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 }, // sombra
    alignSelf: 'flex-start',
  },

  checkIcon: {
    position: 'absolute',
    right: metrics.padding,
    top: metrics.padding,
    color: colors.primary,
    zIndex: 1,
  },

  imageContainer: {
    padding: metrics.padding,
  },

  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain', // a imagem se adaptar a o espaço

  },

  infoContainer: {
    padding: metrics.padding,
    borderTopWidth: 1,
    borderColor: colors.lighter,
  },
  //titulo do Produto
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.darker,
  },
// descrição do Produto
  description: {
    textAlign: 'center',
    color: colors.dark,
    fontSize: fonts.smaller,
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
