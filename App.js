import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {colors} from './src/global/styles';
import RootNavigator from './src/navigation/RootNavigator';


export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor={colors.buttons} />
      <RootNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
