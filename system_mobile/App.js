import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/Customer/LoginCoffee/LoginScreen';
import HeaderLogin from './components/Customer/LoginCoffee/HeaderLogin';
import FooterLogin from './components/Customer/LoginCoffee/FooterLogin';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ header: () => <HeaderLogin /> }} />
        {/* Add more screens here if needed */}
      </Stack.Navigator>
      <FooterLogin />
    </NavigationContainer>
  );
}
