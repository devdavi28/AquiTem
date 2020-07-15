import React from 'react';
import { Feather as Icon, MaterialIcons } from '@expo/vector-icons';
import { View, Image, Text, ImageBackground, Platform, KeyboardAvoidingView, TextInput } from 'react-native';



import styles from './styles';




export default function Header() {


  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../../assets/logo2.png')} />

      </View>
    </View>


  );
}


