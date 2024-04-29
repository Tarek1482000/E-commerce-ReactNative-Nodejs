import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import {COLOR, SCREEN, SIZE} from '../constants';
import {GoTo} from '../navigation/GoTo';
import {useNavigation} from '@react-navigation/native';
import {HomeI, AccountI, CartI, CategI, NotI} from './NavigationBarIcons';

const NavigationBar = ({place}) => {
  const {width, height} = useWindowDimensions();
  return (
    <View
      style={[Style.container, {width: width * 0.92, height: height * 0.063}]}>
      <View style={[Style.iconContainer, {marginLeft: SIZE.xLarge * 1.4}]}>
        <HomeI Active={place === SCREEN.Home ? true : false} />
      </View>

      <View style={[Style.iconContainer, {}]}>
        <CategI Active={place === SCREEN.Category ? true : false} />
      </View>

      <View style={[Style.iconContainer, {}]}>
        <NotI Active={place === SCREEN.NotInterest ? true : false} />
      </View>

      <View style={[Style.iconContainer, {}]}>
        <CartI Active={place === SCREEN.Cart ? true : false} />
      </View>
      <View style={[Style.iconContainer, {}]}>
        <AccountI Active={place === SCREEN.Account ? true : false} />
      </View>
    </View>
  );
};

export default NavigationBar;

const Style = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: COLOR.black,
    borderRadius: SIZE.xLarge,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: SIZE.xLarge * 1.5,
  },
});
