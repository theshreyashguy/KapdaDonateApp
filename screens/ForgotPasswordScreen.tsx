// ForgotPasswordScreen.tsx
import React, { useState, version } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'ForgotPassword'>;
};

const ForgotPasswordScreen: React.FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [showResend, setShowResend] = useState(false);
    const [timer, setTimer] = useState(20);
  
    const startTimer = () => {
      setTimer(20);
      setShowResend(true);
  
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            setShowResend(false);
            clearInterval(intervalId);
            return 20; // Reset the timer
          }
          return prevTimer - 1;
        });
      }, 1000);
    };
  
    const handleForgotPassword = () => {

      startTimer();
    };
  
    const handleResend = () => {
        console.log('verify')

    };
  
    return (
      <View style={styles.container}>
        <Image source={require('../resources/login.png')} />
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>Enter your email to reset your password</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={showResend ? handleResend : handleForgotPassword}
        >
          <Text style={styles.buttonText}>{showResend ? `Verify` : 'Send OTP'}</Text>
        </TouchableOpacity>
        <Text style={styles.signInText} onPress={() => navigation.navigate('SignUp')}>
          {showResend ? `Resend  ${timer}` : 'Sign Up'}
        </Text>
        <Text style={styles.signInText1}>Contact Us</Text>
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
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  },
  input: {
    height: 42,
    width: "85%",
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 16,
    marginHorizontal: 25,
    marginBottom: 16,
    paddingLeft: 8,
  },
  button: {
    backgroundColor: '#51BE78',
    padding: 10,
    width:280,
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
  signInText1: {
    color: 'gray',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default ForgotPasswordScreen;
