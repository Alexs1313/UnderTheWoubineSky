import { createStackNavigator } from '@react-navigation/stack';
import UnderTheSkyOnboarding from '../underskys/UnderTheSkyOnboarding';
import UnderTheSkyHome from '../underskys/UnderTheSkyHome';
import UnderTheSkyLocationsList from '../underskys/UnderTheSkyLocationsList';
import UnderTheSkyDetails from '../underskys/UnderTheSkyDetails';
import UnderTheSkyPopular from '../underskys/UnderTheSkyPopular';
import UnderTheSkySaved from '../underskys/UnderTheSkySaved';
import UnderTheSkyMap from '../underskys/UnderTheSkyMap';
import UnderTheSkyInfo from '../underskys/UnderTheSkyInfo';
import UnderTheSkyMarks from '../underskys/UnderTheSkyMarks';
import UnderTheSkyProfile from '../underskys/UnderTheSkyProfile';
const Stack = createStackNavigator();

const Underskyst = () => {
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

export default Underskyst;
