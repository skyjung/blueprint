import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

/* initializing text variables*/
var text1 = 'My favorite childhood toys reflect the places I lived in when I was young. My favorite toy as a child of seven years old was the dried fallen branches in the woods. There was a small one behind our house and it provided endless fun for me and my brothers and sisters. Collected sticks and branches became our castle, our fort, and our play home. Wood pieces gave us play swords, fishing rods, umbrellas, and jungle gyms'
var translated_text = ''
var language_code = 'ko' /* temporarily translates to korean */
const { Translate } = require('@google-cloud/translate').v2;

const projectId = 'blue-8abd1';
const CREDENTIALS = {
  type: "service_account",
  project_id: "blue-8abd1",
  private_key_id: "8bb61cfc2be15f6fe96e85009b3b0c0dc8cd896b",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0D1/fd/9nKpac\nMiSRYhqbP71GeqqMwuyvtRpBfSm4gtMyPPkzp0dYnd8MfU3EFn/iI38PGN6m5Cwd\nW9uivA11SiCPehFtN5lzznTDESOARgm6UB11XbIkxEOrAk6XL0MjCGzcwFzGKg1m\nBFb5GxI3+bc343jdmFTT5Z/3N+3KN7IK6nfXihWMqTRCoNGT4RcZfkU5rBSkvzaC\nrxuNsjLbyspbMjnEHsAiNCzK1qOhgHYDGSDvX9GV/sKXBYeKSdqp3mDe5SHJwmWU\n0by3+wJdBoo0LGSdv29lmYxbH3qB09Ciy25VgSHZQe9f9ogLjU0SaGE+ez8zHYsm\nBsY3WkL1AgMBAAECggEADA0BXiFCWIMVrGOAu12E/qyf5tEmi/WEcL1erKZgqJwn\nirO2UU+Elg45fjT+rj0mlu8dkwLs7TTVLQEtAccIjDfcq62VmqkqHdbh9/ze0uLH\nxjk+wiWgsBbrQ802OaZsnbIefbxpbnZ5tMEH7x5xiYnZdNCbvLz0Dxsi/yE2Sskd\nrlJCdPeFlUBq4Gqo+vTD2MbTYApJ8+h79VpV5HtNfjkmdVL3wosiPeEpp9OyUD8f\naAVGbxA0DUmvMO27TVnqA0bLb3aJM1QlpVjygRwM/9/GOwrvN2KnaQGPPZFPJKd6\nf8c9Zi1QEzKBgxb0oDNFCqptHuDMcTzt/cRirxVdYQKBgQDj7pZKId0No/GG4qMJ\n6LymOnoPlvsl5MzPnq2gbu1saRxVU1yBtkR0wkudYeI5DFIOxfZi6+Bq1QGAE21W\ncIqbZVgdwHZ0+nRm4ZTIxnbiubc5MNObatACL5p03Tl/fbc9K4j5GwPFXgMvrJK4\nke/+2HxPA+iweHTAqNtIeZBW0QKBgQDKO6eu3l4URDv5ZU9mb1KyeycuUYjJlDwl\nAXaOonVmW5H22yQbwEqaEdwxxe36bWi2Bgw3RG5IrUH8eBTis45kwZpT1dFcelLt\no2pon0G3ib1UNuIsKHxXlkMXqNK6JSijlENQNdPaikn2Uzml/Nhi5qz2Kp+/tInY\nDp+aI0165QKBgQDXrQI+4W4nIxM+/CMkFDq13C11pPq+r5JxfwdyAKTeaVNrFbc5\n8fsytEsSf/Ws35Ch9AYhMmsnC6kgxME4AsPVKP9JH723EOqmExxTIyCJhwvtrNr+\nfAKZnuu7Wz21+oIx+ojglgRqdHv1V4l55nW+oqB1sBA1M7XeO6lLGeRPkQKBgBAG\nRBY2JoxCj+IGJhF+1rWvzn38FfOrHEzuXb+Vnenbbah62tScGw00RxdmkKHcU4TA\n2+zxLi/yEp13wmfoRGs1cA4ejjVet/1+imr525I4htkKdEd9ecTS8kQIq5H2ac70\na5UKftv9QzkShSni7B6CGshyvi/JlXaaSglDrNsFAoGAOHR1xCEnF2Efgqy4n3lK\nF/uauRw67UmGAiUOd8LdJQTqQ8LNZ7QxS0hSNy5PhiG1FUPgl19Er970k5ceK6gP\nhqVOZZpdNbSxBt9f9WxkgAM+Nc4FmFNLnbZ6FbGK4qouWtWZbzy0hTSG/HsmAgED\n81oL7H3QsJ4AbvBlEW9iTQM=\n-----END PRIVATE KEY-----\n",
  client_email: "blue-8abd1@appspot.gserviceaccount.com",
  client_id: "111670030522709267784",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/blue-8abd1%40appspot.gserviceaccount.com"
}
const translate = new Translate({ credentials: CREDENTIALS, projectId: projectId });

async function quickStart() {
  // The text to translate
  const text = 'Hello, world!';

  console.log("helloooo");

  // The target language
  const target = 'ru';

  // Translates some text into Russian
  try {
    const [translation] = await translate.translate(text, target);
    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

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

  quickStart();

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text>
        Hello
      </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
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
