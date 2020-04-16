import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import InteractionLibrary from '../components/InteractionLibrary.js';

// ID generator
const ID = (mode, index) => `${mode}_${index}`;

// Create the field(s) for inputting the values to the function
const InputConstructor = (inputs, inputHooks) => {
    return inputs.map((input, index) => {
        switch(input.type) {
            case InteractionLibrary.TextField:
                return (
                        <View   key={ID("input", index)}
                                style={styles.inputRow}>
                            <Text style={styles.displayLabel}>{input.name}:</Text>
                            <TextInput  style={styles.textEntry}
                                        value={inputHooks[index][0]}
                                        onChangeText={text => inputHooks[index][1](text)}/>
                        </View>
                    );

            case InteractionLibrary.MultipleSelect:
                return (
                    <View   key={ID("input", index)}
                            style={styles.inputRow}>
                        <Text style={styles.displayLabel}>{input.name}:</Text>
                        <View style={styles.multipleSelect}>
                            <RNPickerSelect selectedValue={inputHooks[index][0]}
                                            onValueChange={value => inputHooks[index][1](value)}
                                            items={input.options}
                                            textInputProps={{style: styles.multipleSelectText}}/>
                        </View>
                    </View>
                );
        }
    });
};

// Create the field(s) for displaying outputs from the function
const OutputConstructor = (outputs, outputHooks) => {
    return outputs.map((output, index) => (<Text key={ID("output", index)} style={styles.displayLabel}>{output.name}: {outputHooks[index][0]}</Text>));
};

const HooksToValues = hooks => hooks.map(hook => hook[0]);
const DescriptionsToHooks = desc => desc.map(item => {
    switch(item.type) {
        case InteractionLibrary.TextField:
            return React.useState("");

        case InteractionLibrary.MultipleSelect:
            return React.useState(item.options[0].value);
    }
});

const RunCalculation = (func, inputHooks, outputHooks) => {
    let results = func(...HooksToValues(inputHooks));
    results.forEach((result, index) => outputHooks[index][1](result));
}


export default function CalculatorShell(props) {
    // Map inputs to hooks to store input values
    let inputHooks = DescriptionsToHooks(props.route.params.inputs);

    // Map outputs to hooks to store output values
    let outputHooks = DescriptionsToHooks(props.route.params.outputs);

    let InputFields = InputConstructor(props.route.params.inputs, inputHooks);
    let OutputFields = OutputConstructor(props.route.params.outputs, outputHooks);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.route.name}</Text>
            <Text style={styles.subtitle}>{props.route.params.description}</Text>
            <View style={styles.separator}/>
            <ScrollView>
                <View style={styles.inputContainer}>
                    {InputFields}
                </View>
                <TouchableOpacity   style={styles.submit}
                                    onPress={() => RunCalculation(props.route.params.function, inputHooks, outputHooks)}>
                    <Text style={styles.submittext}>Run Calculation</Text>
                </TouchableOpacity>
                <View style={styles.outputContainer}>
                    {OutputFields}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#000",
        paddingTop: Constants.statusBarHeight,
    },
    title: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        padding: 10,
        marginTop: 10,
    },
    subtitle: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        padding: 7,
    },
    separator: {
        margin: 3,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#ff0000",
        borderStyle: "solid",
    },
    text: {
        color: "white",
        backgroundColor: "red",
        textAlign: "center",
    },
    submit: {
        color: "red",
        backgroundColor: "#444",
        width: "100%",
        borderRadius: 20,
    },
    submittext: {
        fontWeight: "bold",
        fontSize: 15,
        color: "red",
        textAlign: "center",
        padding: 10
    },
    textEntry: {
        color: "white",
        fontSize: 18,
        margin: 5,
        backgroundColor: "#444",
        flex: 1,
        padding: 4,
    },
    inputContainer: {
        borderColor: "red",
        borderWidth: 1,
        borderStyle: "dotted",
        margin: 10,
    },
    outputContainer: {
        borderColor: "red",
        borderWidth: 1,
        borderStyle: "dotted",
        margin: 10,
    },
    displayLabel: {
        color: "white",
        fontSize: 18
    },
    inputRow: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    multipleSelect: {
        flex: 1,
        backgroundColor: "#444",
        height: 50,
        margin: 5,
    },
    multipleSelectText: {
        fontSize: 18,
        color: "#ccc",
        height: 50,
        paddingLeft: 5
    }

});
