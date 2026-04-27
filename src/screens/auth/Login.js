import { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import { userLogin } from '../../app/reducers/auth';
import { ROUTES } from '../../utils';

const Login = () => {
  // GETTER //SETTER
  const [emailAdd, setEmailAdd] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const authState = useSelector(state => state.auth);

  useEffect(() => {
    if (authState.data) {
      navigation.navigate(ROUTES.HOME);
    }

    if (authState.isError) {
      Alert.alert('Login failed', 'Invalid credentials');
    }
  }, [authState.data, authState.isError, navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'black' }}>{emailAdd}</Text>
      <Text style={{ color: 'black' }}>{password}</Text>

      <CustomTextInput
        label={'Email Address'}
        placeholder={'Email Address'}
        value={val => setEmailAdd(val)}
        containerStyle={{
          width: '100%',
        }}
        labelStyle={{
          fontSize: 20,
          fontWeight: '500',
        }}
        textStyle={{
          fontSize: 20,
        }}
      />

      <CustomTextInput
        label={'Password'}
        placeholder={'Password'}
        value={val => setPassword(val)}
        containerStyle={{
          width: '100%',
        }}
        labelStyle={{
          fontSize: 20,
          fontWeight: '500',
        }}
        textStyle={{
          fontSize: 20,
        }}
      />

      <CustomButton
        label={'LOGIN'}
        onPress={() => {
          if (!emailAdd || !password) {
            Alert.alert('Login required', 'Please enter email and password');
            return;
          }


        



          dispatch(userLogin({ username: emailAdd, password }));
        }} />
    </View>
  );
};

export default Login;