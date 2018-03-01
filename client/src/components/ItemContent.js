import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Modal,
  StyleSheet,
  Image
} from 'react-native';
import NavBar from './NavBar';


export default class IntemContent extends Component {

  closeModal() {
    this.props.hideCallBack();
  }

  render() {
    const { item, visible } = this.props;

    return (
      <Modal
        visible={visible}
        animationType={'slide'}
        onRequestClose={() => this.closeModal()}
      >
        <View style={styles.modalContainer}>
          <NavBar title="Cool Item" />
          <Image source={{ uri: item.image }} style={styles.img} />
          
          <View style={styles.innerContainer}>
            <Text style={styles.title}>
              {item.title.toUpperCase()}
            </Text>
            <Text style={styles.content}>
              {item.content}
            </Text>
            <Button
              color="#e47168"
              onPress={() => this.closeModal()}
              title="Close item"
            />
          </View>
        </View>
      </Modal>
    );
  }

}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#F1F4ED',
    alignItems: 'center',
  },
  innerContainer: {
    alignItems: 'center',
  },
  img: {
    margin: 20,
    borderRadius: 160,
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 15,
    margin: 25,
    textAlign: 'justify'
  },
});