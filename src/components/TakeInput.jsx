import {
  View,
  Text,
  TextInput,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR, SIZE} from '../constants';
import EyeIcon from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';

const TakeInput = ({inputTextValue, placeholder, SetValue}) => {
  const {width, height} = useWindowDimensions();
  const dispatch = useDispatch();

  const [hidePass, setHidePass] = useState(true);
  const handlePassView = () => {
    hidePass === true ? setHidePass(false) : setHidePass(true);
  };

  return (
    <View style={Style.container}>
      {/* Text Value Above Of Input Container */}
      <View
        style={[
          Style.InputTextNameContainer,
          inputTextValue === 'Password' ? {marginLeft: SIZE.large - 6} : null,
        ]}>
        <Text style={Style.InputTextName}>{inputTextValue}</Text>
      </View>

      {/* Cases of Input Password  or not*/}
      {inputTextValue === 'Password' ? (
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          {/* In Case of Input Password */}
          <View>
            <TextInput
              style={[Style.InputText, {width: width - SIZE.xLarge * 2}]}
              placeholder={placeholder}
              placeholderTextColor={COLOR.gray}
              autoCorrect={false}
              secureTextEntry={hidePass}
              textContentType="password"
              onChangeText={value => dispatch(SetValue(value))}
            />
          </View>
          {/* Eye Icon */}
          <View
            style={{
              position: 'absolute',
              zIndex: 1,
              marginLeft: SIZE.xLarge * 12,
            }}>
            <EyeIcon
              name={hidePass ? 'eye-off' : 'eye'}
              size={SIZE.xLarge}
              color={COLOR.gray}
              onPress={handlePassView}
            />
          </View>
        </View>
      ) : (
        <View>
          {/* In Case of Input not Password */}
          <TextInput
            style={[Style.InputText, {width: width - SIZE.xLarge * 2}]}
            placeholder={placeholder}
            placeholderTextColor={COLOR.gray}
            textContentType={
              inputTextValue === 'Email' ? 'emailAddress' : 'none'
            }
            onChangeText={value => dispatch(SetValue(value))}
          />
        </View>
      )}
    </View>
  );
};

export default TakeInput;

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  InputTextNameContainer: {
    backgroundColor: COLOR.white,
    position: 'absolute',
    zIndex: 1,
    marginLeft: SIZE.large + 3,
    marginTop: SIZE.small * -1.5,
  },
  InputTextName: {
    color: COLOR.black,
  },
  InputText: {
    paddingVertical: SIZE.small - 2,
    color: COLOR.black,
    borderWidth: 0.5,
    borderColor: COLOR.gray,
    borderRadius: SIZE.xLarge,
    paddingHorizontal: SIZE.small + 2,
  },
});
