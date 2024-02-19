import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import { Text } from "react-native";

const NucleusWeb = () => {
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: 'http://192.168.116.189:3000' }}
        />
      </View>
    )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
})

export default NucleusWeb;
