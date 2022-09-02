import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  SafeAreaView,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import FaceId from '../../Assets/svg/face_id.svg';
import DogBg from '../../Assets/svg/dog.svg';
import RightChevron from '../../Assets/svg/right_chevron_icon.svg';
import HeaderTitle from '../../Components/HeaderTitle';
import LoginStyle from './styles';

const {
  container,
  SecondUIView,
  HeaderText,
  TextStyle,
  input,
  CheckBox_Style,
  ButtonView,
  ButtonText,
} = LoginStyle;

const FacebookIcon = require('../../Assets/icons/facebook.png');
const GoogleIcon = require('../../Assets/icons/google.png');
const AppleIcon = require('../../Assets/icons/apple.png');
const DogImage = require('../../Assets/Images/dog.png');

const isEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isPassword = password => {
  if (password?.length > 7) return true;
  return false;
};

const Login = () => {
  const [state, setState] = useState({
    isCheckbox: false,
    email: '',
    password: '',
  });

  const Validate = () => {
    Keyboard.dismiss();
  };

  const SocialLoginButton = ({onPress, address, customStyle}) => {
    console.log('address', address);
    return (
      <TouchableOpacity style={[customStyle]} onPress={onPress}>
        <Image style={{width: 48, height: 48}} source={address} />
      </TouchableOpacity>
    );
  };

  const ErrorText = ({text}) => {
    return(
        <Text style={{width: '87%', alignSelf:'center', color:'red', fontSize: 14, marginBottom: 8, marginTop: 4}}>{text}</Text>
    );
  }

  return (
    <SafeAreaView style={container}>
      <HeaderTitle TextString="Login" />
      <View style={SecondUIView}>
        <Text style={HeaderText}>Welcome Back</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 16,
          }}>
          <SocialLoginButton onPress={() => {}} address={FacebookIcon} />
          <SocialLoginButton
            customStyle={{marginHorizontal: 16}}
            onPress={() => {}}
            address={AppleIcon}
          />
          <SocialLoginButton onPress={() => {}} address={GoogleIcon} />
        </View>
        <Text style={[TextStyle, {marginTop: 12, marginBottom: 16}]}>
          Login with email address
        </Text>
        <View>
          <TextInput
            value={state.email}
            onChangeText={text => setState(prev => ({...prev, email: text}))}
            placeholderTextColor={'#8B8B8B'}
            placeholder="Email or Phone Number"
            style={[
              input,
              state.email && !isEmail(state.email) && {borderColor: 'red'},
            ]}
          />
          {state.email && !isEmail(state.email) && <ErrorText text={'Email Address is invalid'} />}
        </View>
        <View>
        <TextInput
            secureTextEntry
          value={state.password}
          onChangeText={text => setState(prev => ({...prev, password: text}))}
          placeholderTextColor={'#8B8B8B'}
          placeholder="Password"
          style={[
            input,
            state.password &&
              !isPassword(state.password) && {borderColor: 'red'},
          ]}
        />
        {state.password && !isPassword(state.password) && <ErrorText text={'Password invalid'} />}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 27,
            marginTop: 11,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
            boxType='square'
              style={CheckBox_Style}
              disabled={false}
              value={state.isCheckbox}
              onValueChange={newValue =>
                setState(prev => ({...prev, isCheckbox: newValue}))
              }
            />
            <Text
              style={[
                TextStyle,
                {fontSize: 15, color: '#333', marginLeft: 11},
              ]}>
              Remember Me
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{}}>
                Log In with{' '}
                <Text
                  style={{color: '#1F96F0', fontSize: 16, fontWeight: '700'}}>
                  Face ID
                </Text>
              </Text>
              <FaceId style={{marginLeft: 9}} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 33,
          }}>
          <Text style={{color: '#1F96F0', fontSize: 16, fontWeight: '400'}}>
            Forgot your pasword?
          </Text>
          <RightChevron style={{marginLeft: 11}} />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!state.isCheckbox}
          onPress={() => Validate()}>
          <View
            style={[
              ButtonView,
              !state.isCheckbox && {backgroundColor: '#EDEDED'},
            ]}>
            <Text style={[ButtonText, !state.isCheckbox && {color: '#A5A4A4'}]}>
              Login
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{position: 'absolute', bottom: 0}}>
        <Image
          source={DogImage}
          style={{
            transform: [{scale: 0.9}],
            position: 'absolute',
            bottom: -25,
            resizeMode: 'contain',
            alignSelf: 'center',
            zIndex: 1,
          }}
        />
        <DogBg />
      </View>
    </SafeAreaView>
  );
};
export default Login;
