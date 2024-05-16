import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Home';

const Drawer = createDrawerNavigator();

export default function Home() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Inicio' component={HomeScreen}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}