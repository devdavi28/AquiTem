import React, {useState, useEffect} from 'react';
import {Feather} from  '@expo/vector-icons';

import { View, Image, Text, ImageBackground ,
   Platform, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import {useNavigation} from  '@react-navigation/native'
import {useAuth} from '../../contexts/auth'
import styles from './styles'



const Home = () => {

  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');
  const navigation = useNavigation();

  
 
  

  function handleNavigationPoints(){
    
    
    navigation.navigate('Points',{
      uf, city
    })

  }
  
   

  return (
    

   <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? 'padding' : undefined}>
    <ImageBackground source={require('../../assets/home-background.png')}
      style={styles.container}
      imageStyle={{ width: 274, height: 368 }}>
      
    
      <View style={styles.main}>
       <Image style={styles.img} source={require('../../assets/marca.png')} />
        <View>
       
        <Text style={styles.title}>Aqui Tem </Text>
          <Text style={styles.description}>Acesso
           <Text style={styles.textDesc}>fácil</Text> aos produtos e serviços do seu bairro.</Text>
      
      </View>
      </View>
      <View style={styles.footer}>
        <TextInput
        style={styles.input}
        placeholder="Digite sua Uf"
        placeholderTextColor="#999" 
       onChangeText={setUf}
       value={uf}
       maxLength={2}
        autoCapitalize='characters'
        autoCorrect={false}
       
        
        />
        
         <TextInput
        style={styles.input}
        placeholder="Digite a sua Cidade"
        placeholderTextColor="#999" 
        onChangeText={setCity}
       value={city}
        autoCorrect={false}
        autoCapitalize='words'
       

              
       />      

        
        <RectButton style={styles.button} onPress={handleNavigationPoints}>
          <View style={styles.buttonIcon}>
            <Text>
              <Feather name="search" color="#fff"size={25}/>
          </Text>
          </View>
          <Text style={styles.buttonText}>
            Pesquisar
          </Text>
        </RectButton>
         </View>
    </ImageBackground>
   </KeyboardAvoidingView>
  
  );
}

export default Home;



