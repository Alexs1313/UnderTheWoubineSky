import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ContextProvider } from './underskysrc/underskyst/underTheSkyContext';
import Underskyst from './underskysrc/underskyn/Underskyst';
import Underskyld from './underskysrc/underskyc/Underskyld';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <NavigationContainer>
      <ContextProvider>
        {!isLoading ? <Underskys /> : <Underskyld />}
      </ContextProvider>
    </NavigationContainer>
  );
};

export default App;
