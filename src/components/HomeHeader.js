import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Icon, withBadge} from '@rneui/themed';
import {colors} from '../global/styles';
import DrawerNavigator from '../navigation/DrawerNavigator';

export default function HomeHeader({ navigation }) {
    const BadgeIcon = withBadge(0)(Icon)


  return (
    <View style={styles.navContainer}>
      <Icon type="material" name="menu" size={35} color="white" onPress={() => navigation.toggleDrawer()} />
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 24}}>
        XpressFood
      </Text>
      <BadgeIcon name="cart" type="material-community" size={35} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: colors.buttons,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});
