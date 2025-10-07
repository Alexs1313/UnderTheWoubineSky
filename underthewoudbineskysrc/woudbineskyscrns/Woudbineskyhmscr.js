import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  Modal,
  Platform,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { woudbinefcts } from '../woudbineskycnsts/woudbinefcts';
import { BlurView } from '@react-native-community/blur';

const { height } = Dimensions.get('window');

const Woudbineskyhmscr = () => {
  const [showWoudbineMenu, setShowWoudbineMenu] = React.useState(false);
  const navigation = useNavigation();
  const [woudbineFact, setWoudbineFact] = useState(null);

  useEffect(() => {
    getRandomWoudbineFact(woudbinefcts);
  }, []);

  const getRandomWoudbineFact = arr => {
    const idx = Math.floor(Math.random() * arr.length);
    setWoudbineFact(arr[idx]);
  };

  const shareWoudbineFact = async () => {
    try {
      await Share.share({
        message: woudbineFact,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View
      style={[
        styles.woudbinecnt,
        showWoudbineMenu &&
          Platform.OS === 'android' && { filter: 'blur(2px)' },
      ]}
    >
      {Platform.OS === 'ios' && (
        <>
          {showWoudbineMenu && (
            <BlurView
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 5,
              }}
              blurType="dark"
              blurAmount={1}
            />
          )}
        </>
      )}
      <ScrollView
        contentContainerStyle={styles.woudbinscrollcnt}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.woudbinewrppr}>
          {Platform.OS === 'ios' ? (
            <Image source={require('../../assets/images/woudbinehmlogo.png')} />
          ) : (
            <Image
              source={require('../../assets/images/woubineandrlogo.png')}
              style={{ width: 73, height: 73, borderRadius: 22 }}
            />
          )}
          <Text style={styles.woudbinelbltxt}>Hello, traveler!</Text>

          <View style={{ flexDirection: 'row', gap: 12 }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Woudbinemarksscr')}
            >
              <Image source={require('../../assets/images/woudbineic.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setShowWoudbineMenu(!showWoudbineMenu)}
            >
              <Image source={require('../../assets/images/woudbineburg.png')} />
            </TouchableOpacity>

            {showWoudbineMenu && (
              <Modal
                transparent={true}
                animationType="fade"
                visible={showWoudbineMenu}
                onRequestClose={() => setShowWoudbineMenu(false)}
              >
                <View
                  style={{
                    position: 'absolute',
                    top: height * 0.09,
                    width: 200,
                    padding: 16,
                    backgroundColor: '#101010',
                    paddingVertical: 22,
                    right: 12,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: '#303030',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 31,
                    }}
                  >
                    <Text style={styles.woudbinepoptxt}>Menu</Text>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setShowWoudbineMenu(false)}
                    >
                      <Image
                        source={require('../../assets/images/woudbinecls.png')}
                      />
                    </TouchableOpacity>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 8,
                      alignItems: 'center',
                      marginBottom: 20,
                    }}
                  >
                    <Image
                      source={require('../../assets/images/woudbineselscr.png')}
                    />
                    <Text style={styles.woudbinepoptxt}>HOME</Text>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      navigation.navigate('Woudbinesvdscr');
                      setShowWoudbineMenu(false);
                    }}
                  >
                    <Text
                      style={[styles.woudbinepopsectxt, { marginBottom: 19 }]}
                    >
                      Saved places
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      navigation.navigate('Woudbineskyinfscr');
                      setShowWoudbineMenu(false);
                    }}
                  >
                    <Text style={styles.woudbinepopsectxt}>Information</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            )}
          </View>
        </View>

        <LinearGradient
          colors={['#E11712', '#7B0D0A']}
          style={{
            marginBottom: 32,
            width: '100%',
            borderRadius: 12,
          }}
        >
          <View style={{ paddingHorizontal: 16, padding: 20 }}>
            <Text style={styles.woudbinefactttl}>Daily facts:</Text>
            <Text style={styles.woudbinefacttxt}>{woudbineFact}</Text>

            <TouchableOpacity
              style={{ left: 10 }}
              activeOpacity={0.7}
              onPress={shareWoudbineFact}
            >
              <Image source={require('../../assets/images/woudbineshr.png')} />
            </TouchableOpacity>

            <Image
              source={require('../../assets/images/woudbinefctim.png')}
              style={{ position: 'absolute', bottom: 0, right: 0 }}
            />
          </View>
        </LinearGradient>

        <ImageBackground
          source={require('../../assets/images/woudbinemp.png')}
          style={styles.woudbinewlccont}
        >
          <LinearGradient
            colors={['#00000000', '#000000']}
            style={{
              flex: 1,
              width: '100%',
              justifyContent: 'flex-end',
            }}
          >
            <View style={styles.woudbinecntwrppr}>
              <Text style={styles.woudbinelbltxt}>Interactive map</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Woudbinemapscr')}
              >
                <Image
                  source={require('../../assets/images/woudbineopn.png')}
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ImageBackground>

        <ImageBackground
          source={require('../../assets/images/woudbineplc.png')}
          style={[styles.woudbinewlccont, { height: 227 }]}
        >
          <LinearGradient
            colors={['#00000000', '#000000']}
            style={{
              flex: 1,
              width: '100%',
              justifyContent: 'flex-end',
            }}
          >
            <View style={styles.woudbinecntwrppr}>
              <Text style={styles.woudbinelbltxt}>Popular places</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Woudbinepopplcsscr')}
              >
                <Image
                  source={require('../../assets/images/woudbineopn.png')}
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  woudbinecnt: { flex: 1, backgroundColor: '#020302' },
  woudbinebtntxt: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Raleway-Bold',
  },
  woudbinscrollcnt: {
    flexGrow: 1,
    paddingTop: height * 0.088,
    paddingHorizontal: 16,
    backgroundColor: '#020302',
  },
  woudbinelbltxt: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Raleway-Black',
  },
  woudbinesectxt: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'Raleway-SemiBold',
    textAlign: 'center',
  },
  woudbinewlccont: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 26,
    overflow: 'hidden',
    borderRadius: 12,
    height: 162,
    borderWidth: 1,
    borderColor: '#1E1E1E',
  },
  woudbinewrppr: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 38,
  },
  woudbinecntwrppr: {
    padding: 16,
    paddingBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  woudbinefactttl: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Raleway-Black',
    marginBottom: 8,
  },
  woudbinefacttxt: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: 'Raleway-Regular',
    width: '65%',
    marginBottom: 30,
  },
  woudbinepoptxt: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Raleway-Black',
  },
  woudbinepopsectxt: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Raleway-SemiBold',
  },
});

export default Woudbineskyhmscr;
