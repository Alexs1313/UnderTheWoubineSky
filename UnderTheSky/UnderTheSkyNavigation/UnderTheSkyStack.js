import { createStackNavigator } from '@react-navigation/stack';
import UnderTheSkyOnboarding from '../UnderTheSkyScreens/UnderTheSkyOnboarding';
import UnderTheSkyHome from '../UnderTheSkyScreens/UnderTheSkyHome';
import UnderTheSkyLocationsList from '../UnderTheSkyScreens/UnderTheSkyLocationsList';
import UnderTheSkyDetails from '../UnderTheSkyScreens/UnderTheSkyDetails';
import UnderTheSkyPopular from '../UnderTheSkyScreens/UnderTheSkyPopular';
import UnderTheSkySaved from '../UnderTheSkyScreens/UnderTheSkySaved';
import UnderTheSkyMap from '../UnderTheSkyScreens/UnderTheSkyMap';
import UnderTheSkyInfo from '../UnderTheSkyScreens/UnderTheSkyInfo';
import UnderTheSkyMarks from '../UnderTheSkyScreens/UnderTheSkyMarks';
import UnderTheSkyProfile from '../UnderTheSkyScreens/UnderTheSkyProfile';
const Stack = createStackNavigator();

const UnderTheSkyStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="UnderTheSkyOnboarding"
        component={UnderTheSkyOnboarding}
      />
      <Stack.Screen name="UnderTheSkyHome" component={UnderTheSkyHome} />
      <Stack.Screen
        name="UnderTheSkyLocationsList"
        component={UnderTheSkyLocationsList}
      />
      <Stack.Screen name="UnderTheSkyDetails" component={UnderTheSkyDetails} />
      <Stack.Screen name="UnderTheSkyPopular" component={UnderTheSkyPopular} />
      <Stack.Screen name="UnderTheSkySaved" component={UnderTheSkySaved} />
      <Stack.Screen name="UnderTheSkyMap" component={UnderTheSkyMap} />
      <Stack.Screen name="UnderTheSkyInfo" component={UnderTheSkyInfo} />
      <Stack.Screen name="UnderTheSkyMarks" component={UnderTheSkyMarks} />
      <Stack.Screen name="UnderTheSkyProfile" component={UnderTheSkyProfile} />
    </Stack.Navigator>
  );
};

export default UnderTheSkyStack;
