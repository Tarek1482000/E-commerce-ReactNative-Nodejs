import {useNavigation} from '@react-navigation/native';
import {API, SCREEN} from '../constants';
import {showMessage} from 'react-native-flash-message';
import {useSelector} from 'react-redux';
import base64 from 'base-64';
import {saveData} from './TokenStorage';

/* Validate user data input and check if it is not empty or username email  duplicated and if passwords are match*/
/* Save User */
const LoginHandler = ({setLoad}) => {
  const navigation = useNavigation();

  const ReducerEmailLog = useSelector(
    state => state.GeneralData.ReducerEmailLog,
  );
  const ReducerPassLog = useSelector(state => state.GeneralData.ReducerPassLog);

  const handleDataLog = async () => {
    // Validate Redux state

    if (!ReducerEmailLog) {
      showMessage({
        message: 'Error',
        description: 'Enter Your Email',
      });
      return;
    }
    if (!ReducerPassLog) {
      showMessage({
        message: 'Error',
        description: 'Enter Your Password',
      });
      return;
    }

    const postData = {
      email: ReducerEmailLog,
      pass: ReducerPassLog,
    };

    setLoad(false);
    try {
      const response = await fetch(API.Post.Login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();

      if (response.ok && data.status === 'success') {
        const token = data.token;
        const decodedTokenString = base64.decode(token.split('.')[1]);
        const decodedToken = JSON.parse(decodedTokenString);

        // const userId = decodedToken;
        const userId = decodedToken.id;
        const cartId = decodedToken.cartId;
        const username = decodedToken.name;

        saveData('LoginToken', {userId, cartId, username});
        setLoad(true);
        navigation.navigate(SCREEN.Home);
      } else if (data.status === 'error' || data.status === 'fail') {
        setLoad(true);
        showMessage({
          message: 'Error',
          description: 'Failed to login check your data',
        });
      }
    } catch (error) {
      setLoad(true);
      showMessage({
        message: 'Error',
        description: 'Unknown',
      });
    }
  };

  return handleDataLog;
};

export default LoginHandler;
