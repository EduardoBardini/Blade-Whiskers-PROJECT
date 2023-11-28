import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Menu from './Telas/Menu';
import TelaCadastro from './Telas/TelaCadastro';
import TelaLogin from './Telas/TelaLogin';
import Agendamento from './Telas/Agendamento';
import TelaPrincipal from './Telas/TelaPrincipal';
import MostrarAgendamento from './Telas/MostrarAgendamentos'
import TelaUser from './Telas/TelaUser';
import TelaConfig from './Telas/TelaConfig';

import { Colors } from 'react-native/Libraries/NewAppScreen';


const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Menu" component={Menu} options={{
          headerShown: false
        }}/> 

        <Stack.Screen name='TelaCadastro' component={TelaCadastro} options={{
          headerShown: false
        }}/>
        
        <Stack.Screen name='TelaLogin' component={TelaLogin} options={{
          headerShown: false
        }}/>
        
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} options={{
          headerShown: false
        }}/>
        
        <Stack.Screen name="Agendamento" component={Agendamento} options={{
          headerShown: false,
        
        }}/>  
        
        <Stack.Screen name="MostrarAgendamento" component={MostrarAgendamento} options={{
          headerShown: false,
        }}/>
        
        <Stack.Screen name="TelaUser" component={TelaUser} options={{
          headerShown: false,
        }}/>

        <Stack.Screen name="TelaConfig" component={TelaConfig} options={{
          headerShown: false,
        }}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}


