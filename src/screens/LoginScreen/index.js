import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';


function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation()

    const signIn = ()=>{
        navigation.reset({
            index:0,
            routes:[
                {
                    name:"Contacts"
                }
            ]
        })
    }
    return ( 
        <View style={styles.page}>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="username"
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="password"
          style={styles.input}
          secureTextEntry
        />
  
        <Pressable style={styles.button} onPress={signIn}>
          <Text>Sign in</Text>
        </Pressable>
      </View>
     );
}

const styles = StyleSheet.create({
    page: {
      padding: 10,
      alignItems: 'stretch',
      flex: 1,
      justifyContent: 'center',
    },
    input: {
      backgroundColor: 'white',
      padding: 10,
      marginVertical: 10,
      borderRadius: 5,
    },
    button: {
      backgroundColor: 'dodgerblue',
      padding: 10,
      marginVertical: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
  });

export default LoginScreen;