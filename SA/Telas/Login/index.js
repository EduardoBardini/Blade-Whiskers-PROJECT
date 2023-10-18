import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Login(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <TelaLogin/>
            <Button title="Logar-se" onPress={ () => navigation.navigate('Menu')}/>
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

function TelaLogin(){
    return(
     <View style={{}}>
       <View style={{}}>
        <TextInput placeholder='Email' />
        <TextInput placeholder='Senha'/>
         
       </View> 
     </View>
    )
}