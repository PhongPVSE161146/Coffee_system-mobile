import React from 'react';
import { View, StatusBar } from 'react-native';
import StackNavigator from './navigator/StackNavigator';
import { ThemeProvider, useTheme } from './components/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const AppContent = () => {
  const { isDarkMode } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: isDarkMode ? '#121212' : '#FFFFFF' }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <StackNavigator />
    </View>
  );
};
