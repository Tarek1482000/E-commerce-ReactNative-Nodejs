import {View, Text, StyleSheet, ScrollView, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {API, COLOR, FONT, SCREEN, SIZE} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavigationBar from '../components/NavigationBar';

import CategoriesTextList from '../components/CategoriesTextList';
import GoBackBtn from '../components/GoBackBtn';
import ProductCategoryDisplayComponent from '../components/ProductCategoryDisplayComponent';
import {API_GET} from '../utils/API_GET';

const Category = ({route}) => {
  const [category, setCategory] = useState('All');
  const products = route.params.product;

  return (
    <SafeAreaView style={Style.container}>
      {/* Go Back and Header Title */}
      <View
        style={{
          justifyContent: 'center',
        }}>
        <View>
          <GoBackBtn color={COLOR.brown} />
        </View>

        <View
          style={{
            marginTop: SIZE.xLarge * -1.35,
            alignItems: 'center',
          }}>
          <Text style={Style.headerText}>{category}</Text>
        </View>
      </View>

      <View style={Style.categoryList}>
        <CategoriesTextList setCategory={setCategory} category={category} />
      </View>

      <ScrollView
        style={Style.products}
        automaticallyAdjustKeyboardInsets={true}>
        <ProductCategoryDisplayComponent
          category={category}
          products={products}
        />
      </ScrollView>
      <View style={Style.NavigationBarContainer}>
        <NavigationBar place={SCREEN.Category} />
      </View>
    </SafeAreaView>
  );
};

export default Category;

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.bg,
    paddingLeft: SIZE.large - 5,
    paddingTop: StatusBar.currentHeight,
  },
  NavigationBarContainer: {
    marginBottom: SIZE.xLarge * 0.5,
  },
  headerText: {
    color: COLOR.black,
    fontFamily: FONT.bold,
    fontSize: SIZE.large,
  },
  categoryList: {
    marginTop: SIZE.large,
    marginLeft: SIZE.small,
    paddingBottom: SIZE.medium,
  },
  products: {},
});
