import React from 'react';
import { ScrollView, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Text, Divider } from 'react-native-elements';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from "victory-native";
const sampleData = require('../../../../data/employment-us/data/aat1_json.json');

const EmploymentMonitor = () => {
    const [years, setYears] = React.useState([]);
    const [currentYear, setCurrentYear] = React.useState(null);
    
    const changeYear = (year) => {
        setCurrentYear(year);
    }

    const getDataByYear = (year) => {
        for(let i=0; i<years.length; i++) {
            if (years[i] === currentYear) {
                return sampleData[i];
            }
        }
    }

    const getDataLabor = () => {
        const data = getDataByYear(currentYear);
        
        const laborData = [
            {
                xLabel: 'labor_force',
                yValue: data? data['labor_force'] : 0,
            },
            {
                xLabel: 'not_in_labor',
                yValue: data? data['not_in_labor'] : 0,
            }
        ];
        //console.log(laborData);
        return laborData;
    }

    const getDataEmployee = () => {
        const data = getDataByYear(currentYear);
        
        const laborData = [
            {
                xLabel: 'employed',
                yValue: data? data['employed_total'] : 0,
            },
            {
                xLabel: 'unemployed',
                yValue: data? data['unemployed'] : 0,
            }
        ];
        //console.log(laborData);
        return laborData;
    }

    const getDataAgrictulture = () => {
        const data = getDataByYear(currentYear);
        
        const laborData = [
            {
                xLabel: 'agrictulture',
                yValue: data? data['agrictulture_ratio'] : 0,
            },
            {
                xLabel: 'nonagriculture',
                yValue: data? data['nonagriculture_ratio'] : 0,
            }
        ];
        //console.log(laborData);
        return laborData;
    }

    React.useEffect(() => {
        let newYears = [];
        for (let i = 1941; i <= 2010; i++) {
            newYears.push(i.toString());
        }
        setYears(newYears);
        setCurrentYear(newYears[0]);
    }, []);

    const renderYearSelections = () => {
        const yearSelections = years.map((year, index) => {
            return (
                <Picker.Item label={year} value={year} key={index} />
            );
        })
        return yearSelections;
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
                        selectedValue={currentYear}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(year, yearIndex) => changeYear(year)}
                    >
                        {renderYearSelections()}
                    </Picker>
                </View>

                <Divider />

                <View style={{
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{
                        width: '100%',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRightWidth: 1,
                        borderRadius: 4,
                        borderColor: '#ddd',
                        backgroundColor: '#fff',
                    }}>
                        <Text>Labor Chart</Text>
                        <VictoryChart
                            theme={VictoryTheme.material}
                        >
                            <VictoryBar
                                style={{ data: { fill: ({ datum }) => datum.xLabel === 'labor_force' ? "green" : "#c43a31" } }}
                                // labels={({ datum }) => `${datum.yValue}`}
                                alignment="start"
                                data={getDataLabor()}
                                x='xLabel'
                                y='yValue'
                            />
                            <VictoryAxis
                                label="category"
                                style={{
                                    axisLabel: { padding: 30 }
                                }}
                            />
                            <VictoryAxis dependentAxis
                                label="population"
                                style={{
                                    axisLabel: { padding: 40 }
                                }}
                                
                            />
                        </VictoryChart>
                    </View>

                    <View style={{
                        width: '100%',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRightWidth: 1,
                        borderRadius: 4,
                        borderColor: '#ddd',
                        backgroundColor: '#fff',
                    }}>
                        <Text>Employee Chart</Text>
                        <VictoryChart
                            theme={VictoryTheme.material}
                        >
                            <VictoryBar
                                style={{ data: { fill: ({ datum }) => datum.xLabel === 'employed' ? "green" : "#c43a31" } }}
                                alignment="start"
                                data={getDataEmployee()}
                                x='xLabel'
                                y='yValue'
                            />
                            <VictoryAxis
                                label="category"
                                style={{
                                    axisLabel: { padding: 30 }
                                }}
                            />
                            <VictoryAxis dependentAxis
                                label="population"
                                style={{
                                    axisLabel: { padding: 40 }
                                }}
                            />
                        </VictoryChart>
                    </View>

                    <View style={{
                        width: '100%',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRightWidth: 1,
                        borderRadius: 4,
                        borderColor: '#ddd',
                        backgroundColor: '#fff',
                    }}>
                        <Text>Agrictulture Chart</Text>
                        <VictoryChart
                            theme={VictoryTheme.material}
                        >
                            <VictoryBar
                                animate={{
                                    duration: 2000,
                                    onLoad: { duration: 1000 }
                                }}
                                style={{ data: { fill: ({ datum }) => datum.xLabel === 'agrictulture' ? "green" : "#c43a31" } }}
                                alignment="start"
                                data={getDataAgrictulture()}
                                x='xLabel'
                                y='yValue'
                            />
                            <VictoryAxis
                                label="category"
                                style={{
                                    axisLabel: { padding: 30 }
                                }}
                            />
                            <VictoryAxis dependentAxis
                                label="population"
                                style={{
                                    axisLabel: { padding: 40 }
                                }}
                            />
                        </VictoryChart>
                    </View>

                </View>
            </View>
        </ScrollView>
    );
}

export default EmploymentMonitor;