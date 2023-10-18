import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Menu(){
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
     <View style={{width: '100%',height: '20%',backgroundColor: 'black',alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{color: 'gold',fontSize: 35}}>BLADE & WHISKERS</Text>
     </View>
    )
}

function BodyMenu(){
 return(
  <View>




  </View>
 )
}