import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import {
    createFragmentContainer,
    graphql
} from 'react-relay';
import Item  from './Item';
import NavBar from './NavBar';

export class Feed extends Component {
  state = {
    // posts: this.props.posts,
  };

  render() {
    return (
      <View style={styles.home}>
        <NavBar title="Cool List" />
        <FlatList
          keyExtractor={item => item.id}
          style={styles.list}
          data={this.props.posts.posts}
          renderItem={({ item }) => <Item data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,    
  },
  list: {
    backgroundColor: '#F1F4ED',
  },
});


export default createFragmentContainer(Feed, graphql`
    fragment Feed_posts on post{
      id
      title
      content
      image
    }
`);