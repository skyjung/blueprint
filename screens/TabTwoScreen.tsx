import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { firestore } from '../utils/firebase.js';


export default class TabTwoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vocab: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    firestore.collection("users").doc(DeviceInfo.getUniqueId()).get().then(doc => {
      this.setState({ vocab: doc.data().vocab });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
        // ref={(msgsScrollView) => {
        //     this.msgsScrollView = msgsScrollView;
        // }}
        >
          {this.state.vocab.map((m, i: number) => {
            console.log(m);
            return (
              <View key={i}>
                <Text /*style={styles.original}*/>{m.original}</Text>
                <Text /*style={styles.translated}*/>{m.translated}</Text>
              </View>
            );

          })}
        </ScrollView>

        <Text /*style={styles.translated}*/>{DeviceInfo.getUniqueId()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

});
