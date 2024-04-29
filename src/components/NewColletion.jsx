import {View, Text, StyleSheet, useWindowDimensions, Image} from 'react-native';
import React from 'react';
import {COLOR, FONT, SIZE} from '../constants';
import NewColletionPic from '../assets/images/shopNewcolection.png';

const Title = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={{width: width}}>
        <Text style={Style.NewCollectionText}>New Collection</Text>
      </View>

      <View style={{width: width}}>
        <Text style={Style.DiscountText}>Discount 50% For</Text>
      </View>

      <View style={{width: width}}>
        <Text style={Style.TransactionText}>The First Transaction</Text>
      </View>
    </View>
  );
};
const ShopButton = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View style={{}}>
      {/* Added alignItems */}
      <Text
        style={[Style.button, {width: width * 0.23, height: height * 0.04}]}>
        Shop Now
      </Text>
    </View>
  );
};
const Dash = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View style={{flex: 1, flexDirection: 'row',alignItems:'center'}}>
      <View
        style={[Style.longDash, {width: width * 0.07, height: height * 0.006}]}>
        <Text></Text>
      </View>
      <View
        style={[
          Style.shortDash,
          {width: width * 0.022, height: height * 0.009},
        ]}>
        <Text></Text>
      </View>

      <View
        style={[
          Style.shortDash,
          {width: width * 0.022, height: height * 0.009},
        ]}>
        <Text></Text>
      </View>
    </View>
  );
};

const NewColletion = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View
      style={[Style.container, {width: width * 0.92, height: height * 0.17}]}>
      {/* text container*/}
      <View style={{flex: 1}}>
        <View style={Style.TextContainer}>
          <Title />
        </View>

        <View style={Style.buttonContainer}>
          <ShopButton />
        </View>
      </View>

      {/* Dash container*/}
      <View style={Style.DashContainer}>
        <Dash />
      </View>

      {/* Image */}
      <View style={Style.imageContainer}>
        <Image
          source={NewColletionPic}
          style={{
            resizeMode: 'contain',
            width: width * 0.6,
            height: height * 0.18,
          }}
        />
      </View>
    </View>
  );
};

export default NewColletion;

const Style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLOR.ofWhite,
    borderRadius: SIZE.small,
    justifyContent: 'space-between',
  },
  imageContainer: {
    marginLeft: SIZE.small * -4.5,
    marginTop: SIZE.xLarge * -0.4,
  },
  NewCollectionText: {
    color: COLOR.black,
    fontFamily: FONT.regular,
    fontSize: SIZE.large - 2,
  },
  DiscountText: {
    color: COLOR.black,
    fontFamily: FONT.medium,
    fontSize: SIZE.small + 3,
  },
  TransactionText: {
    color: COLOR.black,
    fontFamily: FONT.medium,
    fontSize: SIZE.small + 3,
  },
  TextContainer: {
    marginLeft: SIZE.large,
    marginTop: SIZE.small - 2,
  },
  buttonContainer: {marginLeft: SIZE.large, marginTop: SIZE.large},
  button: {
    color: COLOR.white,
    fontFamily: FONT.regular,
    fontSize: SIZE.small + 3,
    backgroundColor: COLOR.brown,
    borderRadius: SIZE.xLarge,
    textAlign: 'center',
    paddingVertical: SIZE.small - 4,
  },
  DashContainer: {marginTop: SIZE.xLarge * 4.6, marginLeft: SIZE.xLarge * 5.5},
  longDash: {backgroundColor: COLOR.brown, borderRadius: SIZE.xLarge},
  shortDash: {
    backgroundColor: COLOR.lightGray,
    borderRadius: SIZE.xLarge,
    marginLeft: SIZE.small - 4,
  },
});
