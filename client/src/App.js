import React, { Component } from 'react';

import Feed from './components/Feed';
import {
  StyleSheet,
  View,
  FlatList,
  Text
} from 'react-native';
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from './components/Environment'

const AppAllPostQuery = graphql`
  query AppAllPostQuery{
      posts{
        id
        title
        content
        image
      }
  }
`;

export default class App extends Component {

  render() {
    return (
      <QueryRenderer
      environment={environment}
      query={AppAllPostQuery}
      render={
        ({error, props}) => {
          if(error) {
            return <View><Text>{error.message}</Text></View>;            
          } else if(props) {
            return <Feed posts={props}/>;
          }
          return <View><Text>Loadding...</Text></View>;
        }
      }/>
    );
  }
}
