import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import Woudbineskystcknav from './UnderWoubineSkySrc/woudbineskynav/Woudbineskystcknav';
import { WoudbineContext } from './UnderWoubineSkySrc/woudbineskystrg/woudbinecntx';
import Woudbineldr from './UnderWoubineSkySrc/woudbineskycmpnts/Woudbineldr';

const App = () => {
  const [isVisibleWdEntryScreen, setIsVisibleWdEntryScreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisibleWdEntryScreen(true);
    }, 6000);
  }, []);

  return (
    <NavigationContainer>
      <WoudbineContext>
        {isVisibleWdEntryScreen ? <Woudbineskystcknav /> : <Woudbineldr />}
      </WoudbineContext>
    </NavigationContainer>
  );
};

export default App;
