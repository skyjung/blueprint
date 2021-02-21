import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import translate from 'google-translate-api';

/* initializing text variables*/
var text1 = 'My favorite childhood toys reflect the places I lived in when I was young. My favorite toy as a child of seven years old was the dried fallen branches in the woods. There was a small one behind our house and it provided endless fun for me and my brothers and sisters. Collected sticks and branches became our castle, our fort, and our play home. Wood pieces gave us play swords, fishing rods, umbrellas, and jungle gyms'
var translated_text = ''
var language_code = 'ko' /* temporarily translates to korean */



export default function TabOneScreen() {
  /*function translate() {
    fetch('https://translation.googleapis.com/language/translate/v2', {
      method: 'POST',
      headers: {
        Origin: 'http://localhost:19006',
        mode: 'no-cors',
        'content-type': 'application/json',
        key: 'AIzaSyAE30G-Hg6lLG-xjoVdK1oijhghV6KIklc',
        q: text1,
        target: language_code
      },
    })
    .then(response => {
      console.log(response)
      translated_text = JSON.stringify(response.json)
    })
    .catch(err => {
      console.log(err)
    })
  }
  // translate()*/
  // translate('Ik spreek Engels', {to: 'en'}).then((res: { text: any; from: { language: { iso: any; }; }; }) => {
  //     console.log(res.text);
  //     //=> I speak English
  //     console.log(res.from.language.iso);
  //     //=> nl
  // }).catch((err: any) => {
  //     console.error(err);
  // });
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {/* <Text>
        Input: {text1}
        Translation: {translated_text}
      </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
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
