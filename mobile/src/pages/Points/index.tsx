import React, {useState, useEffect} from 'react'
import {useAuth} from '../../contexts/auth'
import { View , TouchableOpacity, Image, Text, ScrollView, Alert} from 'react-native';
import {useNavigation, useRoute}from '@react-navigation/native'
import {Feather as Icon} from '@expo/vector-icons'
import MapView, {Marker} from 'react-native-maps'
import {SvgUri} from 'react-native-svg'
import * as Location from 'expo-location'
import Tab from '../../components/Tab'
import api from '../../services/api'

 

 import styles from './styles';

 interface Item{
   id:number;
   title:string;
   image:string;
 }
 interface Point{
   id: number;
   name: string;
   image:string;
   image_url:string;
   latitude:number;
   longitude:number;
  
 }
 interface Params{
  uf: string;
  city:string;
}

  const Points = () => {
    const {user} = useAuth()
    //criando um estado para armazenar a informação 

    const [items, setItems] = useState<Item[]>([]);
    const [points, setPoints] = useState<Point[]>([]);

    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [initialPosition, setInitaialPosition] = useState<[number, number]>([0, 0])   
    
    const navigation = useNavigation();

    const route =  useRoute();

    const routeParams =  route.params as Params;


   useEffect(()=>{
     async function loadPosition(){
       //permissão ao usuario para localização
       const {status} = await Location.requestPermissionsAsync();
       
       if(status !== 'granted'){
          Alert.alert('Precisamos de sua permissão para obter a sua localização!');
          return;
        }
        const location = await Location.getCurrentPositionAsync();
        
        const {latitude, longitude} = location.coords;

       

        setInitaialPosition([
          latitude,
          longitude
         ])
     }

     loadPosition()
   },[]);

      //carregando a api quanto o app inicializar
    useEffect(()=>{
      api.get('items').then(response =>{
        setItems(response.data) // pegando os items
      });
    });

    //carregando os pontos

    useEffect(()=>{
      api.get('points', {
        params:{
          city: routeParams.city,
          uf: routeParams.uf,
          items:selectedItems,
        }
        }).then(response=>{
            setPoints(response.data);

            console.log(response.data);
        })

    },[selectedItems]); //a função só é executada quando um item é selecionado



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
    <View style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.title}>Aqui Tem </Text>
        <Text style={styles.userName}> Olá! {user?.name} </Text>
        <Image style={styles.img} source={require('../../assets/marca.png')} />
          
      </View>

      <Text style={styles.description}>
       Encontre <Text style={styles.textDesc}>Aqui</Text> o que precisar.
       </Text>


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
          <Image source={{uri:item.image}}></Image>
         <Text style={styles.itemTitle}>{item.title}</Text>
       </TouchableOpacity> 
 
      ))}
      
      </ScrollView>

    </View>
        
      
      <View style={styles.mapContainer}> 
      { initialPosition[0] !== 0 &&(

          <MapView style={styles.map}
          loadingEnabled={initialPosition[0]=== 0}
          initialRegion={{
            latitude: initialPosition[0],
            longitude:initialPosition[1],
            latitudeDelta:0.014,
            longitudeDelta:0.014,
          }}>
  
            {points.map(point =>(
              <Marker 
              key ={String(point.id)}
              style={styles.mapMarker}
              onPress={()=>handleNavigationDetail(point.id)}
              coordinate={{ 
             latitude:point.latitude,
             longitude:point.longitude,
              }}
             >
            
            <View style={styles.mapMarkerContainer}>
              <Image style={styles.mapMarkerImage}source={{uri:point.image_url}} />
              <Text style={styles.mapMarkerTitle}>{point.name}</Text>
            </View>
  
            </Marker>
            ))}
          </MapView>
      )}

      

      </View>

      <Tab/>
    </View>

    
    </>

  )
}

export default Points;