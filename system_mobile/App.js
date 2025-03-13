import * as React from 'react';
import { View } from 'react-native';
import StackNavigator from './navigator/StackNavigator';

export default function App() {
  return (
    <View style={{ flex: 1 }}>

      <StackNavigator />

    </View>
  );
}
