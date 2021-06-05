import React from 'react';
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SignUp = ({navigation}) => {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text>Sign up Page</Text>
      </View>
      <View style={{marginBottom: 20}}>
        <Text>Username</Text>
        <TextInput maxLength={8} placeholder={'username'} />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          maxLength={40}
          secureTextEntry={true}
          placeholder={'password'}
        />
      </View>
      <View style={{marginBottom: 20}}>
        <Text>Email</Text>
        <TextInput placeholder={'Email'} />
      </View>
      <View style={styles.viewStyle}>
        <TouchableOpacity
          style={styles.buttonContainerStyle}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttontextStyle}>as</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
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

export default SignUp;
