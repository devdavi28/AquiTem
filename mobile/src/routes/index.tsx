import React from 'react';
import {View , ActivityIndicator, Text} from 'react-native'
import {useAuth} from '../contexts/auth'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'


const Routes: React.FC = () => {

  const {signed, loading} = useAuth();

  if(loading){
    return(
      <View style={{flex:1 , justifyContent:'center', alignItems:'center'}}>
        <Text>Aguardando...</Text>
        <ActivityIndicator size='large' color='#34CB79'/> 

      </View>
    )

  }
  
  
 return signed ? <AppRoutes/> : <AuthRoutes />; // if ternario
};

export default Routes;