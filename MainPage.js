import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import LogIn from './LogIn';
import Jobs from './Jobs';
import Home from './Home';
import SignUp from './SignUp';
import JobList from './JobList';
import JobDetails from './JobDetails';

const Stack = createStackNavigator();

const MainPage: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{
            title: 'Job Seeker - Home',
            headerStyle: {
              backgroundColor: '#6200ee',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name={'login'}
          component={LogIn}
          options={{
            title: 'Job Seeker - Login',
            headerStyle: {
              backgroundColor: '#6200ee',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name={'Jobs'}
          component={Jobs}
          options={{
            title: 'Job Seeker - Jobs',
            headerStyle: {
              backgroundColor: '#6200ee',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name={'SignUp'}
          component={SignUp}
          options={{
            title: 'Job Seeker - Sign Up',
            headerStyle: {
              backgroundColor: '#6200ee',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name={'JobAdd'}
          component={JobList}
          options={{
            title: 'Job Seeker - Job Adder',
            headerStyle: {
              backgroundColor: '#6200ee',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name={'JobDetails'}
          component={JobDetails}
          options={{
            title: 'Job Seeker - Job Details',
            headerStyle: {
              backgroundColor: '#6200ee',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  stackStyle: {},
});

export default MainPage;
