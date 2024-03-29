
import Splash from './src/Splash';
import * as React from 'react';
import { View, Text } from 'react-native';
import Home from './src/Home';
import Search from './src/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsView from './src/NewsView';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' >
      <Stack.Screen name="Home" component={Home} options={{headerBackVisible:false}} />
      <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
      <Stack.Screen name="Search" component={Search} options={{headerShown:false}} />
      <Stack.Screen name="NewsView" component={NewsView} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;