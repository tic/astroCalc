// The InteractionLibrary contains enums you can use
import InteractionLibrary from './components/InteractionLibrary.js';

import TwoValueSum from './components/functions/TwoValueSum.js';


const Manifest = [
    {
        name: "Two Value Sum",
        description: "Provide two number values and the calculator outputs their sum as a single numerical value.",
        function: TwoValueSum,
        inputs: [
            {type: InteractionLibrary.NumericalValue, name: "Value A"},
            {type: InteractionLibrary.NumericalValue, name: "Value B"},
            {type: InteractionLibrary.NumericalValue, name: "Value C"},
            {type: InteractionLibrary.NumericalValue, name: "Value D"},
        ],
        outputs: [
            {type: InteractionLibrary.NumericalValue, name: "Sum of A and B"},
            {type: InteractionLibrary.NumericalValue, name: "A minus B"},
            {type: InteractionLibrary.NumericalValue, name: "B minus A"},
            {type: InteractionLibrary.NumericalValue, name: "C times A"},
        ]
    }
]

export default Manifest;
