import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'; // Adjust the import path as necessary
import About from './screens/About'; // Make sure to create an About component
import Contact from './screens/Contact'; // Make sure to create an About component
// import BottomTabNavigator from "./navigation/BottomTabNavigator";
import DrawerNavigator from "./navigation/DrawerNavigator";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
