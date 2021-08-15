import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { store } from './store';
import { BottomNavigatorMenu } from './components';
import { DeskPage } from './pages';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BottomNavigatorMenu"
            options={{ headerShown: false }}
            component={BottomNavigatorMenu}
          />
          <Stack.Screen
            name="Deck"
            options={{ headerShown: false }}
            component={DeskPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
