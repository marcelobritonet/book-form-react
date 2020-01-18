import React, { useRef, useEffect } from "react";
import styled from 'styled-components';

function NumberPick({ actual, set, maxAllowed, minAllowed }) {
    const _input = useRef();

    useEffect(() => {
        _input.current.value = actual;
    }, [actual]);

    const sum = () => {
        if((actual + 1) < maxAllowed) {
            set(actual + 1);
        }
    };

    const sub = () => {
        if (actual - 1 > minAllowed) {
            set(actual - 1);
        }
    };

    const changeValue = () => {
        const inputedValue = parseInt(_input.current.value);

        if ((inputedValue > minAllowed) && (inputedValue < maxAllowed)) {
            set(inputedValue);
        } else {
            _input.current.value = actual;
        }
    };

    return <Wrapper>
        <Button onClick={ () => sum() }>+</Button>
        <Total
            onBlur={ () => changeValue() }
            ref={ _input }
        />
        <Button onClick={ () => sub() }>-</Button>
    </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  padding: 15px;
  background: #ccc;
  cursor: pointer;
`;

const Total = styled.input`
  padding: 5px;
`;

export default NumberPick;
