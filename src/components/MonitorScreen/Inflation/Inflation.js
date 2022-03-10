import * as React from 'react';
import { View, Text } from 'react-native';
import {
    VictoryChart,
    VictoryScatter,
    VictoryTheme,
    VictoryTooltip,
    VictoryZoomContainer
} from 'victory-native';
import inflationData from '../../../data/inflation/data/inflation-consumer_json.json';
import { hashToColorString } from '../../../utils/utils';

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
    // React.useEffect(() => {
    //     console.log(JSON.stringify(sectionData, null, 4));
    // }, [])

    return (
        <View>
            <VictoryChart
                theme={VictoryTheme.material}
                domain={{ year_range, inflation_range }}
                containerComponent={
                    <VictoryZoomContainer zoomDomain={{
                        x: [1970, 1990],
                        y: [-10, 20]
                    }} />
                }
            >
                <VictoryScatter
                    data={sectionData}
                    x='Year'
                    y='Inflation'
                    style={{
                        data: {
                            fill: ({ datum }) => hashToColorString(datum.label),
                        },
                    }}
                    labelComponent={<VictoryTooltip renderInPortal={false} />}
                    size={3}
                />
            </VictoryChart>

            <Text style={{ color: '#333333', textAlign: 'center' }}>
                Pinch zoom too see more data.{'\n'}Pan to move view around
            </Text>
        </View>
    );
}

export default Inflation;
