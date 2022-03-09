import * as React from 'react';
import { View, Text } from 'react-native';
import { VictoryChart, VictoryScatter, VictoryTheme } from 'victory-native';
import inflationData from '../../../data/inflation/data/inflation-consumer_json.json';

/*
    Sample country
    {
        "Country": "Arab World",
        "Country Code": "ARB", 
        "Inflation": 1.30379017462108,
        "Year": 1969
    }
*/

/*
    Scatter plot
    2D only
*/

const sectionData = inflationData.map(country => { return { x: country.Year, y: country.Inflation } });
const x_range = [
    Math.floor(sectionData.reduce(Math.min, sectionData[0].x)),
    Math.ceil(sectionData.reduce(Math.max, sectionData[0].x))
];
const y_range = [
    Math.floor(sectionData.reduce(Math.min, sectionData[0].y)),
    Math.ceil(sectionData.reduce(Math.max, sectionData[0].y))
];

const Inflation = () => {

    return (
        <View>
            <VictoryChart
                theme={VictoryTheme.material}
                domain={{ x_range, y_range }}
            >
                <VictoryScatter
                    style={{
                        data: {
                            fill: "#c43a31"
                        }
                    }}
                    size={3}
                    data={sectionData}
                />
            </VictoryChart>
        </View>
    );
}

export default Inflation;
