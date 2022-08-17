/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Contacts from './src/screens/ContactScreen';
import Call from './src/screens/CallScreen';
import CallingScreen from './src/screens/CallingScreen';
import IncomingCall from './src/screens/IncomingCall';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';



  return (
    < >
      <StatusBar barStyle='light-content' />
      {/* <Contacts /> */}
      {/* <Call/> */}
      {/* <CallingScreen/> */}
      {/* <IncomingCall/> */}
      <LoginScreen/>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
