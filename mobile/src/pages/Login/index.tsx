import React, { createContext, useState, useEffect, useContext } from 'react'
import {Feather as Icon, MaterialCommunityIcons} from '@expo/vector-icons'
import { View, Image,TouchableOpacity, Text, ImageBackground , Platform, KeyboardAvoidingView, TextInput} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import {useAuth} from '../../contexts/auth'
import {useNavigation} from  '@react-navigation/native'
import api from '../../services/api'
import styles from './styles'



const Login = () => {
  
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const navigate = useNavigation()
  
 
    
  async function handleSignIn () {
    
  
  
    
    const response = await api.post('authenticate', {email, password})
    const { user, token } = response.data
    console.log(user)
   
  }
   
  
   function handleRegister(){
     navigate.navigate('Register')  

   }

   return(
     
   <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? 'padding' : undefined}>
    <ImageBackground source={require('../../assets/home-background.png')}
      style={styles.container}
      imageStyle={{ width: 274, height: 368 }}>
      
    
      <View style={styles.main}>
       <Image style={styles.img} source={require('../../assets/marca.png')} />
        <View>
        <Text style={styles.title}>Aqui Tem </Text>
          <Text style={styles.description}>Acesso <Text style={styles.textDesc}>fácil</Text> aos produtos e serviços do seu bairro.</Text>
      </View>
      </View>
      <View style={styles.footer}>
        <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder="E-mail"
        keyboardType="name-phone-pad"
        placeholderTextColor="#999" 
        value={email}
        onChangeText={setEmail}
       
        
        />
        
         <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry={false}
        value={password}
        onChangeText={setPassword}
                  
       />  
         
        <RectButton style={styles.button}
         onPress={handleSignIn}>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="log-in" color="#fff"size={25}/>
          </Text>
          </View>
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        </RectButton>
        
        <TouchableOpacity onPress={handleRegister}
     >
        <Text style={styles.textFooter}>Crie sua conta</Text>
      </TouchableOpacity>
         </View>
    </ImageBackground>
   </KeyboardAvoidingView>
 
  );
}


export default Login;

