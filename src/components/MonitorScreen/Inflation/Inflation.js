import * as React from 'react';
import { View } from 'react-native';
import { VictoryChart, VictoryScatter, VictoryTheme, VictoryTooltip } from 'victory-native';
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

const sectionData = inflationData.map(country => ({
    Year: country.Year,
    Inflation: country.Inflation,
    label: country.Country
}));
const year_range = [
    Math.floor(sectionData.reduce(Math.min, sectionData[0].Year)),
    Math.ceil(sectionData.reduce(Math.max, sectionData[0].Year))
];
const inflation_range = [
    Math.floor(sectionData.reduce(Math.min, sectionData[0].Inflation)),
    Math.ceil(sectionData.reduce(Math.max, sectionData[0].Inflation))
];

const Inflation = () => {

    return (
        <View>
            <VictoryChart
                theme={VictoryTheme.material}
                domain={{ year_range, inflation_range }}
            >
                <VictoryScatter
                    style={{
                        data: {
                            fill: "#c43a31"
                        }
                    }}
                    labelComponent={<VictoryTooltip />}
                    x='Year'
                    y='Inflation'
                    size={3}
                    data={sectionData}
                    // labels={({ datum }) => `country: ${datum.label}`}
                />
            </VictoryChart>
        </View>
    );
}

export default Inflation;
