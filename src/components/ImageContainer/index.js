import * as React from 'react';
import { Image, View } from "react-native"

const ImageContainer = ({ source, aspectRatio }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Image style={{
                flex: 1, 
                width: '100%',
                aspectRatio: aspectRatio
            }} source={source} resizeMode='contain' />
        </View>
    )
}

export default ImageContainer;
