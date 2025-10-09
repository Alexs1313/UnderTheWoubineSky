import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import Woudbineskystcknav from './underthewoudbineskysrc/woudbineskynav/Woudbineskystcknav';
import { WoudbineContext } from './underthewoudbineskysrc/woudbineskystrg/woudbinecntx';
import Woudbineldr from './underthewoudbineskysrc/woudbineskycmpnts/Woudbineldr';

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
        {isVisibleWdEntryScreen ? <Woudbineskystcknav /> : <Woudbineld />}
      </WoudbineContext>
    </NavigationContainer>
  );
};

export default App;
