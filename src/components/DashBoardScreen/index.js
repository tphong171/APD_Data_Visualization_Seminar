import React from 'react';
import { TouchableOpacity, View, ScrollView } from 'react-native';
import DashBoardSimpleCard from '../DashBoardCard/Simple';
const sampleData = require('../../../data/employment-us/data/aat1_json.json');

const DashBoardScreen = ({ navigation }) => {
    //console.log(sampleData[0]['year']);
    return (
        <ScrollView>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                // alignItems: 'center',
                paddingTop: 10,
            }}>

                <TouchableOpacity style={{ width: '48%' }} onPress={() => {
                    navigation.navigate('EmploymentMonitor');
                }}>
                    <DashBoardSimpleCard dashBoardTitle='Employment' navigation={navigation} />
                </TouchableOpacity>

                <TouchableOpacity style={{ width: '48%' }} onPress={() => {
                    navigation.navigate('GDPMonitor');
                }}>
                    <DashBoardSimpleCard dashBoardTitle='GDP' navigation={navigation} />
                </TouchableOpacity>

                <TouchableOpacity style={{ width: '48%' }} onPress={() => {
                    navigation.navigate('Inflation');
                }}>
                    <DashBoardSimpleCard dashBoardTitle='Inflation' navigation={navigation} />
                </TouchableOpacity>

                <TouchableOpacity style={{ width: '48%' }} onPress={() => {
                    navigation.navigate('Histogram');
                }}>
                    <DashBoardSimpleCard dashBoardTitle='Histogram' navigation={navigation} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default DashBoardScreen;