import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InputLogin from '../pages/login/InputLogin';
import InputRegistro from '../pages/registro/InputRegistro';
import Inicio from '../pages/home/Inicio';
import HomePage from '../pages/homepage/HomePage';


const Stack = createStackNavigator();

const MyNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Login" component={InputLogin} />
      <Stack.Screen name="Registro" component={InputRegistro} />
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>  
  );
};

export default MyNavigator;
