import React, { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/*screens */
import Entry from './Screens/Entry';
import Product from './Screens/Product';
import BoldFlavours from './Screens/BoldFlavours';
import BoldFlavoursTwo from './Screens/BoldFlavoursTwo';
import QuizOne from './Screens/QuizOne';
import QuizTwo from "./Screens/QuizTwo";
import QuizThree from "./Screens/QuizThree";
import Raffle from './Screens/Raffle';
import Congrats from "./Screens/Congrats";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entry"> 
        <Stack.Screen name="Entry" options={{headerShown: false}} component={Entry} />
        <Stack.Screen name="Product" options={{headerShown: false}} component={Product} />
        <Stack.Screen name="Bold Flavours" options={{headerShown: false}} component={BoldFlavours} />
        <Stack.Screen name="Bold Flavours Two" options={{headerShown: false}} component={BoldFlavoursTwo} />
        <Stack.Screen name="Quiz One" options={{headerShown: false}} component={QuizOne} />
        <Stack.Screen name="Quiz Two" options={{headerShown: false}} component={QuizTwo} />
        <Stack.Screen name="Quiz Three" options={{headerShown: false}} component={QuizThree} />
        <Stack.Screen name="Raffle" options={{headerShown: false}} component={Raffle} />
        <Stack.Screen name="Congrats" options={{headerShown: false}} component={Congrats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
