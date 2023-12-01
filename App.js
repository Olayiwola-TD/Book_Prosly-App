import React from 'react';
import Route from './src/routes/index';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import { mystore } from './src/redux/store';
import { Alert, StatusBar } from 'react-native';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import appStyle from './src/theme/theme';
let persistor = persistStore(mystore);

export default class App extends React.Component {

  componentDidMount() {

    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 0);
  }

  // reactToUpdates = async () => {
  //   Updates.addListener((event) => {
  //     if (event.type === Updates.UpdateEventType.UPDATE_AVAILABLE) {
  //       // Alert.alert("Updating MedStock App", "We restarting your app to see it.");
  //       Updates.reloadAsync();
  //     }
  //   })
  // }

  render() {
    return (
      <Provider store={mystore}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar backgroundColor={appStyle.Colors.primaryColor} />
          <Route />
        </PersistGate>
      </Provider>
    )
  }
}

