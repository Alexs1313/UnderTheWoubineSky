import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import UnderTheSkyStack from './UnderTheSky/UnderTheSkyNavigation/UnderTheSkyStack';
import { ContextProvider } from './UnderTheSky/UnderTheSkyStore/underTheSkyContext';
import UnderTheSkyLoader from './UnderTheSky/UnderTheSkyComponents/UnderTheSkyLoader';

const App = () => {
  const [isVisibleWdEntryScreen, setIsVisibleWdEntryScreen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisibleWdEntryScreen(true);
    }, 6000);
  }, []);

  return (
    <NavigationContainer>
      <ContextProvider>
        {isVisibleWdEntryScreen ? <UnderTheSkyStack /> : <UnderTheSkyLoader />}
      </ContextProvider>
    </NavigationContainer>
  );
};

export default App;
