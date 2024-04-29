import {useNavigation} from '@react-navigation/native';

/* Go Back Function to previous screen */
const useGoBack = () => {
  const navigation = useNavigation();

  return () => {
    {
      navigation.goBack();
    }
  };
};

export default useGoBack;
