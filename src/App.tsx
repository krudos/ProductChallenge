import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NavigationContainer} from '@react-navigation/native';
import Root from './navigation/Root';
import {runMirage} from './mocks/config';
import {ThemeProvider} from 'styled-components';
import {theme} from './helpers/styled';

const queryClient = new QueryClient();

runMirage();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
