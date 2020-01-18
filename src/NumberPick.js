import React from "react";
import styled from 'styled-components';

function NumberPick({ actual, set, maxAllowed, minAllowed }) {
    const sum = () => {
        const summed = (actual + 1) > maxAllowed ? actual : actual + 1;
        set(summed);
    };

    const sub = () => {
        const min = typeof minAllowed === 'number' ? minAllowed : 0;
        const subtracted = (actual - 1 <= min) ? min : actual - 1;
        set(subtracted);
    };

    return <Wrapper>
        <Button onClick={() => sum() }>+</Button>
        <Total>{ actual }</Total>
        <Button onClick={() => sub() }>-</Button>
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

const Total = styled.div`
  padding: 5px;
  
`;

export default NumberPick;
