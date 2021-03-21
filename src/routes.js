import React from 'react';
import {View, Image} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Main from './pages/Main';
import Link from './pages/Link';

import Icon from 'react-native-vector-icons/MaterialIcons';
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Main" headerMode="none">
        <Stack.Screen name="Main" component={Main} screenOptions={{ header: false }} />
		<Stack.Screen name="Link" component={Link} screenOptions={{ header: false }} />
    </Stack.Navigator>
  )
}

function CreateRouter(isSigned = true) {
    return (
		<NavigationContainer>
			<Stack.Navigator  headerMode="none">
				<Stack.Screen name="App" component={HomeStack} />
			</Stack.Navigator>
		</NavigationContainer>
   )
};

export default CreateRouter;