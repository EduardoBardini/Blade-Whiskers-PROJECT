import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ImageBackground,Image,TouchableOpacity,TextInput } from "react-native";

import { useNavigation } from "@react-navigation/native";


export default function TelaLogin(){
 const navigation = useNavigation();
 return(
    <View style={styles.container}>
       <BodyLogin/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
  

function BodyLogin(){
    const navigation = useNavigation();
    const [emailUsuarioLogin,setEmailUsuarioLogin] = useState();
    const [senhaUsuarioLogin,setSenhaUsuarioLogin] = useState();
     
    return(
      <View style={{width: '100%',height: '100%',justifyContent: 'center',
      alignItems: 'center',backgroundColor: '#1a1a1a'}}>
          
     
             
        <Text style={{color: '#C1272C',fontSize: 45}}>LOGIN</Text>
      
   
         <Image 
         source={require('../../imagens/novaLogo.jpg')} 
         style={{width: '45%', height: '45%'}}  
         />
        
        <View style={{gap: 25}}>
        
        <TextInput placeholder="Email" style={{fontSize: 23,borderColor: '#C1272C',width: 300,height: 50,borderBottomWidth: 3,color: 'white'}} 
        placeholderTextColor="white" value={emailUsuarioLogin} onChangeText={setEmailUsuarioLogin} />
        
        <TextInput placeholder="Senha" style={{fontSize: 23,borderColor: '#C1272C',width: 300,height: 50,borderBottomWidth: 3,color: 'white'}}
        placeholderTextColor="white" value={senhaUsuarioLogin} onChangeText={setSenhaUsuarioLogin} />
   
          <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',width: 300,height: 50,backgroundColor: '#C1272C',
           borderRadius: 15,}}>

            <Text style={{color: 'white',fontSize: 23}} 
            onPress={() => navigation.navigate("TelaPrincipal")}>Logar-se</Text>

          </TouchableOpacity>

       </View> 
         
      
   
      </View>
    )
}
   













 
