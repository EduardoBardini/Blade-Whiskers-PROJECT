import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ImageBackground,Image } from "react-native";
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
     <View style={{width: '100%',height: '15%',backgroundColor: 'black',
      alignItems: 'center',justifyContent: 'flex-end',paddingBottom: 20,flex: 1}}>
          
        <Text style={{color: 'gold',fontSize: 40}}>BLADE & WHISKERS</Text>
     </View>
    )
}

function BodyMenu(){
 return(
  <View style={{width: '100%',height: '75%',backgroundColor: 'gray',justifyContent: 'center',
  alignItems: 'center'}}>
       
       
    <ImageBackground  
    source={require('../../imagens/imagemOne-menu.jpg')} 
    style={{width: '100%', height: '100%'}}  
    />
    
    

  </View>
 )
}

function TabMenu(){
   return(
     <View style={{height: '10%',width: '100%',backgroundColor: 'black'
     ,flexDirection: 'row',justifyContent: 'space-around'}}>
        {/* <View><Image source={require('../../imagens/')} /></View> */}
        <View><Icon name="user" color="#daa520" style={{fontSize: 65}}/></View>
        <View><Icon name="calendar" color="#daa520" style={{fontSize: 65}}/></View>
        <View><Image style={{height: 65,width: 65}} source={require('../../imagens/arrow-right-from-bracket-solid.svg')}/></View>
     </View>
    )
}


