import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {colors, parameters} from '../../global/styles';
import {Icon, Button, SocialIcon} from '@rneui/themed';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';

export default function SignInScreen({ navigation }) {
  const [isPasswordInputFocused, setIsPasswordInputFocused] = useState(false);
  const [isEyeClick, setIsEyeClick] = useState(false);

  return (
    <View>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <View style={{paddingHorizontal: 10}}>
          <Text style={styles.signInText}>Sign-In</Text>
        </View>
        <View>
          <Text style={styles.textCenter}>
            Please enter the email and password
          </Text>
          <Text style={styles.textCenter}>registered with your account</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Email" />
        </View>
        <View style={[styles.inputContainer, styles.passwordContainer]}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: 330}}>
            <Animatable.View animation={isPasswordInputFocused ? '' : 'zoomIn'}>
              <Icon
                type="material-community"
                name="lock"
                size={24}
                color={colors.grey3}
              />
            </Animatable.View>

            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Password"
              onFocus={() => setIsPasswordInputFocused(false)}
              onBlur={() => setIsPasswordInputFocused(true)}
            />
          </View>
          <Animatable.View animation={isPasswordInputFocused ? '' : 'zoomIn'}>
            <Icon
              type="material-community"
              name={isEyeClick ? 'eye' : 'eye-off'}
              size={24}
              color={colors.grey3}
              onPress={() =>
                isEyeClick ? setIsEyeClick(false) : setIsEyeClick(true)
              }
            />
          </Animatable.View>
        </View>
        <View style={{marginTop: 15}}>
          <Button
            title="SIGN IN"
            color={colors.buttons}
            buttonStyle={{borderRadius: 10}}
            onPress={() => navigation.navigate('DrawerNavigator')}
          />
        </View>
        <Text
          style={{
            textAlign: 'center',
            textDecorationLine: 'underline',
            marginTop: 15,
          }}>
          Forgot Password?
        </Text>
        <Text style={{textAlign: 'center', marginTop: 15, fontWeight: 'bold'}}>
          OR
        </Text>
        <SocialIcon
          title="Sign in With Facebook"
          type="facebook"
          button
          style={{width: '100%'}}
        />
        <SocialIcon
          title="Sign in With Facebook"
          type="google"
          button
          style={{width: '100%'}}
        />
        <Text style={{marginTop: 10}}>New on XpressFood?</Text>
        <Button
          title="Create an Account"
          type="outline"
          titleStyle={{color: colors.buttons}}
          buttonStyle={{
            textAlign: 'right',
            width: 170,
            marginTop: 10,
            marginLeft: 'auto',
            borderColor: colors.buttons,
            borderWidth: 1.2,
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },

  signInText: {
    color: colors.buttons,
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 20,
  },

  inputContainer: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.grey4,
    marginTop: 20,
  },

  textCenter: {
    textAlign: 'center',
  },

  input: {
    paddingHorizontal: 15,
  },

  emailInput: {
    borderWidth: 1,
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
