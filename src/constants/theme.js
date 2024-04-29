import {PixelRatio} from 'react-native';
const FontScale = PixelRatio.getFontScale();

/* All required themes fonts size and color */
export const SIZE = {
  small: FontScale * 10,
  medium: FontScale * 15,
  large: FontScale * 20,
  xLarge: FontScale * 25,
};

export const COLOR = {
  bg: '#FFF',
  white: '#FFF',
  brown: '#734F2F',
  ofWhite: '#F2E9DD',
  black: '#151515',
  gray: '#A7AEBB',
  lightGray: '#D3D3D3',
  lightGray2: '#808080',
  medGray: '#555555',
  darkGray: '#333333',

  purple: '#5b4dbc',
  orange: '#FF8C00',
  orangeIcon: '#FF4500',
  blueFacebook: '#1877F2',
  iconFacebook: '#3b5998',
  blueTwitter: '#1DA1F2',
  google: '#4285F4',

  yellow: 'yellow',
  yellowDark: '#FFD700',
};

export const FONT = {
  bold: 'InterBold',
  light: 'InterLight',
  medium: 'InterMedium',
  regular: 'InterRegular',
  semiBold: 'InterSemiBold',
};
