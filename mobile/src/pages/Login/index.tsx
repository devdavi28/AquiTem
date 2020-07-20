import React, { createContext, useState, useEffect, useContext } from 'react'
import {Feather as Icon, FontAwesome} from '@expo/vector-icons'
import { View, Image,TouchableOpacity, Text, ImageBackground , Platform, KeyboardAvoidingView, TextInput} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'
import {useNavigation} from  '@react-navigation/native'
import {useAuth} from '../../contexts/auth'
import api from '../../services/api'
import * as Animatable from 'react-native-animatable';
import styles from './styles'





const SignIn = () => {

const[email, setEmail] = useState('')
const[password, setPassword] = useState('')
const [errorMessage, setErrorMessage] = useState('')

  const [ data, setData] = useState({
    email:'',
    password:'',
    validUser:true,
    vaidadPassword:true,  
    check_textInputChange: false,
    secureTextEntry: true,  
  });
  
  const navigate = useNavigation()
  const {user, signIn}= useAuth();
  



   async function handleSignIn () {

   
      try{

        signIn();


    }catch(err){
      console.log(err)
      setErrorMessage('Usuário não existe')

    }

    
       

   }
 
   const textInputChange = (val:string) => {
    if( val.trim().length >= 6 ) {
        setData({
            ...data,
            email: val,
            check_textInputChange: true,
            validUser: true
        });
    } else {
        setData({
            ...data,
            email: val,
            check_textInputChange: false,
            validUser: false
        });
    }
}

const handleValidUser = (val:string) => {
  if( val.trim().length >= 4 ) {
      setData({
          ...data,
          validUser: true
      });
  } else {
      setData({
          ...data,
          validUser: false
      });
  }
}

const handlePasswordChange = (val:string) => {
  if( val.trim().length >= 6 ) {
      setData({
          ...data,
          password: val,
          vaidadPassword: true
      });
  } else {
      setData({
          ...data,
          password: val,
          vaidadPassword: false
      });
  }
}

const updateSecureTextEntry = () => {
  setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
  });
}
  
   function handleRegister(){
     navigate.navigate('Register')  

   }

   return(
     
  
   <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? 'padding' : undefined}>
    <ImageBackground source={require('../../assets/home-background.png')}
      style={styles.container}
      imageStyle={{ width: 274, height: 368 }}>


        {!!errorMessage && <Text>{errorMessage}</Text>}

    
      <View style={styles.main}>
       <Image style={styles.img} source={require('../../assets/marca.png')} />
        <View>
        <Text style={styles.title}>Aqui Tem </Text>
          <Text style={styles.description}>Acesso <Text style={styles.textDesc}>fácil</Text> aos produtos e serviços do seu bairro.</Text>
      </View>
      </View>
      <View style={styles.footer}>
      <View>
     
        <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder="E-mail"
        keyboardType="name-phone-pad"
        placeholderTextColor="#999"
        value={user?.email}
        onChangeText={(val) => textInputChange(val)}
        onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                      
        /> 
           {data.check_textInputChange ? 
            <Icon style={styles.icon} name="check-circle"color="green"
            size={20}/>: null}
      </View>
      { data.validUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            </Animatable.View>
            }
   
        
         <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        value={user?.password}
        autoCapitalize="none"
        secureTextEntry={data.secureTextEntry ? true : false}
        onChangeText={(val) => handlePasswordChange(val)}
     
       />  
        <TouchableOpacity  style={styles.iconButton}
        onPress={updateSecureTextEntry}>
           {data.secureTextEntry ? 
         <Icon   name="eye-off" color="grey" size={20}/>
      : <Icon  name="eye" color="grey"size={20}/>
         }
        </TouchableOpacity>
       
                { data.vaidadPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 6 characters long.</Text>
            </Animatable.View>
            }
         
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


export default SignIn;
