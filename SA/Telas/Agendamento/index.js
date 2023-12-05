import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ImageBackground,Image,TouchableOpacity,TextInput } from "react-native";






import { useNavigation } from "@react-navigation/native";


export default function Agendamento(){
    const navigation = useNavigation();
 

    return(
        <View style={styles.container}>
            <HeaderMenu/>
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
     <View style={{width: '100%',height: '60%',backgroundColor: 'black',
      alignItems: 'center',justifyContent: 'flex-end',paddingBottom: 20,flex: 1,gap: 25}}>
          
        <Text style={{color: '#C1272C',fontSize: 40}}>Agende seu horário</Text>

        <View><Text style={{color: 'white'}}>Ano: </Text><TextInput keyboardType="numeric" style={{fontSize: 23,borderColor: '#C1272C',width: 300,height: 50,borderBottomWidth: 3,color: 'white'}} /></View>
        <View><Text style={{color: 'white'}}>Mês: </Text><TextInput keyboardType="numeric" style={{fontSize: 23,borderColor: '#C1272C',width: 300,height: 50,borderBottomWidth: 3,color: 'white'}} /></View>
        <View><Text style={{color: 'white'}}>Dia: </Text><TextInput keyboardType="numeric" style={{fontSize: 23,borderColor: '#C1272C',width: 300,height: 50,borderBottomWidth: 3,color: 'white'}} /></View>
        <View><Text style={{color: 'white'}}>Horario: </Text><TextInput keyboardType="numeric" style={{fontSize: 23,borderColor: '#C1272C',width: 300,height: 50,borderBottomWidth: 3,color: 'white'}} /></View>
     </View>
    )
}

function TabMenu(){
 return(
  <View style={{width: '100%',height: '40%',backgroundColor: 'gray',justifyContent: 'center',
  alignItems: 'center',backgroundColor: 'black'}}>
       
    
    <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',width: 300,height: 50,backgroundColor: '#C1272C',
        borderRadius: 15,}}>
        
        <Text style={{color: 'white'}}>Realizar Agendamento</Text>
          
    </TouchableOpacity>
            

  </View>
 )
}


