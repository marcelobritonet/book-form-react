import { serialize } from "../services/util.service";

const api = ({ rooms, hosts, checkIn, checkOut, promotionalCode, promotionalCodeType, child }) => {
    const baseUrl = 'https://reservations.omnibees.com/';
    const params = {
        q: 6781,
        NRooms: rooms,
        ad: hosts,
        CheckIn: buildDate(checkIn),
        CheckOut: buildDate(checkOut),
        Code: promotionalCode,
        group_code: promotionalCodeType,
        ch: child.length,
        ag: child.join(';'),
        lang: 'pt-BR'
    };
    alert(`${ baseUrl }${ serialize(params) }`);
};

const buildDate = datetime => {
    const day = ("0" + datetime.getDate()).slice(-2);
    const month = ("0" + (datetime.getMonth() + 1)).slice(-2);
    return `${ day }${ month }${ datetime.getFullYear() }`;
};

export {
    api
}
