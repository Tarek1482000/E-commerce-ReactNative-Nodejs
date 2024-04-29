import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import {COLOR, FONT, SCREEN, SIZE} from '../constants/index';
import TakeInput from '../components/TakeInput';
import MyButton from '../components/MyButton';
import FacebookIcon from 'react-native-vector-icons/FontAwesome';
import GoogleIcon from '../components/GoogleIcon';
import LoginHandler from '../utils/LoginHandler';

import {setEmailLog, setPassLog} from '../redux/GeneralDataReducer';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const [isLoaded, setLoad] = useState(true);
  const {width, height} = useWindowDimensions();
  const LogHandler = LoginHandler({setLoad});
  const navigation = useNavigation();

  const goSignup = () => {
    navigation.navigate(SCREEN.SignUp);
  };

  if (!isLoaded)
    return (
      <View style={[Style.container, {justifyContent: 'center'}]}>
        <ActivityIndicator size="large" color={COLOR.brown} />
      </View>
    );
  return (
    <SafeAreaView style={Style.container}>
      <ScrollView
        style={{
          paddingTop: StatusBar.currentHeight,
        }}
        automaticallyAdjustKeyboardInsets={true}>
        {/* Sign In Header */}
        <View style={Style.headerTextContainer}>
          <Text style={Style.headerText}>Sign In</Text>
        </View>

        {/* Sign In Inputs */}
        <View style={Style.InputContainer}>
          <View style={{alignItems: 'center', marginTop: SIZE.xLarge * 1.5}}>
            <TakeInput
              inputTextValue="Email"
              placeholder="example@gmail.com"
              SetValue={setEmailLog}
            />
          </View>

          <View style={{alignItems: 'center', marginTop: SIZE.xLarge * 1.5}}>
            <TakeInput
              inputTextValue="Password"
              placeholder="************"
              SetValue={setPassLog}
            />
          </View>
        </View>

        {/* Forgot Password */}
        <View
          style={{
            marginRight: SIZE.xLarge,
            marginTop: SIZE.small,
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              color: COLOR.black,
              fontSize: SIZE.medium - 1.8,
              fontFamily: FONT.semiBold,
            }}>
            Forgot Password
          </Text>
        </View>

        {/* Sign In  Button*/}
        <View
          style={{
            alignItems: 'center',
            marginTop: SIZE.xLarge * 2,
          }}>
          <MyButton Value="Sign In" onPress={LogHandler} />
        </View>

        {/* Or Sign In With: */}
        <View style={{marginTop: SIZE.xLarge * 2}}>
          <Text
            style={{
              color: COLOR.brown,
              textAlign: 'center',
              fontFamily: FONT.medium,
              fontSize: SIZE.medium - 1,
            }}>
            Or Sign In With:
          </Text>
        </View>

        {/* Line ------------- */}
        <View
          style={[
            Style.lineContainer,
            {width: width * 0.75, height: height * 0.001},
          ]}>
          <Text></Text>
        </View>

        {/* Facebook  Google Icons */}
        <View style={[Style.iconsContainer, {width: width * 0.29}]}>
          {/* Facebook */}

          <View style={{flex: 1}}>
            <FacebookIcon
              name="facebook-official"
              color={COLOR.iconFacebook}
              size={SIZE.xLarge}
            />
          </View>

          {/* Google */}
          <View style={{flex: 1}}>
            <GoogleIcon />
          </View>
        </View>

        {/*  Don't Have An Account? */}
        <View style={Style.haveAccountTextContainer}>
          <View style={{}}>
            <Text
              style={{
                color: COLOR.black,
                fontFamily: FONT.semiBold,
                fontSize: SIZE.small + 3.5,
              }}>
              Don't Have An Account?{' '}
            </Text>
          </View>

          <View style={{}}>
            <Text
              onPress={goSignup}
              style={{
                color: COLOR.brown,
                fontFamily: FONT.semiBold,
                textDecorationLine: 'underline',
                fontSize: SIZE.small + 3.5,
              }}>
              Sign Up
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

/* Sign Up Screen Components style */
const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.bg,
  },
  headerTextContainer: {
    marginTop: SIZE.xLarge * 2,
  },
  headerText: {
    fontFamily: FONT.bold,
    fontSize: SIZE.xLarge,
    color: COLOR.black,
    textAlign: 'center',
  },
  InputContainer: {
    flex: 1,
    marginTop: SIZE.xLarge * 2,
  },
  lineContainer: {
    backgroundColor: COLOR.gray,
    marginTop: SIZE.xLarge * 1.16,
    marginLeft: SIZE.xLarge * 2,
  },
  iconsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZE.xLarge * 0.5,
    marginLeft: SIZE.xLarge * 6,
    alignItems: 'center',
  },
  haveAccountTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SIZE.xLarge,
  },
});
