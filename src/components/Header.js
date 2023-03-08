import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, parameters} from '../global/styles';
import {Icon} from 'react-native-elements';

export default function Header({navigation}) {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Icon
          type="material-community"
          name="arrow-left"
          size={24}
          color="white"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.text}>MY ACCOUNT</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 20,
    fontSize: 18,
  },
});
