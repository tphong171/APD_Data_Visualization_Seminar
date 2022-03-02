
import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const DashBoardSimpleCard = ({dashBoardTitle, navigation}) => {
    return (
        <View style={{
            width: 100,
            height: 100,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: '#ddd',
            borderRadius: 10,
            marginVertical: 10,
        }}>
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Icon
                    reverse
                    name='ios-american-football'
                    type='ionicon'
                    color='#517fa4'
                />
            </View>

            <View>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                }}>
                    {dashBoardTitle}
                </Text>
            </View>
        </View>
    );
}

export default DashBoardSimpleCard;