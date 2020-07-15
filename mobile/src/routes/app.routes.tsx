import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Points from '../pages/Points'
import Detail from '../pages/Detail'
import Register from '../pages/Register'




const AppStack = createStackNavigator();;

const AppRoutes:React.FC =()=>(
  <AppStack.Navigator screenOptions={{ headerShown: false }}>
   
    <AppStack.Screen name ="Home" component={Home}/>
    <AppStack.Screen name ="Profile" component={Profile}/>
    <AppStack.Screen name ="Points" component={Points}/>
    <AppStack.Screen name ="Detail" component={Detail}/>
    <AppStack.Screen name ="Register" component={Register}/>


  </AppStack.Navigator>
)

export default AppRoutes;