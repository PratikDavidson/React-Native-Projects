import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'
import LoginScreen from './screens/LoginScreen'

const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false,
    gestureEnabled: true, //For Android
    gestureDirection: 'horizontal', //For Android
    ...TransitionPresets.SlideFromRightIOS //For Android
}

const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen' screenOptions={screenOptions} >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )


export default SignedInStack