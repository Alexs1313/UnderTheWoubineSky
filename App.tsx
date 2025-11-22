import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ContextContainer } from './UnderTheWoubineSky/UnderTheWoubineSkyStore/underTheSkyContext';
import NavUnderTheWoubineSky from './UnderTheWoubineSky/UnderTheWoubineSkyNavigation/NavUnderTheWoubineSky';
import LoaderUnderTheWoubineSky from './UnderTheWoubineSky/UnderTheWoubineSkyComponents/LoaderUnderTheWoubineSky';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
      <ContextContainer>
        {!isLoading ? <NavUnderTheWoubineSky /> : <LoaderUnderTheWoubineSky />}
      </ContextContainer>
    </NavigationContainer>
  );
};

export default App;
