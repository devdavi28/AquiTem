import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import {AppLoading} from 'expo'
import { StatusBar } from 'react-native';
import {AuthProvider} from './src/contexts/auth'
import {Roboto_500Medium, Roboto_400Regular, useFonts} from '@expo-google-fonts/roboto';
import {Ubuntu_700Bold}from '@expo-google-fonts/ubuntu'

import Routes from './src/routes';

const  App: React.FC = ()=> { 
  const [fontsLoaded] = useFonts({
    
    Roboto_400Regular, 
    Roboto_500Medium,
    Ubuntu_700Bold

   
  }); 
    if(!fontsLoaded){
      return <AppLoading/>
    } 

  return (
   
    <NavigationContainer>
    
     <AuthProvider>    
       <StatusBar barStyle="dark-content" 
      backgroundColor='#AAE06F'
       translucent/>
      <Routes />
      </AuthProvider>
      </NavigationContainer>
   
  );
}

export default App;