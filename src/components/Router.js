import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../screens/Login';
import AccountSetup from '../screens/AccountSetup';
import AccountDetail from '../screens/AccountDetail';

export const loginStackNavigator = createStackNavigator(
    {
        Login: {screen: Login},
        AccountSetup: {screen: AccountSetup},
        AccountDetail: {screen: AccountDetail}
    },
    { headerMode: 'none' }
)

export const AppContainer = createAppContainer(loginStackNavigator);