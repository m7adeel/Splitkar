import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { store } from './src/store/store'
import { Provider } from 'react-redux'

import MainRouter from './src/router/Main';


export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        animated={true}
        style='light'
        hidden={false}
      />
      <NavigationContainer>
        <Provider store={store}>
          <MainRouter />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
