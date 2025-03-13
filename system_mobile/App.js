import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
// Import các màn hình
import HomeScreen from './screen/HomeScreen';
import SearchScreen from './screen/SearchScreen';
import CartScreen from './screen/CartScreen';
import ProfileScreen from './screen/ProfileScreen';
import { StatusBar, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#4CAF50' },
          headerTintColor: '#fff',
          headerRight: () => (
            <TouchableOpacity onPress={() => alert('Bạn có 3 thông báo mới!')}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color="white"
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Cart') {
              iconName = 'cart';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


const style = StyleSheet.create({
  header: {
    backgroundColor: 'green',
  },
});