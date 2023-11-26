// DetailsScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Splash'>;
};

const SplashScreen: React.FC<Props> = ({ navigation }) => {

  useEffect(()=>{
    setTimeout(() => {
      navigation.replace('Info');
    }, 3000);
  },[])

  return (
    <>
    <View className='flex-auto content-center justify-center' >
      <Image source={require('../resources/splash.png')} />
      <Text className=' text-center text-4xl font-extrabold mt-5'>Oshi Foundation</Text>
    </View>
    </>
  );
};

export default SplashScreen;
