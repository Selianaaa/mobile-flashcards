import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { AddDeskPage, DesksPage } from '../pages';

const BottomNavigatorMenu = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Desks: 'albums-outline',
            'Add Desk': 'add-circle-outline',
          };

          return (
            <Ionicons name={icons[route.name]} color={color} size={size} />
          );
        },
      })}
    >
      <Tab.Screen name="Desks" component={DesksPage} />
      <Tab.Screen name="Add Desk" component={AddDeskPage} />
    </Tab.Navigator>
  );
};

export default BottomNavigatorMenu;
