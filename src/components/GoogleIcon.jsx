import {View, Text, Image, useWindowDimensions} from 'react-native';
import React from 'react';

import GoogleImage from '../assets/images/GoogleIcon.png';

const GoogleIcon = () => {
  const {width, height} = useWindowDimensions();

  return (
    <Image
      source={GoogleImage}
      style={{width: width * 0.07, height: height * 0.1, resizeMode: 'contain'}}
    />
  );
};

export default GoogleIcon;
