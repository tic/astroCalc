// React imports
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// The base structure for all calculators
import CalculatorShell from './screens/CalculatorShell.js';

// Other screens which don't follow the calculator shell structure.
import Settings from './screens/Settings.js';

// Import the manifest, which contains information on how to build each Calculator.
import Manifest from './Manifest.js';

// Create the draw navigation system
const Drawer = createDrawerNavigator();

// Convert a manifest entry into a Drawer screen
const DrawerScreen = details => (<Drawer.Screen name={details.name}
                                                key={details.name}
                                                component={CalculatorShell}
                                                initialParams={details}/>);

// Place the navigation stack and populate the screen
export default function App() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Calculator">
                    {Manifest.map(calc => DrawerScreen(calc))}
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
