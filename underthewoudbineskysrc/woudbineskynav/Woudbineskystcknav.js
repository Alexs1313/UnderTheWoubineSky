import { createStackNavigator } from '@react-navigation/stack';
import Woudbineskyentrscr from '../woudbineskyscrns/Woudbineskyentrscr';
import Woudbineskyhmscr from '../woudbineskyscrns/Woudbineskyhmscr';
import Woudbineskyloclist from '../woudbineskyscrns/Woudbineskyloclist';
import Woudbineskydetscr from '../woudbineskyscrns/Woudbineskydetscr';
import Woudbinepopplcsscr from '../woudbineskyscrns/Woudbinepopplcsscr';
import Woudbinesvdscr from '../woudbineskyscrns/Woudbinesvdscr';
import Woudbinemapscr from '../woudbineskyscrns/Woudbinemapscr';
import Woudbineskyinfscr from '../woudbineskyscrns/Woudbineskyinfscr';
import Woudbinemarksscr from '../woudbineskyscrns/Woudbinemarksscr';
const Stack = createStackNavigator();

const Woudbineskystcknav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Woudbineskyentrscr" component={Woudbineskyentrscr} />
      <Stack.Screen name="Woudbineskyhmscr" component={Woudbineskyhmscr} />
      <Stack.Screen name="Woudbineskyloclist" component={Woudbineskyloclist} />
      <Stack.Screen name="Woudbineskydetscr" component={Woudbineskydetscr} />
      <Stack.Screen name="Woudbinepopplcsscr" component={Woudbinepopplcsscr} />
      <Stack.Screen name="Woudbinesvdscr" component={Woudbinesvdscr} />
      <Stack.Screen name="Woudbinemapscr" component={Woudbinemapscr} />
      <Stack.Screen name="Woudbineskyinfscr" component={Woudbineskyinfscr} />
      <Stack.Screen name="Woudbinemarksscr" component={Woudbinemarksscr} />
    </Stack.Navigator>
  );
};

export default Woudbineskystcknav;
