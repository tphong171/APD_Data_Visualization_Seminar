import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoardScreen from '../../components/DashBoardScreen';
import HelloWorld from '../../components/HelloWorld';
import EmploymentMonitor from '../../components/MonitorScreen/Employment';
import GDPMonitor from '../../components/MonitorScreen/GDP';
import Inflation from '../../components/MonitorScreen/Inflation/Inflation';

const DashBoardNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Dashboard">
                <Stack.Screen name="Dashboard" component={DashBoardScreen} />
                <Stack.Screen name="Monitor" component={HelloWorld} />
                <Stack.Screen name="EmploymentMonitor" component={EmploymentMonitor} />
                <Stack.Screen name="GDPMonitor" component={GDPMonitor} />
                <Stack.Screen name="Inflation" component={Inflation} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default DashBoardNavigator;