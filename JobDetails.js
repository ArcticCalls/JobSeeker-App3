import React from 'react';
import {Component, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Footer,
  Button,
  Icon,
  Left,
} from 'native-base';

const JobDetails = ({route, navigation}) => {
  return (
    <Container>
      <Content>
        <Card>
          <CardItem header style={styles.headStyle}>
            <Body>
              <Text style={styles.headerText}>Job Details</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={styles.textStyle}>Job: {route.params.job}</Text>
              <Text style={styles.textStyle}>Salary: {route.params.job}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={styles.textStyle}>
                Description: {route.params.job}
              </Text>
            </Body>
          </CardItem>



        </Card>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: '#EEBA30',
    fontSize: 20,
    alignSelf: 'center',
  },
  headStyle: {
    backgroundColor: '#eee',
  },
  textStyle: {
    marginTop: 20,
  },
});

export default JobDetails;
