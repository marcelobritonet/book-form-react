import React, { useState } from "react";
import styled from 'styled-components';
import NumberPick from "./NumberPick";

function Child({ child, setChild, maxAllowed, minAllowed }) {
    const [qt, set] = useState([0]);

    const handle = val => {
        setChild(val)
    };

    return <div>
        { qt.toString() }
        { qt.map((perChild, index) => (
            <NumberPick
                key={ index }
                maxAllowed={ 10 }
                minAllowed={ 1 }
                actual={ 1 }
                set={ handle }
            />
        ))}
    </div>
}

export default Child;
