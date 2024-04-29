import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {retrieveData} from '../utils/TokenStorage';
import {API, COLOR, FONT, SCREEN, SIZE} from '../constants';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LocationIcon from '../components/LocationHeader';
import MySeacrhBar from '../components/MySeacrhBar';
import NewColletion from '../components/NewColletion';
import NavigationBar from '../components/NavigationBar';
import TargetsComponent from '../components/target';
import {API_GET} from '../utils/API_GET';
import ProductTargetDisplayCompnent from '../components/ProductTargetDisplayCompnent';

const Home = () => {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState('All');
  const [targets, setTargets] = useState(null);

  const [choosenTarget, setChoosenTarget] = useState('All');
  const restoreToken = retrieveData('LoginToken');
  const ReducerUserId = useSelector(state => state.GeneralData.ReducerUserId);
  const ReducerUserName = useSelector(state => state.GeneralData.ReducerName);
  const ReducerUserCart = useSelector(
    state => state.GeneralData.ReducerUserCart,
  );

  useEffect(() => {
    HomeHandler();

    const fetchData = async () => {
      try {
        const response = await API_GET(API.Get.Products);
        const products = response.products;
        setProduct(products);

        if (products && Array.isArray(products)) {
          const uniqueCategories = [
            ...new Set(products.map(product => product.category)),
          ];
          setCategories(uniqueCategories);

          const uniqueTargets = [
            ...new Set(products.map(product => product.target)),
          ];
          setTargets(uniqueTargets);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // You can handle errors here, like setting an error state
      }
    };

    fetchData(); // Call the fetchData function
  }, [HomeHandler]);

  const HomeHandler = () => {
    if (ReducerUserId === null) {
      navigation.navigate(SCREEN.SignUp);
    }
  };

  return (
    <SafeAreaView style={Style.container}>
      <ScrollView
        style={{
          paddingTop: StatusBar.currentHeight,
        }}
        automaticallyAdjustKeyboardInsets={true}>
        {/* Location */}

        <View style={Style.locationHeaderContainer}>
          <LocationIcon />
        </View>

        <View style={Style.seachBarContainer}>
          <MySeacrhBar />
        </View>

        <View style={{marginTop: SIZE.large}}>
          <NewColletion />
        </View>

        <View style={Style.TargetsContainer}>
          <TargetsComponent
            targets={targets}
            setChoosenTarget={setChoosenTarget}
          />
        </View>

        <View style={Style.ProductsTargetsContainer}>
          <ProductTargetDisplayCompnent
            target={choosenTarget}
            products={product}
          />
        </View>
      </ScrollView>

      <View style={Style.NavigationBarContainer}>
        <NavigationBar place={SCREEN.Home} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.bg,
    paddingLeft: SIZE.large - 5,
  },
  locationHeaderContainer: {},
  seachBarContainer: {
    marginTop: SIZE.xLarge * 1.2,
  },
  NavigationBarContainer: {
    marginBottom: SIZE.xLarge * 0.5,
  },
  TargetsContainer: {
    alignItems: 'center',
    marginTop: SIZE.xLarge * 1.3,
  },
  ProductsTargetsContainer: {},
});
