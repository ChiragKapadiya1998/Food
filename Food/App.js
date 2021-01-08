import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/SearchScreen';
import ReasultShowScreen from './src/ResultShowScreen'

const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="BusinessSearch" component={SearchScreen} />
         <Stack.Screen name="ReasultShowScreen" component={ReasultShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
