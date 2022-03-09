
import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const DashBoardSimpleCard = ({dashBoardTitle, navigation}) => {
    return (
        <View style={{
            aspectRatio: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: '#ddd',
            borderRadius: 10,
            backgroundColor: '#333333'
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

            <Text style={{
                fontSize: 14,
                fontWeight: 'bold',
            }}>
                {dashBoardTitle}
            </Text>
        </View>
    );
}

export default DashBoardSimpleCard;