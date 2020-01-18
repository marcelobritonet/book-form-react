import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NumberPick from './NumberPick';
import Checkbox from "./Checkbox";
import PromotionalCode from "./PromotionalCode";
import Child from "./Child";

function Form() {
    const initialDate = new Date();
    const [checkIn, setCheckIn] = useState(initialDate);
    const [checkOut, setCheckOut] = useState(initialDate);
    const [rooms, setRooms] = useState(1);
    const [hosts, setHosts] = useState(2);
    const [child, setChild] = useState([]);
    const [hasPromotionalCode, setHasPromotionalCode] = useState(false);
    const [promotionalCodeType, setPromotionalCodeType] = useState('');
    const [promotionalCode, setPromotionalCode] = useState('');

    const promotionalCodeOptions = [
        {
            label: 'Código Promocional',
            value: 'promo'
        }, {
            label: 'Ticket',
            value: 'ticket'
        }
    ];

    const send = e => {
        const baseUrl = 'https://reservations.omnibees.com/';
        const params = {
            q: 123,
            NRooms: 1,
            ad: hosts,
            CheckIn: buildDate(checkIn),
            CheckOut: buildDate(checkOut),
            Code: promotionalCode,
            group_code: promotionalCodeType,
            ch: child.length,
            ag: child,
            lang: 'pt-BR'
        };
        console.log(params);
        e.preventDefault()
    };

    const buildDate = datetime => {
        const day = ("0" + datetime.getDate()).slice(-2);
        const month = ("0" + (datetime.getMonth() + 1)).slice(-2);
        return `${ day }${ month }${ datetime.getFullYear() }`;
    };

    return <form>
        <p>Check In</p>
        { checkIn.getDate() }/{ checkIn.getMonth() + 1 }
        <br/>

        <p>Check Out</p>
        { checkOut.getDate() }/{ checkOut.getMonth() + 1 }
        <br/>

        <DatePicker
            selected={ checkIn }
            onChange={ setCheckIn }
        />

        <DatePicker
            selected={ checkOut }
            onChange={ setCheckOut }
        />

        <div>Quartos</div>
        <NumberPick
            maxAllowed={ 5 }
            minAllowed={ 1 }
            actual={ rooms }
            set={ setRooms }
        />

        <div>Adultos</div>
        <NumberPick
            maxAllowed={ 10 }
            minAllowed={ 1 }
            actual={ hosts }
            set={ setHosts }
        />

        <div>Crianças</div>
        <Child
            maxAllowed={ 12 }
            minAllowed={ 0 }
            child={ child }
            setChild={ setChild }
        />

        <Checkbox
            checked={ hasPromotionalCode }
            setValue={ setHasPromotionalCode }
        />

        { hasPromotionalCode &&
        <PromotionalCode
            promotionalCodeOptions={ promotionalCodeOptions }
            promotionalCode={ promotionalCode }
            setPromotionalCode={ setPromotionalCode }
            setPromotionalCodeType={ setPromotionalCodeType }
        />
        }

        <button
            onClick={ send }
        >Enviar</button>
    </form>
}

export default Form;
