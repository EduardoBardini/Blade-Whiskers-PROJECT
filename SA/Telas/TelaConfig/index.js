import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ImageBackground,Image,TouchableOpacity,TextInput,ScrollView } from "react-native";






import { useNavigation } from "@react-navigation/native";



export default function TelaConfig(){
    const navigation = useNavigation();
  

    return(
        <View style={styles.container}>
       
            <HeaderMenu/>
            
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
     <View style={{width: '100%',height: '60%',backgroundColor: 'black',
      alignItems: 'center',justifyContent: 'center',paddingBottom: 20,flex: 1,gap: 25}}>
        
        <View><Text style={{color: 'white',fontSize: 30}}>Configurações</Text></View>
        
        <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',width: 300,height: 50,backgroundColor: '#C1272C',
           borderRadius: 15,}}>

            <Text style={{color: 'white'}}>Excluir Conta</Text>

        </TouchableOpacity>
        
        <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',width: 300,height: 50,backgroundColor: '#C1272C',
           borderRadius: 15,}}>

            <Text style={{color: 'white'}}>Deslogar-se</Text>

        </TouchableOpacity>
     </View>
    )
}


