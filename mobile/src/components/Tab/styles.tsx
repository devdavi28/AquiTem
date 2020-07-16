import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {  
    paddingVertical: 12,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
   
    
  },

  
  icon: {
    color: colors.light,
  },

  active: {
    color: colors.primary, // icone ativo 
  },
 
});

export default styles;