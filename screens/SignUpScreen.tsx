// SignUpScreen.tsx
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet,KeyboardAvoidingView } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { EyeIcon,EyeSlashIcon } from 'react-native-heroicons/outline';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'SignUp'>;
};

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log('Signing up with:', username, email, password);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../resources/SIgnUp.png')} />
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
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
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.signInText} onPress={() => navigation.navigate('Login')}>
        Already have an account? Sign In
      </Text>
    </View>
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
    marginTop: 22,
  },
  input: {
    height: 42,
    width: '86%',
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
    width: '86%',
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
  button: {
    backgroundColor: '#51BE78',
    padding: 10,
    width: '86%',
    borderRadius: 35,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  signInText: {
    color: '#51BE78',
    textAlign: 'center',
    marginTop: 16,
  },
  
  toggleButton: {
    padding: 10,
  },
});

export default SignUpScreen;