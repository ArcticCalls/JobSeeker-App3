import React from 'react';
import {View, Button, Text, StyleSheet, Image} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <View style={styles.buttonStyle}>
        <Button title="Login" onPress={() => navigation.navigate('login')} />
      </View>
      <View style={styles.buttonStyle}>
        <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 20,
    justifyContent: 'center',
  },
});

export default Home;
