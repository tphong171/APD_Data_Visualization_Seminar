import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import ImageContainer from '../../ImageContainer';
import { dataBefore, dataAfter } from './data';
import GrayScaleHistogram from './GrayScaleHistogram';

const beforeImg = require('../../../data/city/Before.png');
const afterImg = require('../../../data/city/After.png');

const Histogram = () => {
    return (
        <ScrollView>
            <View>
                <ImageContainer source={beforeImg} aspectRatio={1000 / 751} />
                <GrayScaleHistogram data={dataBefore}/>
                <View style={{ height: 150 }} />

                <ImageContainer source={afterImg} aspectRatio={1000 / 751} />
                <GrayScaleHistogram data={dataAfter}/>
                <View style={{ height: 150 }} />
            </View>
        </ScrollView>
    );
}

export default Histogram;
