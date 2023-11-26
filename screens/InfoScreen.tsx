import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Dimensions, Image, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {ChevronUpIcon as up } from 'react-native-heroicons/outline';

interface CarouselItem {
  id: number;
  title: string; 
  content: string;
  image : string,

}type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Info'>;
};

const InfoScreen: React.FC<Props> = ({ navigation }) => {

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const [button,setbutton] = useState('Next');

  const carouselItems: CarouselItem[] = [
    { id: 1, title:'Wear the Change: Donate with Heart' ,content: 'Welcome to our Oshi foundation’s dedicated app for clothing donations. Every garment you give becomes a beacon of hope for someone in need. ',image: "1" },
    { id: 2,  title:'Threads of Kindness',content: 'Donate your old clothes and be a part of a community that believes in the power of dressing with purpose.',image: "2" },
    { id: 3,  title:'Clothing Care, Community Share',content: 'Connect with a community committed to making a difference, one garment at a time.',image: "3" },
    // Add more items as needed
  ];

  const handleNext = () => {
    if(button == "Lets Start"){
      navigation.replace('Login');
    }
    else{
      const nextIndex = (currentIndex + 1);
      if(nextIndex == carouselItems.length-1){
        setbutton("Lets Start")
        scrollViewRef.current?.scrollTo({ x: screenWidth * nextIndex, animated: true });
      }
      else{  
        setCurrentIndex(nextIndex);
        scrollViewRef.current?.scrollTo({ x: screenWidth * nextIndex, animated: true });
      }
    }
  };

  const { width: screenWidth } = Dimensions.get('window');

  return (
    <View  className='justify-evenly  flex-auto '>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled = {false}
        contentContainerStyle={{ width: screenWidth * carouselItems.length }}
        onScroll={(event) => {
          const offsetX = event.nativeEvent.contentOffset.x;
          const index = Math.round(offsetX / screenWidth);
          setCurrentIndex(index);
        }}
      >
        {carouselItems.map((item) => (
          <View key={item.id} style={[styles.carouselItem, { width: screenWidth }]}>
            <Image source={require(`../resources/1.png`)} />
            <Text className='text-black font-medium mt-3 text-3xl '>{item.title}</Text>
            <Text className=' font-normal mt-3 text-lg ' >{item.content}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.paginationContainer}>
        {carouselItems.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              { backgroundColor: index === currentIndex ? 'green' : 'gray' },
            ]}
          />
        ))}
      </View>
      <TouchableOpacity className='flex-none mb-12  mx-7   rounded-full justify-center bg-green-500 p-3' onPress={handleNext}  >
      <Text className='text-white text-center text-xl ' style = {styles.text}>{button}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:12
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  text:{
    
  }
});

export default InfoScreen;
