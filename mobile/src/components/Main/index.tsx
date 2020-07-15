import React, {useState, useEffect} from 'react'
import { View , TouchableOpacity, Image, Text, ScrollView, Alert} from 'react-native';
import {useNavigation, useRoute}from '@react-navigation/native'
import {Feather as Icon} from '@expo/vector-icons'
import MapView, {Marker} from 'react-native-maps'
import {SvgUri} from 'react-native-svg'
import * as Location from 'expo-location'
import api from '../../services/api'

import {StyleSheet}from 'react-native'
import style from './styles'

interface Produto{
  id:number;
  title:string;
  description:string,
  value:number,
  image:string;
}


const Main: React.FC = () => {

 
  
  const [produtos, setProduto] = useState<Produto[]>([]);
  const [selectedProduto, setSelectedProduto] = useState<number[]>([]);
  
  const navigation = useNavigation();


    
  useEffect(()=>{
    api.get('produto').then(response =>{


      console.log(response.data);
      setProduto(response.data) // pegando os items
    });
  });

  
  function handleNavigationDetail(id:number){
    navigation.navigate('Detail',{point_id: id});
  }

function handleSelectItem(id: number) {

      const alreadySelected = selectedProduto.findIndex(produto => produto === id);
      if (alreadySelected >= 0) {
  
        const filteredItems = selectedProduto.filter(produto => produto!== id);
        setSelectedProduto(filteredItems);
  
      } else {
        setSelectedProduto([...selectedProduto, id]);
      }
  
  
    }

  

  return (
    <>
   
    <View style={styles.itemsContainer}>
      <ScrollView
      horizontal showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal:20}}
      >

      
      {produtos.map(produto =>(
         <TouchableOpacity 
         key={String(produto.id)} 
         style={[
           styles.itemsContainer,
          selectedProduto.includes(produto.id) ? styles.selectedItem :{}
           ]} 
          
         onPress={()=>handleSelectItem(produto.id)}
         activeOpacity={0.5}
         >
         <SvgUri width={25} height={25} uri={produto.image} />
         <Text style={styles.itemTitle}>{produto.title}</Text>
        
       </TouchableOpacity> 
       
 
      ))}
      
      
      </ScrollView>

    </View>
    </>
  )
}


const styles = StyleSheet.create({
  
  

  container: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eee',
    height: 295,
    width: 320,
    marginTop:180,
    position:'absolute',
    
   
    
  },

  itemsContainer: {
    flexDirection: 'row',
   
     position:'absolute',

  },

  selectedItem: {
    borderColor: '#34CB79',
    borderWidth: 2,
  },

  itemTitle: {
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
    fontSize: 11,
    marginTop:27, 
    color:'#999'
    
  },
});


export default Main;