import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {COLOR, FONT, SIZE} from '../constants';

const TargetsComponent = ({targets, setChoosenTarget}) => {
  if (!targets)
    return (
      <View
        style={[
          Style.container,
          {justifyContent: 'center', marginTop: SIZE.xLarge},
        ]}>
        <ActivityIndicator size="large" color={COLOR.brown} />
      </View>
    );

  return (
    <View style={Style.container}>
      {/* Container View */}
      <View style={Style.allContainer}>
        {/* Row View for "All" */}
        <Text style={Style.all} onPress={() => setChoosenTarget('All')}>
          All
        </Text>
      </View>
      {/* FlashList View */}
      <View>
        {/* FlashList component */}
        <FlashList
          horizontal={true}
          data={targets} // Data array for FlashList
          renderItem={({item}) => (
            <View style={Style.listContainer}>
              {/* Row View for each item */}
              <Text style={Style.list} onPress={() => setChoosenTarget(item)}>
                {item}
              </Text>
            </View>
          )}
          estimatedItemSize={200} // Estimated item size for optimization
        />
      </View>
    </View>
  );
};

export default TargetsComponent;

const Style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  targetItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  allContainer: {
    marginRight: SIZE.small,
  },
  all: {
    backgroundColor: COLOR.brown,
    color: COLOR.white,
    paddingHorizontal: SIZE.small + 3,
    paddingVertical: SIZE.small - 7,
    borderRadius: SIZE.xLarge,
    fontFamily: FONT.medium,
    fontSize: SIZE.small + 3,
  },
  listContainer: {},
  list: {
    backgroundColor: COLOR.ofWhite,
    color: COLOR.lightGray2,
    paddingHorizontal: SIZE.xLarge - 6,
    paddingVertical: SIZE.small - 4.8,
    borderRadius: SIZE.xLarge,
    marginRight: SIZE.large - 8,
    fontFamily: FONT.medium,
    fontSize: SIZE.small + 1,
  },
});
