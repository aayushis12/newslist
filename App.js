// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import Routes from './routes';
import configureStore from './store';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from './src/SplashScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    storeCreated: false,
    store: null,
    };
  }

componentDidMount() {
  setTimeout(() => {
    configureStore()
    .then(({ persistor, store }) =>
    this.setState({ persistor, store, storeCreated: true }));
  }, 1000);
}

render() {
  if (!this.state.storeCreated) {
    return (<SplashScreen/>);
  }

  return (
    <Provider store={this.state.store}>
      <PersistGate persistor={this.state.persistor}>
      <Routes/>
      </PersistGate>
    </Provider>
    );
  }
}
