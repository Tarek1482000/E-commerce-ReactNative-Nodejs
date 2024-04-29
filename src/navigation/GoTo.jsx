import {useNavigation} from '@react-navigation/native';

/* Go to any screen by it's name */
export const GoTo = destination => {
  const navigation = useNavigation();
  return navigation.navigate(destination);
};
