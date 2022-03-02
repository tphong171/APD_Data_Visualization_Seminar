import React from 'react';
import {View} from 'react-native';
import DashBoardSimpleCard from '../DashBoardCard/Simple';

const DashBoardScreen = () => {
    return(
        <View style={{
            width: '100%',
        }}>
            <DashBoardSimpleCard />
        </View>
    );
}

export default DashBoardScreen;