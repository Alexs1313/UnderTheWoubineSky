import React, { useCallback, useMemo, useState } from 'react';
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { woudbinelocs } from '../woudbineskycnsts/woudbinelocs';
import Woudbinelistcard from '../woudbineskycmpnts/Woudbinelistcard';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useStore } from '../woudbineskystrg/woudbinecntx';
import MapView, { Marker } from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';
const { height } = Dimensions.get('window');

const Woudbinemapscr = () => {
  const navigation = useNavigation();
  const { getWoudbineLocation } = useStore();
  const [isVisibleCard, setIsVisibleCard] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useFocusEffect(
    useCallback(() => {
      getWoudbineLocation();
    }, []),
  );

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

          <Text style={styles.woudbinelbltxt}>Interactive map</Text>
        </View>

        <View style={[styles.mapContainer]}>
          <MapView
            userInterfaceStyle="dark"
            mapType="satellite"
            style={{ flex: 1 }}
            provider={Platform.OS === 'ios' ? 'google' : undefined}
            onPress={() => {
              if (isVisibleCard && selectedMarker)
                setIsVisibleCard(false), setSelectedMarker(null);
            }}
            initialRegion={{
              latitude: 49.0833,
              longitude: -119.5667,
              latitudeDelta: 0.6,
              longitudeDelta: 0.6,
            }}
          >
            {woudbinelocs.map(marker => (
              <Marker
                key={marker.woudbinelid}
                coordinate={{
                  latitude: marker.woudbinelat,
                  longitude: marker.woudbinelon,
                }}
                onPress={() => {
                  setSelectedMarker(marker), setIsVisibleCard(true);
                }}
              >
                {Platform.OS === 'ios' ? (
                  <>
                    {selectedMarker ? (
                      <Image
                        source={require('../../assets/images/woudbineselmark.png')}
                      />
                    ) : (
                      <Image
                        source={require('../../assets/images/woudbinemark.png')}
                        style={{ width: 60, height: 60 }}
                      />
                    )}
                  </>
                ) : null}
              </Marker>
            ))}
          </MapView>
          <LinearGradient
            colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']}
            style={{
              position: 'absolute',
              top: 0,
              width: '100%',
              height: 140,
            }}
            pointerEvents="none"
          />

          {isVisibleCard && (
            <View
              style={{
                position: 'absolute',
                top: 15,
                alignSelf: 'center',
                width: '80%',
              }}
            >
              <Woudbinelistcard
                location={selectedMarker}
                selectedScreen={'mapScreen'}
                setIsVisibleCard={setIsVisibleCard}
                setSelectedMarker={setSelectedMarker}
              />
            </View>
          )}
        </View>
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
  mapContainer: {
    width: '100%',
    height: height * 0.72,
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#1E1E1E',
    marginBottom: 40,
  },
});

export default Woudbinemapscr;
