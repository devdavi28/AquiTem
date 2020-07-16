import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import SignIn from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'





const AuthStack = createStackNavigator();

const AuthRoutes:React.FC =()=>(
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
         <AuthStack.Screen name ="SignIn"   component={SignIn}/>
         <AuthStack.Screen name ="Register" component={Register}/>
              
  </AuthStack.Navigator>
)

export default AuthRoutes;