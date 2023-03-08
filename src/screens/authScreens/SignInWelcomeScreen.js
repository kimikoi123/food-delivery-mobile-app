import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import {colors, parameters} from '../../global/styles';
import {Icon, Button, SocialIcon} from '@rneui/themed';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
import {color} from '@rneui/base';

export default function SignInWelcomeScreen({ navigation }) {
  return (
    <View>
      <Text style={{...styles.textStyle, marginTop: 15}}>
        DISCOVER RESTAURANT
      </Text>
      <Text style={styles.textStyle}>IN YOUR AREA</Text>
      <View style={{height: 250, marginTop: 130}}>
        <Swiper autoplay activeDotColor={colors.buttons}>
          <Image
            source={require('../../../assets/imgs/img1.jpg')}
            style={{height: '100%', width: '100%'}}
          />
          <Image
            source={require('../../../assets/imgs/img2.jpg')}
            style={{height: '100%', width: '100%'}}
          />
          <Image
            source={require('../../../assets/imgs/img3.jpg')}
            style={{height: '100%', width: '100%'}}
          />
          <Image
            source={require('../../../assets/imgs/img4.jpg')}
            style={{height: '100%', width: '100%'}}
          />
        </Swiper>
      </View>
      <View style={{marginTop: 80, paddingHorizontal: 20}}>
        <Button
          title="SIGN IN"
          buttonStyle={{borderRadius: 10}}
          color={colors.buttons}
          onPress={() => {
            navigation.navigate('SignInScreen');
          }}
        />
        <Button
          type="outline"
          title="CREATE YOUR ACCOUNT"
          titleStyle={{color: colors.grey1}}
          buttonStyle={{
            marginTop: 15,
            borderRadius: 10,
            borderWidth: 1.25,
            borderColor: colors.buttons,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: colors.buttons,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
