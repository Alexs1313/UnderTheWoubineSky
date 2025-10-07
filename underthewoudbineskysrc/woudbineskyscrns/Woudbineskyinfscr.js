import { BlurView } from '@react-native-community/blur';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
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
const { height } = Dimensions.get('window');

const Woudbineskyinfscr = () => {
  const [showWoudbineMenu, setShowWoudbineMenu] = React.useState(false);
  const navigation = useNavigation();

  const shareWoudbineInfo = async () => {
    try {
      await Share.share({
        message:
          Platform.OS === 'ios'
            ? `“Under the Woubine Sky” introduces you to unique places in Canada that you won’t find in your usual guidebooks.
Here you can save your favorite spots, learn interesting facts, and get marks for the locations you visit.
Travel with guide Celine and collect your own collection of stories under the Woubine sky.`
            : `“Under the Star Sky” introduces you to unique places in Canada that you won’t find in your usual guidebooks. 
Here you can save your favorite spots, learn interesting facts, and get marks for the locations you visit.
Travel with guide Celine and collect your own collection of stories under the Star sky.`,
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
          <Text style={styles.woudbinelbltxt}>Information</Text>

          <View style={{ flexDirection: 'row', gap: 12 }}>
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
                      navigation.popToTop();
                      setShowWoudbineMenu(false);
                    }}
                  >
                    <Text
                      style={[styles.woudbinepopsectxt, { marginBottom: 19 }]}
                    >
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
                    <Text style={styles.woudbinepoptxt}>INFORMATION</Text>
                  </View>
                </View>
              </Modal>
            )}
          </View>
        </View>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          {Platform.OS === 'ios' ? (
            <Image source={require('../../assets/images/woudbineinflog.png')} />
          ) : (
            <Image
              source={require('../../assets/images/woubineandrlogo.png')}
              style={{
                width: 350,
                height: 350,
                borderTopLeftRadius: 52,
                borderTopRightRadius: 52,
              }}
            />
          )}
        </View>

        {Platform.OS === 'ios' ? (
          <Text style={[styles.woudbinesectxt, { marginBottom: 20 }]}>
            “Under the Woubine Sky” introduces you to unique places in Canada
            that you won’t find in your usual guidebooks. Here you can save your
            favorite spots, learn interesting facts, and get marks for the
            locations you visit. Travel with guide Celine and collect your own
            collection of stories under the Woubine sky.
          </Text>
        ) : (
          <Text style={[styles.woudbinesectxt, { marginBottom: 20 }]}>
            “Under the Star Sky” introduces you to unique places in Canada that
            you won’t find in your usual guidebooks. Here you can save your
            favorite spots, learn interesting facts, and get marks for the
            locations you visit. Travel with guide Celine and collect your own
            collection of stories under the Star sky.
          </Text>
        )}
        <TouchableOpacity activeOpacity={0.8} onPress={shareWoudbineInfo}>
          <ImageBackground
            source={require('../../assets/images/woudbinebtshr.png')}
            style={styles.woudbinwrp}
          >
            <Image source={require('../../assets/images/woudbineshric.png')} />
            <Text style={styles.woudbinebtntxt}>Share</Text>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  woudbinecnt: { flex: 1, backgroundColor: '#020302' },
  woudbinebtntxt: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Raleway-SemiBold',
  },
  woudbinscrollcnt: {
    flexGrow: 1,
    paddingTop: height * 0.088,
    paddingHorizontal: 16,
    backgroundColor: '#020302',
    paddingBottom: 30,
  },
  woudbinelbltxt: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Raleway-Black',
  },
  woudbinesectxt: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Raleway-Regular',
  },
  woudbinwrp: {
    width: 148,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
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
    width: '70%',
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

export default Woudbineskyinfscr;
