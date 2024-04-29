import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Account from '../screens/Account';
import Category from '../screens/Category';
import NotInterest from '../screens/NotInterest';
import {store} from '../redux/Store';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import {StatusBar} from 'react-native';
import {COLOR, SCREEN} from '../constants';

/* Setup Redux and Navigation  Configurations */
const Setup = ({startScreen}) => {
  return (
    <NavigationContainer>
      <StatusBar
        animated={false}
        barStyle={'dark-content'}
        hidden={false}
        backgroundColor={COLOR.bg}
      />
      <Provider store={store}>
        <Stack.Navigator
          initialRouteName={startScreen}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name={SCREEN.SignUp} component={SignUp} />
          <Stack.Screen name={SCREEN.SignIn} component={SignIn} />
          <Stack.Screen name={SCREEN.Home} component={Home} />
          <Stack.Screen name={SCREEN.Category} component={Category} />
          <Stack.Screen name={SCREEN.NotInterest} component={NotInterest} />
          <Stack.Screen name={SCREEN.Cart} component={Cart} />
          <Stack.Screen name={SCREEN.Account} component={Account} />
        </Stack.Navigator>
        <FlashMessage position="top" />
      </Provider>
    </NavigationContainer>
  );
};

export default Setup;
