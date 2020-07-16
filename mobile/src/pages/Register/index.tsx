import React, { useState } from 'react'
import {Feather as Icon, MaterialCommunityIcons} from '@expo/vector-icons'
import { View, Image, ScrollView,
ToastAndroid, ActivityIndicator, Text, ImageBackground , Platform, KeyboardAvoidingView, TextInput} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import {useNavigation} from  '@react-navigation/native'
import {useAuth} from '../../contexts/auth'
import api from '../../services/api'

import styles from './styles'


interface Data{
  user:{
    name:string;
    email:string;
    surname:string;
    password:string;
  }
}

export const Register: React.FC = () => {

  const [data, setData] = useState<Data>({} as Data);
  const [name, setName] =useState('');
  const [surname, setSurname] =useState('');
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation()

  async function handleRegister () {
    try {
      const credentials={
        name:name,
        surname:surname,
        email:email,
        password:password,
      }
     
      const response = await api.post('user', credentials)
      setData(response.data);
    
       
        ToastAndroid.show(`Bem vindo!  ${data.user.name}`, 
        ToastAndroid.LONG);
    


      navigation.navigate('Home')
      setLoading(true)
    } catch (err) {
      setLoading(false)
    }
  }

  

  if (loading) {
    return (
      <View style={styles.containerLoad}>
        <ActivityIndicator color="#17B443" size="large" />
        <Text style={styles.textLoad}>Aguarde...</Text>
      </View>
    )
  }

  return (
    <KeyboardAvoidingView style={{flex:1}} 
    behavior={Platform.OS === "ios" ? 'padding' : undefined}>
    <>
    <ImageBackground source={require('../../assets/home-background.png')}
      style={styles.container}
      imageStyle={{ width: 274, height: 368 }}>
      
    
      <View style={styles.main}>
       <Image style={styles.img} source={require('../../assets/marca.png')} />
        <View>
        <Text style={styles.title}>Aqui Tem </Text>
          <Text style={styles.description}>Faça o seu <Text style={styles.textDesc}>Cadastro</Text></Text>
      </View>
      </View>

    
      <View style={styles.footer}>
        <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder="Nome"
        keyboardType="name-phone-pad"
        placeholderTextColor="#999" 
        value={name}
        onChangeText={setName}
       
        
        />
         <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder="Sobrenome"
        keyboardType="name-phone-pad"
        placeholderTextColor="#999" 
        value={surname}
        onChangeText={setSurname}
       
        
        />

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
        onChangeText={setPassword}/>       
          
        
        <RectButton style={styles.button}
         onPress={handleRegister}>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="user" color="#fff"size={25}/>
          </Text>
          </View>
          <Text style={styles.buttonText}>
            Cadastrar
          </Text>
        </RectButton>
             
        </View>
      
    </ImageBackground>
    </>
   </KeyboardAvoidingView>
  
  );
}
export default Register;
