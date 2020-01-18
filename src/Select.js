import React, { useRef } from "react";
import styled from "styled-components";

function Select({ options, setValue }) {
    const _input = useRef();

    return <Label>
        <select
            ref={ _input }
            onChange={ () => setValue(_input.current.value) }
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
