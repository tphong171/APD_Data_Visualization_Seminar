import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoardScreen from '../../components/DashBoardScreen';
import HelloWorld from '../../components/HelloWorld';

const DashBoardNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Dashboard">
                <Stack.Screen name="Dashboard" component={DashBoardScreen} />
                <Stack.Screen name="Monitor" component={HelloWorld} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default DashBoardNavigator;