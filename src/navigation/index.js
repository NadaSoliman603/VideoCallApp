import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import React from 'react'
import Contacts from '../screens/ContactScreen';
import CallingScreen from '../screens/CallingScreen';
import CallScreen from '../screens/CallScreen';
import IncomingCall from '../screens/IncomingCall';


const Stack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Contacts" component={Contacts} />

                <Stack.Group screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="login" component={LoginScreen} />
                    <Stack.Screen name="Calling" component={CallingScreen} />
                    <Stack.Screen name='Call' component={CallScreen} />
                    <Stack.Screen name="IncomingCall" component={IncomingCall} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;