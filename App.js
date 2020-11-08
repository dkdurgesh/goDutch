/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import {AppContainer} from './src/components/Router';


export default class App extends Component {
  render() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <AppContainer />
          </View>
        </SafeAreaView>
    );
  }
}