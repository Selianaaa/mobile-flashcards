import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { AddDeckPage, DecksPage } from '../pages';

const BottomNavigatorMenu = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Decks: 'albums-outline',
            'Add Deck': 'add-circle-outline',
          };

          return (
            <Ionicons name={icons[route.name]} color={color} size={size} />
          );
        },
      })}
    >
      <Tab.Screen name="Decks" component={DecksPage} />
      <Tab.Screen name="Add Deck" component={AddDeckPage} />
    </Tab.Navigator>
  );
};

export default BottomNavigatorMenu;
