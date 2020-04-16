import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import CalculatorShell from './screens/CalculatorShell.js';
import Settings from './screens/Settings.js';

//
import InteractionLibrary from './components/InteractionLibrary.js';


// Import and register the necessary calculators
import TwoValueSum from './components/functions/TwoValueSum.js';


let Calculators = [
    {
        name: "Two Value Sum",
        description: "Provide two number values and the calculator outputs their sum as a single numerical value.",
        function: TwoValueSum,
        inputs: [
            {type: InteractionLibrary.NumericalValue, name: "Value A"},
            {type: InteractionLibrary.NumericalValue, name: "Value B"},
            {type: InteractionLibrary.NumericalValue, name: "Value C"},
        ],
        outputs: [
            {type: InteractionLibrary.NumericalValue, name: "Sum of A and B"},
            {type: InteractionLibrary.NumericalValue, name: "A minus B"},
            {type: InteractionLibrary.NumericalValue, name: "B minus A"},
            {type: InteractionLibrary.NumericalValue, name: "C times A"},
        ]
    }
]

//

const Drawer = createDrawerNavigator();

const Paramify = details => ({
                                description: details.description,
                                function: details.function,
                                inputs: details.inputs,
                                outputs: details.outputs,
                            });

const DrawerScreen = details => (<Drawer.Screen name={details.name}
                                                key={details.name}
                                                component={CalculatorShell}
                                                initialParams={Paramify(details)}/>);


export default function App() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Calculator">
                    {Calculators.map(calc => DrawerScreen(calc))}
                    <Drawer.Screen name="Settings" component={Settings}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});
