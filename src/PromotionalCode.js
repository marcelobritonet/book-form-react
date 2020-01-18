import React, {useRef} from "react";
import styled from 'styled-components';
import Select from "./Select";

function PromotionalCode({ promotionalCodeOptions, setPromotionalCode, setPromotionalCodeType, promotionalCode }) {
    const _input = useRef();

    return <Wrapper>
        <Select
            options={ promotionalCodeOptions }
            setValue={ setPromotionalCodeType }
        />

        <Label>
            <Input
                ref={ _input }
                value={ promotionalCode }
                onChange={ () => setPromotionalCode(_input.current.value) }
                placeholder="O seu código"
            />
        </Label>
    </Wrapper>;
}

const Wrapper = styled.div``;
const Label = styled.label``;
const Input = styled.input``;

export default PromotionalCode;
