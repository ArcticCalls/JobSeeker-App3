import React from 'react';
import {
  View,
  Button,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const jobList = [
  {
    job: 'IT Tech',
    description:
      'Your job scope is to fix and ensure that the company computers are working',
    salary: '$1500',
  },
  {
    job: 'Network Engineer',
    description: 'do networking stuff and mantain server operations',
    salary: '$2500',
  },
  {
    job: 'Front-end-developer',
    description:
      'create visual elements that end users are able to see and interact with.',
    salary: '$1500',
  },
];

const Jobs = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.flatListStyle}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('JobDetails', {
              job: item.job,
              desc: item.description,
              salary: item.salary,
            })
          }>
          <Text>{item.job}</Text>
          <Text>{item.salary}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return <FlatList data={jobList} renderItem={renderItem} />;
};

const styles = StyleSheet.create({
  flatListStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
});

export default Jobs;
