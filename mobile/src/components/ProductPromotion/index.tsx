import React, { useEffect, useState } from 'react';
import api from '../../services/api'
import { Feather as Icon } from '@expo/vector-icons'
import { View, FlatList, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';






import styles from './styles';


interface Produto {
  id: number;
  title: string;
  description: string,
  value: number,
  image: string;
}


export default function ProducListSales() {

  const [produtos, setProducts] = useState<Produto[]>([]);
  const [total, setTotal] = useState(0);
  const [refrest, setRefrest] = useState(false);
  const [loading, setLoading] = useState(false);




  const navigation = useNavigation();

  function navigateToCart(id:number) {
    navigation.navigate('Cart',{produto_id: id});//passando parametros para outra pagina
  }



  async function loadProduct() {
    if (loading) {
      return;
    }
    if (total > 0 && produtos.length == total) {
      return;
    }
    setLoading(true);

    const response = await api.get('produto');
    


        setProducts([...produtos, ...response.data]); 
        
        //anexa dois vetores

      
    setLoading(false);



  }
  useEffect(() => {
    loadProduct();
  }, []);



 async function refrestList(){
    setRefrest(true);
    await  loadProduct();

      setRefrest(false);

  }




  if (loading) {
    return (
      <View style={styles.containerLoad}>
        <ActivityIndicator color="#17B443" size="large" />
        <Text style={styles.textLoad}>Aguarde...</Text>
      </View>
    )
  }
  else {
    return (


      <FlatList
        data={produtos}
        horizontal={false}
        directionalLockEnabled={false}
        style={styles.container}
        keyExtractor={product => String(product.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadProduct}
        onRefresh={refrestList}
        refreshing={refrest}
        onEndReachedThreshold={0.1}
        renderItem={({ item: product }) => (

            <View>
            <View style={styles.boxContainer}>
              <View style={styles.produtoContainer}>
              <Text style={styles.title}>Produtos Em Destaque</Text>
                <TouchableOpacity  onPress={()=>navigateToCart(product.id)}>
                  <Image source={{ uri: product.image }} style={styles.image} />

                  <View>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <Text style={styles.description}>{product.value}</Text>
                  </View>
                </TouchableOpacity>
               </View>
              </View>


              <View style={styles.boxContainer}>
              <View style={styles.produtoContainer}>
              <Text style={styles.title}>Produtos Em Promoção</Text>
              
                
                  <View>
                    <Text style={styles.title}>Titulo</Text>
                    <Text style={styles.description}>Descrição </Text>
                    <Text style={styles.description}>valor</Text>
                  </View>
              
               </View>
              </View>

            </View>



        

        )}

      />

    );
  }
}

