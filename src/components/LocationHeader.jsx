import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import LocationIcon from 'react-native-vector-icons/Ionicons';
import ArrowDownIcon from 'react-native-vector-icons/MaterialIcons';
import BellIcon from 'react-native-vector-icons/Octicons';
import {COLOR, FONT, SIZE} from '../constants';
const Location = () => {
  return (
    <View style={{flex: 1}}>
      {/* Location Word */}
      <View style={{marginLeft: SIZE.small - 5}}>
        <Text
          style={{
            fontFamily: FONT.medium,
            fontSize: SIZE.medium,
            color: COLOR.medGray,
          }}>
          Location
        </Text>
      </View>

      {/* LocationIcons */}
      <View
        style={{
          marginTop: SIZE.small - 5,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={Style.locationIconsContainer}>
          <View>
            <LocationIcon
              name="location"
              color={COLOR.darkGray}
              size={SIZE.xLarge + 3}
            />
          </View>

          {/* Location City */}
          <View style={{marginLeft: SIZE.small - 8}}>
            <Text
              style={{
                fontFamily: FONT.medium,
                fontSize: SIZE.medium,
                color: COLOR.medGray,
              }}>
              Cairo.Egypt
            </Text>
          </View>

          <View>
            <ArrowDownIcon
              name="keyboard-arrow-down"
              color={COLOR.darkGray}
              size={SIZE.xLarge}
            />
          </View>
        </View>

        <View style={{marginRight: SIZE.xLarge}}>
          <BellIcon
            name="bell-fill"
            color={COLOR.darkGray}
            size={SIZE.xLarge}
          />
        </View>
      </View>
    </View>
  );
};

export default Location;

/* Sign Up Screen Components style */
const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.bg,
  },
  locationIconsContainer: {flex: 1, flexDirection: 'row'},
});
