import React, { useRef } from "react";
import styled from 'styled-components';

function Checkbox({ checked, setValue }) {
    const _input = useRef();

    return <Label htmlFor="select">
        <Box type="checkbox" id="select"
             ref={ _input}
             onChange={ () => setValue(_input.current.checked) }
        />Tenho um código</Label>
}

const Label = styled.label``;

const Box = styled.input`
    border: 1px solid #ccc;
    width: 20px;
    height: 20px;
    background-color: ${ props => props.active ? '#ccc' : '#fff' };
`;

export default Checkbox;
