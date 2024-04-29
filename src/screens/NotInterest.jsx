import {View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import {COLOR, SCREEN, SIZE} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavigationBar from '../components/NavigationBar';
const NotInterest = () => {
  return (
    <SafeAreaView style={Style.container}>
      <ScrollView
        style={{
          paddingTop: StatusBar.currentHeight,
        }}
        automaticallyAdjustKeyboardInsets={true}></ScrollView>
      <View style={Style.NavigationBarContainer}>
        <NavigationBar place={SCREEN.NotInterest} />
      </View>
    </SafeAreaView>
  );
};

export default NotInterest;

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.bg,
    paddingLeft: SIZE.large - 5,
  },
  NavigationBarContainer: {

    marginBottom: SIZE.xLarge * 0.5,
  },
});
