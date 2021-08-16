import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { store } from './store';
import { BottomNavigatorMenu } from './components';
import { DeskPage, AddCardPage, QuizPage } from './pages';

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
          <Stack.Screen name="Desk" component={DeskPage} />
          <Stack.Screen name="Add Card" component={AddCardPage} />
          <Stack.Screen name="Quiz" component={QuizPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
