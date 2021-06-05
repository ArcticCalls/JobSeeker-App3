import React from 'react';
import {View, Button, Text, TextInput, StyleSheet} from 'react-native';

const JobList = ({navigation}) => {
  return (
    <View>
      <Text>Add Jobs Page</Text>
      <TextInput style={styles.inputStyle} placeholder={'enter job Title'} />
      <TextInput style={styles.inputStyle} placeholder={'enter Salary'} />
      <TextInput style={styles.inputStyle} placeholder={'enter job Description'} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20,
  },
});

export default JobList;
