
import React from 'react';
import { View, Text } from 'react-native';

const DashBoardSimpleCard = () => {
    return (
        <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
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
                <Text>Products</Text>
            </View>
        </View>
    );
}

export default DashBoardSimpleCard;