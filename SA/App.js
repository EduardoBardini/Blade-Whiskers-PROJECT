import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Menu from './Telas/Menu';
import Cadastro from './Telas/Cadastro';
import Login from './Telas/Login';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BLADE & WHISKERS" component={Cadastro} options={{
          headerShown: true,
        
        }} /> 
        <Stack.Screen name="Menu" component={Menu} options={{
          headerShown: false
        }}/> 
        
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false



        }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}


