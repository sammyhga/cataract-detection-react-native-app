import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Information from './pages/Information/Information.jsx';
import Home from './pages/Home/Home.jsx';
import Description from './pages/Description/Description.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Detector from './pages/Detector/Detector.jsx';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" translucent = {true}/>
    </View>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Description" component={Description} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Information" component={Information} />
      <Stack.Screen name="Detector" component={Detector} />
    </Stack.Navigator> 
    </NavigationContainer>
  );
};
