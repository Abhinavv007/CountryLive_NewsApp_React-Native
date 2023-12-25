import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
const NewsView = ({route}) => {
    const {url} = route.params
  return <WebView source={{ uri: url }} style={{ flex: 1 }} />
}
export default NewsView