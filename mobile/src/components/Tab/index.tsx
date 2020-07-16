
import React from 'react';
import {useAuth} from '../../contexts/auth'
import { View, TouchableOpacity} from 'react-native';
import {Feather as Icon} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import styles from './styles';



export default function Tabs() {

 const{ signOut}= useAuth()
 
  const navigation = useNavigation();

  

  function navigateToPoint() {
    navigation.navigate('Points');//passando parametros para outra pagina
  }

  function handleSignOut() {
    signOut();
  }

  function navigateToDrawer() {
    navigation.navigate('Drawer');
  }

  function navigateToHome() {
    navigation.navigate('Home');
  }

 

 

  return(
    <>
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToPoint}>
        <Icon name="home" size={25} style={[styles.icon, styles.active]} />
      </TouchableOpacity>

      
     <TouchableOpacity onPress={navigateToDrawer}>
      <Icon name="user" size={25} style={[styles.icon, styles.active]} />
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToHome}>
      <Icon name="search" size={25} style={[styles.icon, styles.active]} />
      </TouchableOpacity>


      <TouchableOpacity onPress={handleSignOut}>
      <Icon name="log-out" size={25} style={[styles.icon, styles.active]} />
      </TouchableOpacity>

      
     
     


      

    </View>
    </>
  );
}





