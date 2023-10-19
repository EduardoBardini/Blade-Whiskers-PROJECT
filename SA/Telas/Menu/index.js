import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


import { useNavigation } from "@react-navigation/native";

export default function Menu(){
    const navigation = useNavigation();

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
     <View style={{width: '100%',height: '20%',backgroundColor: 'black',
      alignItems: 'center',justifyContent: 'center',flex: 1}}>
          
        <Text style={{color: 'gold',fontSize: 35}}>BLADE & WHISKERS</Text>
     </View>
    )
}

function BodyMenu(){
 return(
  <View style={{width: '100%',height: '70%',backgroundColor: 'gray',justifyContent: 'center',
  alignItems: 'center'}}>

    <Text style={{fontSize: 55}}>IMAGEM EM BREVE....</Text>

  </View>
 )
}

function TabMenu(){
   return(
     <View style={{height: '10%',width: '100%',backgroundColor: 'black'
     ,flexDirection: 'row',justifyContent: 'space-around'}}>
        <View><Text style={{color: 'gold',fontSize: 55}}></Text></View>
        <View><Text style={{color: 'gold',fontSize: 55}}></Text></View>
        <View> <Icon name="user" size={50} color="gold"  type="FontAwesome"/></View>
     </View>
    )
}