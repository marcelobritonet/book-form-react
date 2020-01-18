import React, { useRef } from "react";
import styled from "styled-components";

function Select({ options, setValue }) {
    const _input = useRef();

    const onChange = () => {
        setValue(_input.current.value)
    };

    return <Label>
        <select
            ref={ _input }
            onChange={ onChange }
        >
            { options.map((item, index) =>
                <option
                    key={ index }
                    value={ item.value }
                >{ item.label }</option>
            )}
        </select>
    </Label>
}

const Label = styled.label``;

export default Select;
