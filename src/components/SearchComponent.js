import {StyleSheet, Text, View, TouchableWithoutFeedback, Modal} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {colors} from '../global/styles';

export default function SearchComponent() {
  return (
    <View>
      <TouchableWithoutFeedback>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.grey5,
            marginTop: 5,
            borderRadius: 10,
            paddingVertical: 5,
          }}>
          <Icon
            type="material-community"
            name="magnify"
            size={32}
            iconStyle={{marginHorizontal: 5}}
          />
          <Text style={{fontSize: 15, color: 'inherit'}}>
            What are you looking for?
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({});
