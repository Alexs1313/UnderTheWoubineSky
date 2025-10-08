import React, { useCallback, useMemo, useState } from 'react';
import {
  Dimensions,
  Image,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { woudbinelocs } from '../woudbineskycnsts/woudbinelocs';
import Woudbinelistcard from '../woudbineskycmpnts/Woudbinelistcard';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useStore } from '../woudbineskystrg/woudbinecntx';
import { BlurView } from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';
const { height } = Dimensions.get('window');

const Woudbineskyloclist = ({ selectedScreen }) => {
  const navigation = useNavigation();
  const { getWoudbineLocation, woudbineSavedList } = useStore();
  const [showWoudbineMenu, setShowWoudbineMenu] = React.useState(false);
  const [woudbineInptVavue, setWoudbineInptVavue] = useState('');

  useFocusEffect(
    useCallback(() => {
      getWoudbineLocation();
    }, []),
  );

  let placeslist;

  selectedScreen === 'savedScreen'
    ? (placeslist = woudbineSavedList)
    : (placeslist = woudbinelocs);

  const filteredPlaces = useMemo(() => {
    const query = woudbineInptVavue.trim().toLowerCase();
    if (!query) return placeslist;
    return placeslist.filter(loc =>
      loc.woudbinettl?.toLowerCase().includes(query),
    );
  }, [woudbineInptVavue, placeslist]);

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
        {selectedScreen === 'savedScreen' && (
          <View
            style={[styles.woudbinewrppr, { justifyContent: 'space-between' }]}
          >
            <Text style={styles.woudbinelbltxt}>Saved places</Text>
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
                      navigation.popToTop(''), setShowWoudbineMenu(false);
                    }}
                    style={{
                      marginBottom: 20,
                    }}
                  >
                    <Text style={styles.woudbinepopsectxt}>Home</Text>
                  </TouchableOpacity>
                  <View>
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
                      <Text style={[styles.woudbinepoptxt, {}]}>
                        SAVED PLACES
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                      navigation.navigate('Woudbineskyinfscr'),
                        setShowWoudbineMenu(false);
                    }}
                  >
                    <Text style={styles.woudbinepopsectxt}>Information</Text>
                  </TouchableOpacity>
                  {Platform.OS === 'ios' && (
                    <TouchableOpacity
                      style={{ marginTop: 19 }}
                      activeOpacity={0.7}
                      onPress={() => {
                        navigation.navigate('Woudbineprofilescr');
                        setShowWoudbineMenu(false);
                      }}
                    >
                      <Text style={styles.woudbinepopsectxt}>Profile</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </Modal>
            )}
          </View>
        )}
        {selectedScreen === 'popularScreen' && (
          <View style={styles.woudbinewrppr}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
            >
              <Image source={require('../../assets/images/woudbineback.png')} />
            </TouchableOpacity>

            <Text style={styles.woudbinelbltxt}>Popular places</Text>
          </View>
        )}

        <View>
          <TextInput
            placeholder="Search places"
            style={styles.woudbineinpt}
            value={woudbineInptVavue}
            onChangeText={setWoudbineInptVavue}
            placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
          />
          <Image
            source={require('../../assets/images/woudbinesrc.png')}
            style={styles.woudbineicn}
          />
        </View>

        {selectedScreen === 'savedScreen' && woudbineSavedList.length === 0 && (
          <LinearGradient
            colors={['#E11712', '#7B0D0A']}
            style={{
              marginBottom: 23,
              width: '100%',
              borderRadius: 12,
              marginTop: 40,
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
                Unfortunately, you haven't saved any places from my selection
                yet.
              </Text>
              <TouchableOpacity
                style={styles.woudbineshrbtn}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Woudbinepopplcsscr')}
              >
                <Text style={styles.woudbineshrbtntxt}>Open places</Text>
              </TouchableOpacity>

              <Image
                source={require('../../assets/images/woudbinefctim.png')}
                style={{ position: 'absolute', bottom: 0, right: 12 }}
              />
            </View>
          </LinearGradient>
        )}

        {filteredPlaces.map((loc, idx) => (
          <Woudbinelistcard
            key={idx}
            location={loc}
            selectedScreen={selectedScreen}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  woudbinecnt: { flex: 1, backgroundColor: '#020302' },
  woudbineinpt: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    paddingLeft: 50,
    padding: 24,
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'Raleway-Regular',
    marginBottom: 31,
    width: '100%',
  },
  woudbinscrollcnt: {
    flexGrow: 1,
    paddingTop: height * 0.088,
    paddingHorizontal: 16,
    backgroundColor: '#020302',
  },
  woudbinelbltxt: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Raleway-Black',
  },
  woudbinewrppr: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    marginBottom: 44,
  },
  woudbinefacttxt: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: 'Raleway-Medium',
    marginBottom: 30,
    width: '65%',
  },
  woudbineicn: {
    position: 'absolute',
    top: 23,
    left: 18,
    opacity: 0.5,
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
  woudbineshrbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    width: 148,
    height: 48,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
  woudbineshrbtntxt: {
    color: '#7B0D0A',
    fontSize: 16,
    fontFamily: 'Raleway-SemiBold',
  },
});

export default Woudbineskyloclist;
