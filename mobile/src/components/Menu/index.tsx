import React, {useState, useEffect} from 'react'
import { View , TouchableOpacity, Image, Text, ScrollView, Alert} from 'react-native';
import {useNavigation, useRoute}from '@react-navigation/native'
import {Feather as Icon} from '@expo/vector-icons'
import MapView, {Marker} from 'react-native-maps'
import {SvgUri} from 'react-native-svg'
import * as Location from 'expo-location'
import api from '../../services/api'

 

 import styles from './styles';

 interface Item{
   id:number;
   title:string;
   image_url:string;
 }
 interface Point{
   id: number;
   name: string;
   image:string;
   image_url:string;
   latitude:number;
   longitude:number;
  
 }
 

  const Menu = () => {
    //criando um estado para armazenar a informação 

    const [items, setItems] = useState<Item[]>([]);
   

    const [selectedItems, setSelectedItems] = useState<number[]>([]);
   
    
    const navigation = useNavigation();

                
    useEffect(()=>{
      api.get('items').then(response =>{
        setItems(response.data) // pegando os items
      });
    });




  function handleNavigationBack(){
    navigation.goBack();
  }

  function handleNavigationDetail(id:number){
    navigation.navigate('Detail',{point_id: id});
  }

function handleSelectItem(id: number) {

      const alreadySelected = selectedItems.findIndex(item => item === id);
      if (alreadySelected >= 0) {
  
        const filteredItems = selectedItems.filter(item => item !== id);
        setSelectedItems(filteredItems);
  
      } else {
        setSelectedItems([...selectedItems, id]);
      }
  
  
    }

  
  return (
    <>
   
    <View style={styles.itemsContainer}>
      <ScrollView
      horizontal showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal:20}}
      >

      
      {items.map(item =>(
         <TouchableOpacity 
         key={String(item.id)} 
         style={[
           styles.item,
          selectedItems.includes(item.id) ? styles.selectedItem :{}
           ]} 
          
         onPress={()=>handleSelectItem(item.id)}
         activeOpacity={0.5}
         >
         <SvgUri width={25} height={25} uri={item.image_url} />
         <Text style={styles.itemTitle}>{item.title}</Text>
        
       </TouchableOpacity> 
       
 
      ))}
      
      
      </ScrollView>

    </View>
    </>

  )
}

export default Menu;