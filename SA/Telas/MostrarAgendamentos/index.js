import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ImageBackground,Image,TouchableOpacity,TextInput,ScrollView } from "react-native";






import { useNavigation } from "@react-navigation/native";



export default function MostrarAgendamentos(){
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
          
        <View><Text style={{color: '#C1272C',fontSize: 40}}>Agendamentos Realizados</Text></View>
        <View><Text style={{color: 'white'}}>Agendamento: </Text></View>
        <View><Text style={{color: 'white'}}>Ano: </Text></View>
        <View><Text style={{color: 'white'}}>Mês: </Text></View>
        <View><Text style={{color: 'white'}}>Dia: </Text></View>
     </View>
    
    
    )
}

function TabMenu(){
 return(
  <View style={{width: '100%',height: '40%',backgroundColor: 'gray',justifyContent: 'center',
  alignItems: 'center',backgroundColor: 'black'}}>
       
    
    <Text style={{color: 'red'}}>Remover Agendamento: </Text><TextInput keyboardType="numeric" placeholder="Numero" placeholderTextColor={'white'} style={{fontSize: 23,borderColor: '#C1272C',width: 100,height: 50,borderBottomWidth: 3,color: 'white'}}/>
            

  </View>
 )
}


