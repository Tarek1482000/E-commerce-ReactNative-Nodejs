import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {SIZE, COLOR} from '../constants';
import {FlashList} from '@shopify/flash-list';
import ProductImage from './ProductImage';

const ProductCategoryDisplayComponent = ({category, products}) => {
  const {width, height} = useWindowDimensions();
  // Check if products is null or undefined, if so, show loading indicator
  if (!products) {
    return (
      <View style={[{justifyContent: 'center', marginTop: SIZE.xLarge * 8}]}>
        <ActivityIndicator size="large" color={COLOR.brown} />
      </View>
    );
  }

  // Conditional filtering based on the category
  const filteredProducts =
    category === 'All'
      ? products
      : products.filter(product => product.category === category);

  return (
    <View style={Style.container}>
      <FlashList
        // horizontal={true}
        data={filteredProducts} // Data array for FlashList
        renderItem={({item, index}) => {
          // Check if the current index is even and there's a next product available
          const hasNextProduct =
            index % 2 === 0 && index + 1 < filteredProducts.length;
          return (
            <View style={[Style.listContainer, {width: width * 0.85}]}>
              {/* Row View for each item */}
              <View style={Style.rowContainer}>
                {/* Render the first product */}
                {index % 2 === 0 && <ProductImage product={item} />}

                {/* Render the second product if it's available */}
                {hasNextProduct && (
                  <ProductImage product={filteredProducts[index + 1]} />
                )}
              </View>
            </View>
          );
        }}
        keyExtractor={item => item._id.toString()}
        estimatedItemSize={5000} // Estimated item size for optimization
      />
    </View>
  );
};

export default ProductCategoryDisplayComponent;

const Style = StyleSheet.create({
  container: {
    marginTop: SIZE.large,
  },
  listContainer: {
    marginLeft: SIZE.medium,
  },
  rowContainer: {
    flexDirection: 'row', // Ensure items are displayed side by side
    justifyContent: 'space-between', // Distribute items evenly along the row
    marginBottom: SIZE.medium, // Add some margin between rows
  },
});
