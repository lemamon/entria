import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  createFragmentContainer,
  graphql
} from 'react-relay';

import ItemContent from './ItemContent';

const width = Dimensions.get('screen').width;

export class Item extends Component {
  state = {
    item: this.props.data,
    modalVisible: false
  };

  handleshowContent() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {

    const { item, modalVisible } = this.state;

    return (
      <TouchableOpacity onPress={this.handleshowContent.bind(this)}>
        {
          modalVisible ?
            <ItemContent
              item={item}
              visible={modalVisible}
              hideCallBack={this.handleshowContent.bind(this)}
            />
            : null
        }
        <View style={styles.container}>
          <Image source={{ uri: item.image }}
            style={styles.img}
          />

          <View>
            <Text style={styles.title}>
              {item.title}
            </Text>
            <Text style={styles.content} numberOfLines={2}>
              {item.content}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    marginBottom: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  content: {
    fontSize: 12,
    width: width - 90,
  },
  img: {
    margin: 10,
    borderRadius: 30,
    width: 50,
    height: 50,
  },
});     

export default createFragmentContainer(Item, graphql`
  fragment Item_item on post {
    id
    title
    content
    image
  }
`);
