import { Platform } from 'react-native';

export default {
  padding: 15,
  ...Platform.select({
    ios: { headerHeight: 64, headerPadding: 20 },
    android: { headerHeight: 83, headerPadding:15 },
  }),
  tabBarHeight: 43,
  header: 60,

  
  
};
