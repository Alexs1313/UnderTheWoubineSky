import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ContextContainer } from './uTWSSrc/STUnderTheWoubineSky/underTheSkyContext';
import NavUnderTheWoubineSky from './uTWSSrc/NUnderTheWoubineSky/NavUnderTheWoubineSky';
import LoaderUnderTheWoubineSky from './uTWSSrc/CUnderTheWoubineSky/LoaderUnderTheWoubineSky';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
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
