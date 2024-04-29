import {
  View,
  Text,
  TextInput,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import EqualizerIcon from 'react-native-vector-icons/SimpleLineIcons';
import SearchIcon from 'react-native-vector-icons/Feather';
import {COLOR, SIZE} from '../constants';

const MySeacrhBar = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View style={Style.container}>
      <View style={Style.searchContainer}>
        <View style={Style.searchIconContainer}>
          <SearchIcon name="search" size={SIZE.xLarge} color={COLOR.medGray} />
        </View>

        <View style={[Style.textInputContainer]}>
          <TextInput
            style={[
              Style.textInput,
              {
                width: width * 0.78,
                height: height * 0.048,
              },
            ]}
            placeholder="search"
            placeholderTextColor={COLOR.gray}
            backgroundColor={COLOR.white}
          />
        </View>
      </View>

      <View style={Style.equalizerContainer}>
        <EqualizerIcon name="equalizer" size={SIZE.large} color={COLOR.white} />
      </View>
    </View>
  );
};

export default MySeacrhBar;
/* Sign Up Screen Components style */
const Style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIconContainer: {
    position: 'absolute',
    zIndex: 1,
    paddingLeft: SIZE.small + 5,
  },
  textInputContainer: {},
  textInput: {
    borderColor: COLOR.gray,
    borderWidth: 0.6,
    color: COLOR.black,
    borderRadius: SIZE.xLarge,
    paddingLeft: SIZE.xLarge * 1.8,
  },
  equalizerContainer: {
    transform: [{rotate: '90deg'}],
    backgroundColor: COLOR.brown,
    padding: SIZE.small,
    borderRadius: SIZE.xLarge,
    marginRight: SIZE.small + 5,
  },
});
