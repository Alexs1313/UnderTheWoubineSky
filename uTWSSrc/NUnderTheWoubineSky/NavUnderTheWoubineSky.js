import { createStackNavigator } from '@react-navigation/stack';
import DetailsUnderTheWoubineSky from '../SUnderTheWoubineSky/DetailsUnderTheWoubineSky';
import HomeUnderTheWoubineSky from '../SUnderTheWoubineSky/HomeUnderTheWoubineSky';
import InfoUnderTheWoubineSky from '../SUnderTheWoubineSky/InfoUnderTheWoubineSky';
import LocationsListUnderTheWoubineSky from '../SUnderTheWoubineSky/LocationsListUnderTheWoubineSky';
import MapUnderTheWoubineSky from '../SUnderTheWoubineSky/MapUnderTheWoubineSky';
import MarksUnderTheWoubineSky from '../SUnderTheWoubineSky/MarksUnderTheWoubineSky';
import WelcomeUnderTheWoubineSky from '../SUnderTheWoubineSky/WelcomeUnderTheWoubineSky';
import ProfileUnderTheWoubineSky from '../SUnderTheWoubineSky/ProfileUnderTheWoubineSky';
import PopularUnderTheWoubineSky from '../SUnderTheWoubineSky/PopularUnderTheWoubineSky';
import SavedUnderTheWoubineSky from '../SUnderTheWoubineSky/SavedUnderTheWoubineSky';
const Stack = createStackNavigator();

const NavUnderTheWoubineSky = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="WelcomeUnderTheWoubineSky"
        component={WelcomeUnderTheWoubineSky}
      />
      <Stack.Screen
        name="HomeUnderTheWoubineSky"
        component={HomeUnderTheWoubineSky}
      />
      <Stack.Screen
        name="LocationsListUnderTheWoubineSky"
        component={LocationsListUnderTheWoubineSky}
      />
      <Stack.Screen
        name="DetailsUnderTheWoubineSky"
        component={DetailsUnderTheWoubineSky}
      />
      <Stack.Screen
        name="PopularUnderTheWoubineSky"
        component={PopularUnderTheWoubineSky}
      />
      <Stack.Screen
        name="SavedUnderTheWoubineSky"
        component={SavedUnderTheWoubineSky}
      />
      <Stack.Screen
        name="MapUnderTheWoubineSky"
        component={MapUnderTheWoubineSky}
      />
      <Stack.Screen
        name="InfoUnderTheWoubineSky"
        component={InfoUnderTheWoubineSky}
      />
      <Stack.Screen
        name="MarksUnderTheWoubineSky"
        component={MarksUnderTheWoubineSky}
      />
      <Stack.Screen
        name="ProfileUnderTheWoubineSky"
        component={ProfileUnderTheWoubineSky}
      />
    </Stack.Navigator>
  );
};

export default NavUnderTheWoubineSky;
