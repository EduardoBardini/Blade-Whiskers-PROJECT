import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ImageBackground,Image,TouchableOpacity } from "react-native";






import { useNavigation } from "@react-navigation/native";

export default function Agendamento(){
    const navigation = useNavigation();
  const[verificacaoUser,setVerificacaoUser] = useState(false);
  const [telaMenu,setTelaMenu] = useState(true);

    return(
        <View style={styles.container}>
            <HeaderMenu/>
            <BodyMenu/>
            <TabMenu/>
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

function HeaderMenu(){
    return(
     <View style={{width: '100%',height: '10%',backgroundColor: 'black',
      alignItems: 'center',justifyContent: 'flex-end',paddingBottom: 20,flex: 1}}>
          
        <Text style={{color: 'gold',fontSize: 40}}>BLADE & WHISKERS</Text>
     </View>
    )
}

function BodyMenu(){
 return(
  <View style={{width: '100%',height: '80%',backgroundColor: 'gray',justifyContent: 'center',
  alignItems: 'center',backgroundColor: 'black'}}>
       
       
    <ImageBackground  
    source={require('../../imagens/logo.png')} 
    style={{width: '100%', height: '100%'}}  
    />
    
     <TouchableOpacity style={{borderWidth: 2,borderColor: 'gold',width: 150,height: 50,borderRadius: 15,
        alignItems: 'center',justifyContent: 'center',}}>
         
        <Text style={{color: 'white'}}>LOGIN</Text>
          
     </TouchableOpacity>
            

  </View>
 )
}

function TabMenu(){
   return(
    <View style={{height: '10%',width: '100%',backgroundColor: 'black'
     ,flexDirection: 'row',justifyContent: 'space-around'}}>
        
        {/* { <View><Icon name="user" color="#daa520" style={{fontSize: 65}}/></View>
        <View><Icon name="calendar" color="#daa520" style={{fontSize: 65}}/></View> } */}
         
       
    
        
    </View>
    ) 
}


