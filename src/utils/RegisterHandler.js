import {useNavigation} from '@react-navigation/native';
import {API, SCREEN} from '../constants';
import {showMessage} from 'react-native-flash-message';
import {useSelector} from 'react-redux';

/* Validate user data input and check if it is not empty or username email  duplicated and if passwords are match*/
/* Save User */
const RegisterHandler = ({setLoad}) => {
  const navigation = useNavigation();
  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const ReducerName = useSelector(state => state.GeneralData.ReducerName);
  const ReducerEmailReg = useSelector(
    state => state.GeneralData.ReducerEmailReg,
  );
  const ReducerPassReg = useSelector(state => state.GeneralData.ReducerPassReg);

  const handleDataReg = async () => {
    // Validate Redux state
    if (!ReducerName) {
      showMessage({
        message: 'Error',
        description: 'Enter Your Name',
      });
      return;
    }
    if (!ReducerEmailReg) {
      showMessage({
        message: 'Error',
        description: 'Enter Your Email',
      });
      return;
    }
    if (!ReducerPassReg) {
      showMessage({
        message: 'Error',
        description: 'Enter Your Password',
      });
      return;
    }

    // Check if email is not in correct format
    if (!emailRegex.test(ReducerEmailReg)) {
      showMessage({
        message: 'Error',
        description: 'Enter a valid email address',
      });
      return;
    }

    setLoad(false);
    const postData = {
      name: ReducerName,
      email: ReducerEmailReg,
      pass: ReducerPassReg,
      phone: 'NULL',
      username: ReducerEmailReg,
      address: {
        street: 'NULL',
        city: 'NULL',
      },
    };

    try {
      const response = await fetch(API.Post.Register, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();

      if (response.ok && data.status === 'success') {
        console.log(data);
        setLoad(true);
        navigation.navigate(SCREEN.SignIn);
      } else if (data.status === 'error' || data.status === 'fail') {
        setLoad(true);
        showMessage({
          message: 'Error',
          description: 'Failed to register check your data',
        });
      }
    } catch (error) {
      setLoad(true);
      showMessage({
        message: 'Error',
        description: 'Unknown',
      });
      console.log(error);
    }
  };

  return handleDataReg;
};

export default RegisterHandler;
