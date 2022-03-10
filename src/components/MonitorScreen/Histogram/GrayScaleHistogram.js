import * as React from 'react';
import { VictoryChart, VictoryHistogram, VictoryTheme } from "victory-native";

// data: {x: number}[]
const GrayScaleHistogram = ({ data }) => {
    console.log(data);
    return (
        <VictoryChart
            theme={VictoryTheme.material}
            domain={{ x: [0, 255], y: [0, 255] }}
        >
            <VictoryHistogram
                data={data}
            />
        </VictoryChart>
    );
}

export default GrayScaleHistogram;
