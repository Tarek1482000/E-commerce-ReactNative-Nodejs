import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUserId, setUserCart, setUserName} from '../redux/GeneralDataReducer';
import {useDispatch} from 'react-redux';

export const saveData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value); // Serialize the value into a string
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log('Error saving data: ', error);
  }
};

// Retrieve data
export const retrieveData = async key => {
  const dispatch = useDispatch();
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      const {userId, cartId, username} = JSON.parse(value);
      // console.log('Retrieved data:', {userId, cartId, username});
      if (userId && cartId) {
        dispatch(setUserId(userId));
        dispatch(setUserName(username));
        dispatch(setUserCart(cartId));
      }
    } else {
      console.log('No data found for key:', key);
    }
  } catch (error) {
    console.log('Error retrieving data: ', error);
  }
};

export const removeData = async key => {
  try {
    const jsonValue = JSON.stringify('');
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log('Error saving data: ', error);
  }
};
