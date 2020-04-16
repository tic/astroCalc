// The InteractionLibrary contains enums you can use
import InteractionLibrary from './components/InteractionLibrary.js';

import TwoValueSum from './components/functions/TwoValueSum.js';
import SolarPosition from './components/functions/SolarPosition.js';

const Manifest = [
    {
        name: "Solar Position",
        description: "Calculates the position of the Sun in ecliptic coordinates.",
        function: SolarPosition,
        inputs: [
            {name: "Julian Date", type: InteractionLibrary.TextField}
        ],
        outputs: [
            {name: "Ecliptic Lattitude", type: InteractionLibrary.TextField},
        ]
    },
    {
        name: "Tester Calculator",
        description: "Accepts various inputs and produces a range of outputs for testing purposes.",
        function: TwoValueSum,
        inputs: [
            {type: InteractionLibrary.TextField, name: "Value A"},
            {type: InteractionLibrary.TextField, name: "Value B"},
            {type: InteractionLibrary.TextField, name: "Value C"},
            {type: InteractionLibrary.MultipleSelect, name: "Month", options: [
                {label: "January", value: 0},
                {label: "February", value: 1},
                {label: "March", value: 2},
                {label: "April", value: 3},
                {label: "May", value: 4},
                {label: "June", value: 5},
                {label: "July", value: 6},
                {label: "August", value: 7},
                {label: "September", value: 8},
                {label: "October", value: 9},
                {label: "November", value: 10},
                {label: "December", value: 11},
            ]},
        ],
        outputs: [
            {type: InteractionLibrary.TextField, name: "Sum of A and B"},
            {type: InteractionLibrary.TextField, name: "A minus B"},
            {type: InteractionLibrary.TextField, name: "B minus A"},
            {type: InteractionLibrary.TextField, name: "C times A"},
        ]
    }
]

export default Manifest;
