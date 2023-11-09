import React from "react";
import { View, Text, StyleSheet, Button,TouchableOpacity,TextInput} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Login(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
        <TelaCadastro/>
        
        <TouchableOpacity>

            <Text style={{fontSize: 27,borderWidth: 2,padding: 12,borderRadius: 25}} onPress={ () => navigation.navigate('Menu')}>Logar-se</Text>

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
 <View style={{}}>
   <View style={{gap: 35,alignItems: 'center',justifyContent: 'center'}}>
    <Text style={{fontSize: 35}}>ENTRAR</Text>
    <TextInput style={{width: 300,height:60,borderWidth: 3,padding: 10,fontSize: 20}} placeholder='Usuario' />
    <TextInput style={{width: 300,height: 60,borderWidth: 3,padding: 10,fontSize: 20}} placeholder='Senha'/>
    <View></View>
     
   </View> 
 </View>
)
}