import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { achievementsList } from '../underskyd/woudbineachvs';

const ACHIEVEMENTS_STORAGE_KEY = '@achievements';
const { height } = Dimensions.get('window');

const UnderTheSkyMarks = () => {
  const navigation = useNavigation();
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedAchievements = await AsyncStorage.getItem(
          ACHIEVEMENTS_STORAGE_KEY,
        );

        if (storedAchievements) setAchievements(JSON.parse(storedAchievements));
      } catch (error) {
        console.error('error', error);
      }
    };
    loadData();
  }, []);

  const shareWoudbineMark = async selectedMark => {
    try {
      await Share.share({
        message: `${selectedMark.name}`,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.woudbinecnt}>
      <ScrollView
        contentContainerStyle={styles.woudbinscrollcnt}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.woudbinewrppr}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Image source={require('../../assets/images/woudbineback.png')} />
          </TouchableOpacity>
          <Text style={styles.woudbinettl}>Marks</Text>
        </View>

        <LinearGradient
          colors={['#E11712', '#7B0D0A']}
          style={{
            marginBottom: 23,
            width: '100%',
            borderRadius: 12,
          }}
        >
          <View
            style={{
              paddingHorizontal: 16,
              padding: 20,
              height: 162,
              justifyContent: 'center',
            }}
          >
            <Text style={styles.woudbinefacttxt}>
              This is where I keep your bookmarks for places you've visited.
            </Text>

            <Image
              source={require('../../assets/images/woudbinefctim.png')}
              style={{ position: 'absolute', bottom: 0, right: 0 }}
            />
          </View>
        </LinearGradient>
        {achievementsList.map((a, idx) => {
          const achData = achievements.find(ach => ach.id === a.id);
          const unlocked = !!achData;

          return (
            <View
              key={idx}
              style={unlocked ? styles.woudbineunl : styles.woudbinelck}
            >
              <View style={{ width: '65%' }}>
                {unlocked ? (
                  <>
                    <Text style={styles.woudbinedtatxt}>{achData.date}</Text>
                    <Text style={styles.woudbinelbltxt}>{a.name}</Text>
                    <TouchableOpacity
                      style={styles.woudbineshrbtn}
                      activeOpacity={0.7}
                      onPress={() => shareWoudbineMark(a)}
                    >
                      <Image
                        source={require('../../assets/images/woudbineshare.png')}
                      />
                      <Text style={styles.woudbineshrbtntxt}>Share mark</Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <Text style={styles.woudbinelbltxt}>{a.name}</Text>
                )}
              </View>

              <Image source={a.img} style={{ width: 75, height: 75 }} />
            </View>
          );
        })}
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
    fontFamily: 'Raleway-Bold',
    width: '80%',
  },
  woudbinettl: {
    color: '#fff',
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
    gap: 12,
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
  },
  woudbinefacttxt: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Raleway-Medium',
    marginBottom: 30,
    width: '65%',
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
  woudbineunl: {
    width: '100%',
    padding: 16,
    marginBottom: 11,
    backgroundColor: '#1E1E1E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 50,
    borderRadius: 12,
  },
  woudbinelck: {
    width: '100%',
    padding: 19,
    marginBottom: 20,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    opacity: 0.5,
    borderRadius: 12,
  },
  woudbinedtatxt: {
    color: '#E11712',
    fontSize: 13,
    fontFamily: 'Raleway-Bold',
    marginBottom: 8,
  },
  woudbineshrbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    width: 148,
    height: 48,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginTop: 23,
  },
  woudbineshrbtntxt: {
    color: '#7B0D0A',
    fontSize: 16,
    fontFamily: 'Raleway-SemiBold',
  },
});

export default UnderTheSkyMarks;
