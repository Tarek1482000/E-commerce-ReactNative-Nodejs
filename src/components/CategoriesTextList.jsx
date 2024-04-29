import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR, FONT, SIZE} from '../constants';

const CategoriesTextList = ({category, setCategory}) => {
  return (
    <View style={Style.container}>
      <View style={Style.textContainer}>
        <Text
          style={[
            Style.text,
            category === 'All' ? Style.pressed : Style.unPressed,
          ]}
          onPress={() => setCategory('All')}>
          All
        </Text>
      </View>

      <View style={Style.textContainer}>
        <Text
          style={[
            Style.text,
            category === 'Jacket' ? Style.pressed : Style.unPressed,
          ]}
          onPress={() => setCategory('Jacket')}>
          Jacket
        </Text>
      </View>

      <View style={Style.textContainer}>
        <Text
          style={[
            Style.text,
            category === 'T-Shirt' ? Style.pressed : Style.unPressed,
          ]}
          onPress={() => setCategory('T-Shirt')}>
          T-Shirt
        </Text>
      </View>

      <View style={Style.textContainer}>
        <Text
          style={[
            Style.text,
            category === 'Pants' ? Style.pressed : Style.unPressed,
          ]}
          onPress={() => setCategory('Pants')}>
          Pants
        </Text>
      </View>
      <View style={Style.textContainer}>
        <Text
          style={[
            Style.text,
            category === 'Shoes' ? Style.pressed : Style.unPressed,
          ]}
          onPress={() => setCategory('Shoes')}>
          Shoes
        </Text>
      </View>
    </View>
  );
};

export default CategoriesTextList;

const Style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginRight: SIZE.small,
  },
  text: {
    color: COLOR.darkGray,
    fontFamily: FONT.medium,
    fontSize: SIZE.medium,
  },
  pressed: {
    backgroundColor: COLOR.brown,
    color: COLOR.white,
    paddingHorizontal: SIZE.small,
    paddingVertical: SIZE.small - 4.8,
    borderRadius: SIZE.small - 3,
  },
  unPressed: {
    backgroundColor: COLOR.white,
    color: COLOR.darkGray,
    paddingHorizontal: SIZE.small,
    paddingVertical: SIZE.small - 4.8,
    borderRadius: SIZE.small - 3,
    borderWidth: 0.2,
    borderColor: COLOR.gray,
  },
});
