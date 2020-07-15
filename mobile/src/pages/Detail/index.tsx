import React, {useState, useEffect} from 'react';
import { Feather as Icon, FontAwesome,} from '@expo/vector-icons';
import { useNavigation , useRoute } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { View, TouchableOpacity , Image, Linking, Text, ScrollView} from 'react-native';
import api from '../../services/api'
import Product from '../../components/Product'
import Tab from '../../components/Tab'
import * as MailComposer from 'expo-mail-composer';
import styles from './styles';


interface Params{
  point_id: number;


};

interface DadosProduto{
produto:{
  name:string;
  description:string;
  value: string;
  image:string;
}

};
  interface Data{
    point:{
      image:string;
      image_url:string;
      name:string;
      email:string;
      horario:string;
      departament:string;
      salesmn:string;
      whatsapp:string;
      city:string;
      uf:string;
    };
  items:{
    title:string;
  }[];
}

const Detail = () => {
  
  const [data, setData] = useState<Data>({} as Data);
  const [produtos, setProdutos] = useState<DadosProduto>({} as DadosProduto);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const route =  useRoute();

  const routeParams =  route.params as Params;

  useEffect(()=>{
    api.get(`points/${routeParams.point_id}`).then(response =>{
        setData(response.data);
    })
  },[]);

  useEffect(()=>{
    api.get(`produto/${routeParams.point_id}`).then(response =>{
        setProdutos(response.data);
        console.log(response.data);
    })
  },[]);
  

  function handleNavigationBack(){
    navigation.goBack();
  }

  function handleWatsapp(){
    Linking.openURL(`whatsapp://send?phone=${data.point.whatsapp}&text=Meu pedido`);
    
  }

  function handleComposeMail(){
    MailComposer.composeAsync({
    subject:"Pedido",
    recipients:[data.point.email],
    
    })
  }

  if(!data.point){
    return null;
  }
  return (
    <>
    
    <View style={styles.container}>
     
      <Image style={styles.pointImage} source={{uri:data.point.image_url}}/>
       <Text style={styles.pointName}>{data.point.name}</Text>
      <Text style={styles.pointItems}>{data.point.departament}</Text>
       
      <View style={styles.address}> 
         <Text style={styles.addressTitle}>Endereço:</Text>
           <Text style={styles.addressContent}>{data.point.city}, {data.point.uf}</Text>
        </View>
        <View style={styles.produtoContainer}>
        <Text style={styles.addressTitle}>Produtos em Destaque</Text>
        
        </View>
       
  </View>

  <Tab/>  
  

  </>
  
  );
};

export default Detail;