import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';

export default function Settings(props) {
    // Navigation: props.navigation
    return (
        <View style={styles.container}>
            <Text>Settings component</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginTop: Constants.statusBarHeight,
    },
});
