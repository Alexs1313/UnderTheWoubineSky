import { BlurView } from '@react-native-community/blur';
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
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { launchImageLibrary } from 'react-native-image-picker';

const { height } = Dimensions.get('window');

const Woudbineprofilescr = () => {
  const navigation = useNavigation();
  const [showWoudbineMenu, setShowWoudbineMenu] = useState(false);

  const [woudbineName, setWoudbineName] = useState('');
  const [woudbineSurnameName, setWoudbineSurnameName] = useState('');
  const [woudbinePhoto, setWoudbinePhoto] = useState(null);
  const [profileExists, setProfileExists] = useState(false);

  // 📥 Загрузка профиля при старте
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await AsyncStorage.getItem('woudbineProfile');
        if (data) {
          const parsed = JSON.parse(data);
          setWoudbineName(parsed.name);
          setWoudbineSurnameName(parsed.surname);
          setWoudbinePhoto(parsed.photo);
          setProfileExists(true);
        }
      } catch (err) {
        console.log(err);
      }
    };
    loadProfile();
  }, []);

  // 📤 Сохранение профиля
  const saveProfile = async () => {
    if (!woudbineName.trim() || !woudbineSurnameName.trim()) {
      Alert.alert('Please enter your name and surname');
      return;
    }
    const profileData = {
      name: woudbineName.trim(),
      surname: woudbineSurnameName.trim(),
      photo: woudbinePhoto,
    };
    await AsyncStorage.setItem('woudbineProfile', JSON.stringify(profileData));
    setProfileExists(true);
    Alert.alert('Profile saved!');
  };

  // 🧹 Удаление профиля
  const deleteProfile = async () => {
    await AsyncStorage.removeItem('woudbineProfile');
    setWoudbineName('');
    setWoudbineSurnameName('');
    setWoudbinePhoto(null);
    setProfileExists(false);
  };

  // 📸 Выбор фото
  const pickPhoto = async () => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.8 }, response => {
      if (response.didCancel) return;
      if (response.assets && response.assets[0]?.uri) {
        setWoudbinePhoto(response.assets[0].uri);
      }
    });
  };

  // 📲 Шаринг текста
  const shareWoudbineInfo = async () => {
    try {
      await Share.share({
        message:
          Platform.OS === 'ios'
            ? `Under the Woubine Sky introduces you to unique places in Canada...`
            : `Under the Star Sky introduces you to unique places in Canada...`,
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
      {Platform.OS === 'ios' && showWoudbineMenu && (
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="dark"
          blurAmount={1}
        />
      )}

      <ScrollView
        contentContainerStyle={styles.woudbinscrollcnt}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.woudbinewrppr}>
          <Text style={styles.woudbinelbltxt}>Profile</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowWoudbineMenu(!showWoudbineMenu)}
          >
            <Image source={require('../../assets/images/woudbineburg.png')} />
          </TouchableOpacity>
        </View>

        {/* Фото */}
        <TouchableOpacity
          style={styles.woudbipickerwrp}
          activeOpacity={0.7}
          onPress={pickPhoto}
        >
          {woudbinePhoto ? (
            <Image
              source={{ uri: woudbinePhoto }}
              style={{ width: '100%', height: '100%' }}
            />
          ) : (
            <Image
              source={require('../../assets/images/woudbineadd.png')}
              style={{ transform: [{ rotate: '45deg' }] }}
            />
          )}
        </TouchableOpacity>

        {showWoudbineMenu && (
          <Modal
            transparent={true}
            animationType="fade"
            visible={showWoudbineMenu}
          >
            <View
              style={{
                position: 'absolute',
                top: height * 0.085,
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

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.popToTop();
                  setShowWoudbineMenu(false);
                }}
              >
                <Text style={[styles.woudbinepopsectxt, { marginBottom: 19 }]}>
                  Home
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate('Woudbinesvdscr');
                  setShowWoudbineMenu(false);
                }}
              >
                <Text style={styles.woudbinepopsectxt}>Saved places</Text>
              </TouchableOpacity>

              {Platform.OS === 'ios' && (
                <TouchableOpacity
                  style={{ marginTop: 19 }}
                  activeOpacity={0.7}
                  onPress={() => {
                    navigation.navigate('Woudbineskyinfscr');
                    setShowWoudbineMenu(false);
                  }}
                >
                  <Text style={styles.woudbinepopsectxt}>Information</Text>
                </TouchableOpacity>
              )}

              <View
                style={{
                  flexDirection: 'row',
                  gap: 8,
                  alignItems: 'center',
                  marginTop: 20,
                }}
              >
                <Image
                  source={require('../../assets/images/woudbineselscr.png')}
                />
                <Text style={styles.woudbinepoptxt}>PROFILE</Text>
              </View>
            </View>
          </Modal>
        )}
        {/* Если профиль не создан */}
        {!profileExists ? (
          <>
            <TextInput
              placeholder="Enter your name"
              style={styles.woudbineinpt}
              value={woudbineName}
              onChangeText={setWoudbineName}
              placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
            />
            <TextInput
              placeholder="Enter your surname"
              style={styles.woudbineinpt}
              value={woudbineSurnameName}
              onChangeText={setWoudbineSurnameName}
              placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
            />

            <TouchableOpacity activeOpacity={0.8} onPress={saveProfile}>
              <ImageBackground
                source={require('../../assets/images/woudbinebtshr.png')}
                style={styles.woudbinwrp}
              >
                <Text style={styles.woudbinebtntxt}>Done</Text>
              </ImageBackground>
            </TouchableOpacity>
          </>
        ) : (
          // Если профиль существует
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.woudbinefactttl}>
              {woudbineName} {woudbineSurnameName}
            </Text>

            <TouchableOpacity
              onPress={() => setProfileExists(false)}
              style={[styles.woudbinwrp, { marginTop: 20 }]}
              activeOpacity={0.8}
            >
              <Text style={styles.woudbinebtntxt}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={deleteProfile}
              style={[
                styles.woudbinwrp,
                { marginTop: 10, borderColor: '#900' },
              ]}
              activeOpacity={0.8}
            >
              <Text style={[styles.woudbinebtntxt, { color: '#f55' }]}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  woudbinecnt: { flex: 1, backgroundColor: '#020302' },
  woudbinelbltxt: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Raleway-Black',
  },
  woudbinebtntxt: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Raleway-SemiBold',
  },
  woudbinewrppr: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 38,
  },
  woudbinscrollcnt: {
    flexGrow: 1,
    paddingTop: height * 0.088,
    paddingHorizontal: 16,
    backgroundColor: '#020302',
    paddingBottom: 30,
  },
  woudbineinpt: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    paddingHorizontal: 15,
    padding: 20,
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'Raleway-Regular',
    marginBottom: 15,
    width: '100%',
  },
  woudbinwrp: {
    width: 148,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1E1E1E',
  },
  woudbinefactttl: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Raleway-Black',
  },
  woudbipickerwrp: {
    width: 130,
    height: 130,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#303030',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 44,
    overflow: 'hidden',
    backgroundColor: '#1E1E1E',
  },
});

export default Woudbineprofilescr;
