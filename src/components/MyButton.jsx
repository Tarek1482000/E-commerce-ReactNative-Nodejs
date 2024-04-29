import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {COLOR, FONT, SIZE} from '../constants';

const MyButton = ({Value, onPress}) => {
  const {width, height} = useWindowDimensions();
  return (
    <TouchableWithoutFeedback onPress={onPress && onPress}>
      <Text style={[Styles.text, {width: width * 0.9}]}>{Value}</Text>
    </TouchableWithoutFeedback>
  );
};

export default MyButton;

const Styles = StyleSheet.create({
  text: {
    color: COLOR.white,
    textAlign: 'center',
    backgroundColor: COLOR.brown,
    paddingVertical: SIZE.small,
    fontFamily: FONT.semiBold,
    borderRadius: SIZE.xLarge,
    fontFamily: FONT.medium,
    fontSize: SIZE.medium,
  },
});
