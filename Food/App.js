import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/SearchScreen';
import SearchBar from './src/components/SearchBar';

const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="BusinessSearch" component={SearchBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
