import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Text, Divider } from 'react-native-elements';
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from "victory-native";
const sampleData = require('../../../../data/gdp/data/gdp_json.json');

const GDPMonitor = () => {
    const [years, setYears] = React.useState([]);
    const [nationCodes, setNationCodes] = React.useState([]);
    const [nationNames, setNationNames] = React.useState([]);

    const [currentYear, setCurrentYear] = React.useState(null);
    const [currentNationName, setCurrentNationName] = React.useState(null);
    const [currentNationCode, setCurrentNationCode] = React.useState(null);
    const [currentChartData, setCurrentChartData] = React.useState([]);

    const getNationNames = () => {
        const newNationNames = [];
        sampleData.forEach(row => {
            if (!newNationNames.includes(row['Country Name'])) {
                newNationNames.push(row['Country Name']);
            }
        });
        setNationNames(newNationNames);
        setCurrentNationName(newNationNames[0]);
    }

    const getNationCodes = () => {
        const newNationCodes = [];
        sampleData.forEach(row => {
            if (!newNationCodes.includes(row['Country Code'])) {
                newNationCodes.push(row['Country Code']);
            }
        });
        setNationCodes(newNationCodes);
        setCurrentNationCode(newNationCodes[0]);
    }

    useEffect(() => {
        getNationNames();
        getNationCodes();
    }, [])

    const renderNationsSelection = () => {
        var i = -1;
        return nationNames.map(nationName => {
            i++;
            return <Picker.Item label={nationName} value={nationName} key={nationCodes[i]} />
        });
    }

    const onChangeCurrentNationName = (nationName, index) => {
        setCurrentNationName(nationName);
        setCurrentNationCode(nationCodes[index]);
        getRowsByCode(nationCodes[index]);
        console.log(nationCodes[index]);
    }

    const getRowsByCode = (nationCode) => {
        const rows = [];
        sampleData.forEach(row => {
            if (row['Country Code'] == nationCode) {
                rows.push({ x: row['Year'], y: row['Value'] });
            }
        });
        setCurrentChartData(rows);
    }

    return (
        <ScrollView>
            <View style={{
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View>
                    <Picker
                        selectedValue={currentNationName}
                        style={{ height: 50, width: 300 }}
                        onValueChange={onChangeCurrentNationName}
                    >
                        {renderNationsSelection()}
                    </Picker>
                </View>

                <Divider />

                <View style={{
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <VictoryChart
                        theme={VictoryTheme.material}
                    >
                        <VictoryLine
                            style={{
                                data: { stroke: "#c43a31" },
                                parent: { border: "1px solid #ccc" }
                            }}
                            data={currentChartData}
                        />

                        <VictoryAxis
                            label="year"
                            style={{
                                axisLabel: { padding: 30 }
                            }}
                        />
                        <VictoryAxis dependentAxis
                            label="GDP"
                            style={{
                                axisLabel: { padding: 40 }
                            }}
                            tickFormat={(t) => `${t/1000000000}B`}
                        />
                    </VictoryChart>
                </View>
            </View>
        </ScrollView>
    );
}

export default GDPMonitor;