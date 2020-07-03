import axios from 'axios'

const base_url = 'https://corona.lmao.ninja/v2/countries/';
const country = ['indonesia', 'malaysia', 'usa', 'italy', 'china', 
                 'singapore', 'thailand', 'turkey', 'india'];

export const increaseCount = () => (dispatch) => {
    process('INCREMENT', dispatch)
}

export const decreaseCount = () => (dispatch) => {
    process('DECREMENT', dispatch)
}

const process = async (typeCount, dispatch) => {
    const getCountry = country[Math.floor(Math.random()*country.length)];
    const res = await axios.get(base_url + getCountry);
    if (res) {
        setTimeout(() => {
            dispatch({ type: typeCount});
            dispatch({ type: 'COUNTRY_INFO', value: res.data });
        }, 4000);
    }
}