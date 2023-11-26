// DetailsScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image,StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { EyeIcon,EyeSlashIcon } from 'react-native-heroicons/outline';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  return (
    <>
    <View className='flex-auto content-center justify-center' >
      <Image source={require('../resources/login.png')} />
      <Text className='text-black text-center font-medium mt-3 text-2xl '>Login</Text>
      <Text className='text-slate-400 text-center font-medium mt-1 text-base'>Login with Google</Text>
      <Image source={require('../resources/google.png')} className='self-center m-2'/>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
        <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={isPasswordVisible}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible ? <EyeSlashIcon size={24} color="black" /> : <EyeIcon size={24} color="black" />}
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=>{navigation.push('Password')}}>
      <Text className='text-slate-400 text-center font-medium mt-1  mb-3 text-base'>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>{}}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.push('SignUp')}}>
      <Text className='text-slate-400 text-center font-medium mt-1 text-base'>Sing Up</Text>
      </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 42,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 16,
    marginHorizontal: 25,
    marginBottom: 16,
    paddingLeft: 8,
  },
  passwordContainer: {
    flexDirection: 'row',
    height: 42,
    borderColor: 'gray',
    marginHorizontal: 25,
    borderWidth: 0.5,
    marginBottom: 16,
    borderRadius: 16,
    paddingLeft: 8,
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    borderRadius: 16,

  },
  toggleButton: {
    padding: 10,
  },
  button: {
    backgroundColor: '#51BE78',
    padding: 10,
    borderRadius: 35,
    marginHorizontal: 26,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default LoginScreen;
