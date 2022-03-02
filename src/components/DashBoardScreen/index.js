import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import DashBoardSimpleCard from '../DashBoardCard/Simple';

const DashBoardScreen = ({navigation}) => {
    return(
        <View style={{
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
        }}>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Monitor');
            }}>
                <DashBoardSimpleCard dashBoardTitle = 'Products' navigation={navigation} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate('Monitor');
            }}>
                <DashBoardSimpleCard dashBoardTitle = 'Sales' navigation={navigation} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate('Monitor');
            }}>
                <DashBoardSimpleCard dashBoardTitle = 'Promotion' navigation={navigation} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate('Monitor');
            }}>
                <DashBoardSimpleCard dashBoardTitle = 'Profit' navigation={navigation} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate('Monitor');
            }}>
                <DashBoardSimpleCard dashBoardTitle = 'Customers' navigation={navigation} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                navigation.navigate('Monitor');
            }}>
                <DashBoardSimpleCard dashBoardTitle = 'Companies' navigation={navigation} />
            </TouchableOpacity>
        </View>
    );
}

export default DashBoardScreen;