import { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AwesomeHierarchyGraph from 'react-native-tree-graph'


var root = {
  name: "Root",
  id: 1,
  hidden: true,
  children: [
    {
      name: "Node 1",
      id: 16,
      no_parent: true,
      children: [
        {
          name: "Sub Node 1",
          id: 3,
          no_parent: true
        },
        {
          name: "Sub Node 2",
          id: 4,
          no_parent: true
        }
      ]
    }
  ]
}

var siblings = [
  {
    source: {
        id: 3,
        name: "Sub Node 1"
    },
    target: {
        id: 4,
        name: "Sub Node 2"
    }
  }
]

export default class GraphTree extends Component {
    render() {
        return (
            <View style={styles.container}>
            <AwesomeHierarchyGraph
              root = {root}
              siblings = {siblings}
            />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });