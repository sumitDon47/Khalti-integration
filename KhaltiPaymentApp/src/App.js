// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import KhaltiPayment from './KhaltiPayment';
import KhaltiWebView from './KhaltiWebView';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="KhaltiPayment">
                <Stack.Screen name="KhaltiPayment" component={KhaltiPayment} />
                <Stack.Screen name="KhaltiWebView" component={KhaltiWebView} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
