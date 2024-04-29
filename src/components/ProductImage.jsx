import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import {COLOR, FONT, SIZE} from '../constants';

import HeartIcon from 'react-native-vector-icons/Feather';
import DolarIcon from 'react-native-vector-icons/Foundation';
import StarIcon from 'react-native-vector-icons/Entypo';

const ProductImage = ({product}) => {
  const {width, height} = useWindowDimensions();
  return (
    <View style={Style.container}>
      <View style={Style.Image_HeartContainer}>
        <View style={Style.ImageContainer}>
          <Image
            source={{uri: product.image}}
            style={[Style.Image, {width: width * 0.4, height: height * 0.2}]}
          />
        </View>
        <View style={Style.heartContainer}>
          <HeartIcon
            name="heart"
            size={SIZE.xLarge * 0.8}
            color={COLOR.brown}
          />
        </View>
      </View>

      <View style={{}}>
        <View style={{}}>
          <Text style={Style.productNameText}>
            {product.name.length > 14
              ? `${product.name.substring(0, 14)}...`
              : product.name}
          </Text>
        </View>

        <View style={Style.StarContainer}>
          <View style={{}}>
            <StarIcon
              name="star"
              size={SIZE.large - 3}
              color={COLOR.yellowDark}
            />
          </View>
          <View style={{marginLeft: SIZE.small - 3}}>
            <Text style={Style.productNameText}>4.5</Text>
          </View>
        </View>
      </View>

      <View style={Style.priceContainer}>
        <View style={{}}>
          <DolarIcon name="dollar" size={SIZE.large} color={COLOR.black} />
        </View>

        <View style={{}}>
          <Text style={Style.priceText}>{product.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductImage;

const Style = StyleSheet.create({
  container: {},
  Image_HeartContainer: {},
  ImageContainer: {},
  Image: {borderRadius: SIZE.small - 3},
  heartContainer: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: COLOR.white,
    marginLeft: SIZE.xLarge * 4.8,
    marginTop: SIZE.small,
    padding: SIZE.small - 5.5,
    borderRadius: SIZE.xLarge,
  },
  productNameText: {
    color: COLOR.lightGray2,
    fontSize: SIZE.small + 3,
    fontFamily: FONT.medium,
  },
  StarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZE.xLarge * -0.7,
    marginLeft: SIZE.xLarge * 4.5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZE.small - 7,
  },
  priceText: {  
    color: COLOR.black,
    fontFamily: FONT.semiBold,
    fontSize: SIZE.small + 3,
  },
});
