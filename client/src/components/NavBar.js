import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 10,
    padding: 30,
    backgroundColor: '#e47168',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: '#F2F3F3',
  },
});