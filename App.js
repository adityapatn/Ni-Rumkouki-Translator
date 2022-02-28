import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, View, Alert } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import translateNiRumkouki from './NiRumkoukiScript';
import * as Clipboard from 'expo-clipboard';

export default function App() {
  const [translatedText, setTranslatedText] = useState("English/Ni Rumkouki Text will appear here")
  const [preTranslatedText, setPreTranslatedText] = useState("default value")

  const copyToClipboard = () => {
    Clipboard.setString(translatedText);
  };

  const translate = () => {
    setTranslatedText(translateNiRumkouki(preTranslatedText));
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text
              style={styles.text}
              h3
            >
              Ni Rumkouki Translator
            </Text>
            <Button
              title={'Take a Picture of Text'}
              containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              icon={{
                name: 'camera',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconContainerStyle={{ marginRight: 10 }}
            />
            <Input 
              multiline={true}
              numberOfLines={8}
              placeholder="Enter Ni Rumkouki/English Text"
              containerStyle={{ height: 200, textAlignVertical: 'top', borderWidth: 1, width: 300, }}
              inputContainerStyle={{borderBottomWidth:0, }}
              value={preTranslatedText}
              onChangeText={setPreTranslatedText}
            />
            <Button
              onPress = {translate}
              title={'Translate Text'}
              containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              icon={{
                name: 'angle-double-down',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconContainerStyle={{ marginRight: 10 }}
            />
            <Text
              placeholder="English/Ni Rumkouki Text will appear here"
              style={{ height: 200, textAlignVertical: 'top', borderWidth: 1, width: 300, fontSize: 18, padding: 5}}
              inputContainerStyle={{borderBottomWidth:0}}
            >{translatedText}</Text>
            <Button
              onPress = {copyToClipboard}
              title={'Copy Text'}
              containerStyle={{
                width: 300,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              icon={{
                name: 'copy',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconContainerStyle={{ marginRight: 10 }}
            />
            <StatusBar style="auto" />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    textAlign: 'center',
    padding: 5,
  },
});

