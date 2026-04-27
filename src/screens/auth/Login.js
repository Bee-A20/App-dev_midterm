import { useState } from 'react';
import { Alert, Text, View } from 'react-native';

import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import { authLogin } from '../../app/api/auth';
import { ROUTES } from '../../utils';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  // GETTER //SETTER
  const [emailAdd, setEmailAdd] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation()

  //   useEffect(() => {}, [emailAdd, password]);

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
        onPress={async () => {
          if (!emailAdd || !password) {
            Alert.alert('Login required', 'Please enter email and password');
            return;
          }


        



          try {
            const result = await authLogin({
              username: emailAdd,
              password,
            });

            Alert.alert('Login successful', 'Welcome back!');
            navigation.navigate(ROUTES.HOME);
            console.log('Login result:', result);
          } catch (error) {
            Alert.alert('Invalid credentials', error.message);
          }
        }} />
    </View>
  );
};

export default Login;