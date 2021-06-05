import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const userData = [
  {
    username: 'user1',
    password: '123',
  },
];

const LogIn = ({navigation}) => {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Image
          style={styles.imageStyle}
          source={require('./Images/userProfile.png')}
        />
      </View>
      <Text style={styles.centerStyle}>Login Page</Text>
      <View style={styles.loginStyle}>
        <TextInput maxLength={8} placeholder={'username'} />
        <TextInput
          maxLength={40}
          secureTextEntry={true}
          placeholder={'Password'}
        />
      </View>
      <View style={styles.viewStyle}>
        <TouchableOpacity
          style={styles.buttonContainerStyle}
          onPress={() => navigation.navigate('Jobs')}>
          <Text style={styles.buttontextStyle}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 75,
    height: 75,
  },
  centerStyle: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginStyle: {
    alignItems: 'center',
    marginTop: 20,
  },
  buttonContainerStyle: {
    width: 150,
    borderRadius: 10,
    backgroundColor: '#5059c8',
  },
  buttontextStyle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#eee',
  },
});

export default LogIn;
