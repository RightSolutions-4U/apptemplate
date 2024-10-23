import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ContactStackNavigator } from "./MainStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home1" component={MainStackNavigator} />
      <Tab.Screen name="Contact1" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;