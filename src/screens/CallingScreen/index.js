import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  PermissionsAndroid,
  Alert,
  Platform,
} from 'react-native';
import CallActionBox from '../../components/CallActions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';


function CallingScreen() {
    const [permissionGranted, setPermissionGranted] = useState(false);
    const [callStatus, setCallStatus] = useState('Initializing...');
    const [localVideoStreamId, setLocalVideoStreamId] = useState('');
    const [remoteVideoStreamId, setRemoteVideoStreamId] = useState('');
    const navigation = useNavigation()

    const goBack = ()=>{
        navigation.pop()
    }

    return ( 
        <View style={styles.page}>
        <Pressable onPress={goBack} style={styles.backButton}>
          <Ionicons name="chevron-back" color="white" size={35} />
        </Pressable>
  
        {/* <Voximplant.VideoView
          videoStreamId={remoteVideoStreamId}
          style={styles.remoteVideo}
        />
  
        <Voximplant.VideoView
          videoStreamId={localVideoStreamId}
          style={styles.localVideo}
        />
   */}
        <View style={styles.cameraPreview}>
          <Text style={styles.name}>{"user?.user_display_name"}</Text>
          <Text style={styles.phoneNumber}>{callStatus}</Text>
        </View>
  
        <CallActionBox onHangupPress={()=>{}} />
      </View>
     );
}


const styles = StyleSheet.create({
    page: {
      height: '100%',
      backgroundColor: '#7b4e80',
    },
    cameraPreview: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 10,
      paddingHorizontal: 10,
    },
    localVideo: {
      width: 100,
      height: 150,
      backgroundColor: '#ffff6e',
  
      borderRadius: 10,
  
      position: 'absolute',
      right: 10,
      top: 100,
    },
    remoteVideo: {
      backgroundColor: '#7b4e80',
      borderRadius: 10,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 100,
    },
    name: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      marginTop: 50,
      marginBottom: 15,
    },
    phoneNumber: {
      fontSize: 20,
      color: 'white',
    },
    backButton: {
      position: 'absolute',
      top: 20,
      left: 10,
      zIndex: 10,
    },
  });

export default CallingScreen;