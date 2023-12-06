import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ImageBackground,Image,TouchableOpacity,TextInput,ScrollView } from "react-native";






import { useNavigation } from "@react-navigation/native";



export default function TelaUser(){
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
          
        <View><Text style={{color: '#C1272C',fontSize: 40}}>Seu usuario:</Text></View>
        <View><Text style={{color: 'white'}}>Nome:  </Text> 
        <TextInput style={{fontSize: 23,borderColor: '#C1272C',width: 300,height: 50,borderBottomWidth: 3,color: 'white'}}
        placeholderTextColor="white"  />
        </View>
        <View><Text style={{color: 'white'}}>Email: </Text> 
        <TextInput style={{fontSize: 23,borderColor: '#C1272C',width: 300,height: 50,borderBottomWidth: 3,color: 'white'}}
        placeholderTextColor="white" />
        </View>
        <View><Text style={{color: 'white'}}>Senha:  </Text> 
        <TextInput style={{fontSize: 23,borderColor: '#C1272C',width: 300,height: 50,borderBottomWidth: 3,color: 'white'}}
        placeholderTextColor="white"  />
        </View>
     </View>
    )
}




