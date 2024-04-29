import {View, Text} from 'react-native';
import React from 'react';
import BackIcon from 'react-native-vector-icons/Ionicons';
import {COLOR, SIZE} from '../constants';
import useGoBack from '../navigation/useGoBack';
const GoBackBtn = ({color}) => {
  const GoBckHandle = useGoBack();
  return (
    <View>
      <BackIcon
        name="arrow-back-circle-outline"
        size={SIZE.xLarge * 1.9}
        color={color}
        onPress={GoBckHandle}
      />
    </View>
  );
};

export default GoBackBtn;
