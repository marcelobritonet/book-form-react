import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import NumberPick from "./NumberPick";

function Child({ child, setChild, maxAllowed, minAllowed }) {
    const [ages, setAges] = useState(child);

    useEffect(() => {
        setChild(ages)
    }, [ages]);

    const handle = (val, index) => {
        const newList = ages.map((item, indexItem) => indexItem === index ? val : item);
        setAges(newList);
    };

    const add = () => {
        setAges([...ages, 0]);
    };

    const remove = index => {
        const newList = ages.filter((item, indexItem) => indexItem !== index);
        setAges(newList);
    };

    return <div>
        <div onClick={ add }>add</div>

        { ages.map((age, index) => (
            <div key={ index }>
                <NumberPick
                    maxAllowed={ maxAllowed }
                    minAllowed={ minAllowed }
                    actual={ age }
                    set={ handle }
                    index={ index }
                />
                <div onClick={ () => remove(index) }>remove</div>
            </div>
        ))}
    </div>
}

export default Child;
