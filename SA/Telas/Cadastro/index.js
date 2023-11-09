import React, { useState } from "react";
import { View, Text, StyleSheet, Button,TextInput, TouchableOpacity } from "react-native";


import { useNavigation } from "@react-navigation/native";

let usersTable = [];

export default function Cadastro(){
    
    const navigation = useNavigation();

    const [nomeUsuario, setNomeUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');

     const registerSystem = () => {
        let userInfo = {
          nome: nomeUsuario,
          senha: senhaUsuario,
        }

        usersTable.push(userInfo);
    }
   

    return(
        <View style={styles.container}>
            <TelaCadastro/>
            
            <TouchableOpacity>

                <Text style={{fontSize: 27,borderWidth: 2,padding: 12,borderRadius: 25}} onPress={ () => navigation.navigate('Login')}>Cadastrar</Text>

            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'column',
    }
})

function TelaCadastro(){
    return(
     <View>
       <View style={{gap: 35,alignItems: 'center',justifyContent: 'center'}}>
        <Text style={{fontSize: 35}}>CRIE SUA CONTA</Text>
        <TextInput style={{width: 300,height:60,borderWidth: 3,padding: 10,fontSize: 20}} placeholder='Usuario' />
        <TextInput style={{width: 300,height: 60,borderWidth: 3,padding: 10,fontSize: 20}} placeholder='Senha'/>
        <View></View>
         
       </View> 
     </View>
    )
}