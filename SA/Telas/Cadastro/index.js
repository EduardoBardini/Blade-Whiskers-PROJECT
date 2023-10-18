import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Cadastro(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <TelaCadastro/>
            <Button title="Cadastrar" onPress={ () => navigation.navigate('Login')}/>
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

function TelaCadastro(){
    return(
     <View style={{}}>
       <View style={{}}>
        <TextInput placeholder='Email' />
        <TextInput placeholder='Senha'/>
        <TextInput placeholder='Telefone'/> 
         
       </View> 
     </View>
    )
}