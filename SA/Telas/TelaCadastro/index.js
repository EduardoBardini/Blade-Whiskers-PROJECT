import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ImageBackground,Image,TouchableOpacity,TextInput } from "react-native";
import api from '../../src/api';
import { useNavigation } from "@react-navigation/native";



export default function TelaCadastro(){
 const navigation = useNavigation();
 return(
    <View style={styles.container}>
       <BodyCadastro/>
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
  


function BodyCadastro(){
  const navigation = useNavigation();
  const [emailUsuario,setEmailUsuario] = useState();
  const [nomeUsuario, setNomeUsuario] = useState();
  const [senhaUsuario,setSenhaUsuario] = useState();
  
  const cadastrar  = async () => {
    try {
      const regisUserInfo = await api.post('/usuario/cadastro', {
            nome: nomeUsuario,
            email: emailUsuario,
            senha: senhaUsuario,
        });
        if (data.status === 200) {
            console.log(regisUserInfo)
            alert('Cadastro Realizado!');
            alert(regisUserInfo.regisUserInfo.message)
            navigation.navigate('TelaLogin');
        } else {
            console.log(regisUserInfo)
        }
    } catch (err) {
      if (err.response) {
        // A requisição foi feita e o servidor respondeu com um código de status diferente de 2xx
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else if (err.request) {
        // A requisição foi feita, mas não recebeu resposta
        console.log(err.request);
      } else {
        // Algo aconteceu ao configurar a requisição que acionou um erro
        console.log('Error', err.message);
      }
    }
  }
   
     
    return(
      <View style={{width: '100%',height: '100%',justifyContent: 'center',
      alignItems: 'center',backgroundColor: '#1a1a1a'}}>
          
     
             
        <Text style={{color: '#C1272C',fontSize: 45}}>CADASTRO</Text>
      
   
         <Image 
         source={require('../../imagens/novaLogo.jpg')} 
         style={{width: '45%', height: '45%'}}  
         />
        
        <View style={{gap: 25}}>
        
        <TextInput placeholder="Email" style={{fontSize: 23,borderColor: '#C1272C',width: 300,height: 50,borderBottomWidth: 3,color: 'white'}} 
        placeholderTextColor="white" value={emailUsuario} onChangeText={setEmailUsuario} />
        
        <TextInput placeholder="Nome" style={{fontSize: 23,borderColor: '#C1272C',width: 300,height: 50,borderBottomWidth: 3,color: 'white'
        }}placeholderTextColor="white" value={nomeUsuario} onChangeText={setNomeUsuario} />
        
        <TextInput placeholder="Senha" style={{fontSize: 23,borderColor: '#C1272C',width: 300,height: 50,borderBottomWidth: 3,color: 'white'}}
        placeholderTextColor="white" value={senhaUsuario} onChangeText={setSenhaUsuario} />
   
          <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',width: 300,height: 50,backgroundColor: '#C1272C',
           borderRadius: 15,}}>

            <Text style={{color: 'white',fontSize: 23}} 
            onPress={ cadastrar }>Cadastrar-se</Text>

          </TouchableOpacity>

       </View> 
         
      
   
      </View>
    )
}
   













 
