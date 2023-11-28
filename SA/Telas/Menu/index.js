import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ImageBackground,Image,TouchableOpacity,Modal } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';




import { useNavigation } from "@react-navigation/native";



export default function Menu(){
  const navigation = useNavigation();
  const[verificacaoUser,setVerificacaoUser] = useState(false);

    return(
        <View style={styles.container}>
            <BodyMenu/>
        </View>
    )





}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredView: {
       
        backgroundColor: 'yellow',
    },
    modalView: {
    
        backgroundColor: 'yellow',

    }
})


function BodyMenu(){
 const navigation = useNavigation();
  return(
   <View style={{width: '100%',height: '100%',justifyContent: 'center',
   alignItems: 'center',backgroundColor: '#1a1a1a'}}>
       
  
          
        <Text style={{color: '#C1272C',fontSize: 45}}>Blade & Whiskers</Text>
   

      <Image 
      source={require('../../imagens/novaLogo.jpg')} 
      style={{width: '45%', height: '45%'}}  
      />
     
     <View style={{gap: 25}}>
        
      <TouchableOpacity style={{borderWidth: 2,borderColor: '#C1272C',width: 150,height: 50,backgroundColor: '#C1272C'
        ,alignItems: 'center',justifyContent: 'center',borderRadius: 255}}>
         
        <Text onPress={() => navigation.navigate("TelaLogin")} style={{color: 'white'}}>LOGIN</Text>
          
      </TouchableOpacity>

      <TouchableOpacity style={{borderWidth: 0,width: 150,height: 50,alignItems: 'center',justifyContent: 'center',borderRadius: 5}}>
         
        <Text onPress={() => navigation.navigate("TelaCadastro")} style={{color: 'white'}}>CRIAR MINHA CONTA</Text>
          
      </TouchableOpacity>
            
    </View> 
      
   

   </View>
  )
}


