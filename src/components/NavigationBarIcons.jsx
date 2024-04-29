import HomeIcon from 'react-native-vector-icons/Entypo';
import CategoryIcon from 'react-native-vector-icons/Ionicons';
import NotInterestIcon from 'react-native-vector-icons/MaterialIcons';
import CartIcon from 'react-native-vector-icons/AntDesign';
import AccountIcon from 'react-native-vector-icons/Feather';
import AccountIcon2 from 'react-native-vector-icons/FontAwesome5';
import {COLOR, SCREEN, SIZE} from '../constants';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {GoTo} from '../navigation/GoTo';
import {useNavigation} from '@react-navigation/native';

export const HomeI = ({Active}) => {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const navHandle = () => navigation.navigate(SCREEN.Home);
  return (
    <View style={Active ? Style.pressed : null}>
      <HomeIcon
        name="home"
        size={SIZE.xLarge + 3}
        color={Active ? COLOR.brown : COLOR.lightGray}
        onPress={navHandle}
      />
    </View>
  );
};

export const CategI = ({Active}) => {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const navHandle = () => navigation.navigate(SCREEN.Category);
  return (
    <View style={Active ? Style.pressed : null}>
      <CategoryIcon
        name={Active ? 'grid' : 'grid-outline'}
        size={SIZE.xLarge + 1}
        color={Active ? COLOR.brown : COLOR.lightGray}
        onPress={navHandle}
      />
    </View>
  );
};

export const NotI = ({Active}) => {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const navHandle = () => navigation.navigate(SCREEN.NotInterest);
  return (
    <View style={Active ? Style.pressed : null}>
      <NotInterestIcon
        name="do-not-disturb-alt"
        size={SIZE.xLarge + 3}
        color={Active ? COLOR.brown : COLOR.lightGray}
        onPress={navHandle}
      />
    </View>
  );
};

export const CartI = ({Active}) => {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const navHandle = () => navigation.navigate(SCREEN.Cart);
  return (
    <View style={Active ? Style.pressed : null}>
      <CartIcon
        name="shoppingcart"
        size={SIZE.xLarge + 3}
        color={Active ? COLOR.brown : COLOR.lightGray}
        onPress={navHandle}
      />
    </View>
  );
};

export const AccountI = ({Active}) => {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const navHandle = () => navigation.navigate(SCREEN.Account);
  return (
    <View style={Active ? Style.pressed : null}>
      {Active ? (
        <AccountIcon2
          name="user-alt"
          size={SIZE.xLarge}
          color={Active ? COLOR.brown : COLOR.lightGray}
          onPress={navHandle}
        />
      ) : (
        <AccountIcon
          name="user"
          size={SIZE.xLarge + 3}
          color={Active ? COLOR.brown : COLOR.lightGray}
          onPress={navHandle}
        />
      )}
    </View>
  );
};

const Style = StyleSheet.create({
  pressed: {
    backgroundColor: COLOR.white,
    borderRadius: SIZE.xLarge,
    padding: SIZE.small - 5,
  },
});
