import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const WelcomeUnderTheWoubineSky = () => {
  const [currWoudbineIdx, setCurrWoudbineIdx] = React.useState(0);
  const navigation = useNavigation();
  const topAnim = useRef(new Animated.Value(-100)).current;
  const topScale = useRef(new Animated.Value(0.7)).current;
  const leftAnim = useRef(new Animated.Value(-300)).current;
  const rightAnim = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    topAnim.setValue(-200);
    topScale.setValue(0.7);
    leftAnim.setValue(-300);
    rightAnim.setValue(300);

    Animated.parallel([
      Animated.timing(topAnim, {
        toValue: 0,
        duration: 1800,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(topScale, {
        toValue: 1,
        duration: 1800,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(leftAnim, {
        toValue: 0,
        duration: 1200,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(rightAnim, {
        toValue: 0,
        duration: 1200,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, [currWoudbineIdx]);

  return (
    <ImageBackground
      source={require('../../assets/images/woudbineonbg.png')}
      style={{ flex: 1 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 20,
        }}
      >
        <Animated.View
          style={[
            styles.box,
            {
              transform: [{ translateY: topAnim }, { scale: topScale }],
            },
          ]}
        >
          {currWoudbineIdx === 0 ? (
            <Image
              source={require('../../assets/images/woudbineonim1.png')}
              style={{ top: 20 }}
            />
          ) : currWoudbineIdx === 1 ? (
            <Image
              source={require('../../assets/images/woudbineonim2.png')}
              style={{ marginBottom: 40 }}
            />
          ) : (
            <View style={{}}>
              <Image
                source={require('../../assets/images/woudbineonim3.png')}
                style={{ left: -80, top: -20 }}
              />
              <Image
                source={require('../../assets/images/woudbineonim4.png')}
                style={{ top: 20, right: -60, position: 'absolute' }}
              />
              <Image
                source={require('../../assets/images/woudbineonim5.png')}
                style={{ top: -20, left: -30 }}
              />
            </View>
          )}
        </Animated.View>

        <Animated.View
          style={[
            styles.box,
            {
              transform: [{ translateX: leftAnim }],
            },
          ]}
        >
          <View style={styles.woudbinewlccont}>
            <Text style={styles.woudbinelbltxt}>
              {currWoudbineIdx === 0
                ? 'Welcome'
                : currWoudbineIdx === 1
                ? 'About places'
                : 'Uniqueness'}
            </Text>
            <Text style={styles.woudbinesectxt}>
              {currWoudbineIdx === 0
                ? 'Hello! I am Celine. Under my sky, the stories of cities and corners that tourists rarely see are revealed. Together we will look into where the real magic of travel is.'
                : currWoudbineIdx === 1
                ? 'I will show you places that are not in guidebooks. Photos, coordinates and my own legends will help you feel the spirit of each street or landscape'
                : Platform.OS === 'ios'
                ? 'In our journey, you will collect memories - imprints of places in the form of stamps that will remain only in your collection. Each journey is your own trace under the Woubine sky.'
                : 'In our journey, you will collect memories - imprints of places in the form of stamps that will remain only in your collection. Each journey is your own trace under the Star sky.'}
            </Text>
          </View>
        </Animated.View>
        <Animated.View
          style={[
            styles.box,
            {
              transform: [{ translateX: rightAnim }],
            },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              if (currWoudbineIdx < 2) {
                setCurrWoudbineIdx(currWoudbineIdx + 1);
              } else {
                navigation.replace('HomeUnderTheWoubineSky');
              }
            }}
          >
            <ImageBackground
              source={require('../../assets/images/woudbinebtn.png')}
              style={{
                width: 205,
                height: 73,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={styles.woudbinebtntxt}>
                {currWoudbineIdx === 0
                  ? 'Continue'
                  : currWoudbineIdx === 1
                  ? 'Go next'
                  : 'Start now'}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  woudbinebtntxt: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Raleway-Bold',
  },
  woudbinelbltxt: {
    color: '#E11712',
    fontSize: 24,
    fontFamily: 'Raleway-Black',
  },
  woudbinesectxt: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'Raleway-SemiBold',
    textAlign: 'center',
  },
  woudbinewlccont: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 23,
    gap: 23,
    backgroundColor: '#101010',
    padding: 26,
    paddingHorizontal: 22,
    borderRadius: 12,
  },
});

export default WelcomeUnderTheWoubineSky;
