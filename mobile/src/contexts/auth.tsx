import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { View, Button, Animated, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'

import api from '../services/api'
import styles from './styles'

interface User{
  name:string;
  email:string;
  surname:string;
  password:string;
}
interface Auth{
  email:string;
  password:string;
}

interface AuthContextData{
  signed: boolean;
  user: User | null;
  loading:boolean;
  signOut(): void;
  signIn(): Promise<void>;


}

const AuthContext = createContext<AuthContextData>({} as AuthContextData) // tipagem

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User  | null>(null)
  const[email, setEmail] = useState<Auth>({}as Auth);
  const[password, setPassword] = useState<Auth>({}as Auth);
   const [loading, setLoading] = useState(false)


  useEffect(() => {
    async function loadStoragedData () {
      const storageUser = await AsyncStorage.getItem('@AquiAuth:user')
      const storageToken = await AsyncStorage.getItem('@AquiAuth:token')

      if (storageUser && storageToken) {
        api.defaults.headers.Autorization = `Bearer ${storageToken}`

        setUser(JSON.parse(storageUser))
        setLoading(true)
       
        // RNSplashScreen.hide();
      }
    }
    loadStoragedData()
  }, [])

  
  async function signIn () {
    const credentials={
      email:'sdavi28@hotmail.com',
      password:'102030'
    }
            
    const response = await api.post('authenticate',credentials)
  
    const { user, token } = response.data
    setUser(user)
     
     api.defaults.headers.Autorization = `Bearer ${token}`

    // Armazenando os dados logado em um estado
    await AsyncStorage.setItem('@AquiAuth:user', JSON.stringify(user))
    await AsyncStorage.setItem('@AquiAuth:token', token)
  };
  // Deslogar da aplicação
  function signOut () {
    AsyncStorage.clear().then(() => {
      setUser(null)
    })
  };

  return (

     <AuthContext.Provider value={
      { signed: !!user, user, loading,  signIn, signOut }}>
      {children}
    </AuthContext.Provider>

  );
  
}

// CRIANDO O HOOKS
export function useAuth () {
  const context = useContext(AuthContext)
  return context
}

export default AuthContext
