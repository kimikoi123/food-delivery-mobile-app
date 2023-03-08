import React from 'react';
import {View, Text, StyleSheet, Touchable} from 'react-native';
import SearchComponent from '../components/SearchComponent';

export default function SearchScreen() {
  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <SearchComponent />
    </View>
  );
}
