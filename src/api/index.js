import axios from "axios";

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
    let changbleUrl = url;

    if(country) {
        changbleUrl = `${url}/countries/${country}`
    }

    try {
        const {data : {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changbleUrl)
        return {confirmed, recovered, deaths, lastUpdate}
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`)
        const modifiedData = data.map((dailyData) => ({
            confirmed : dailyData.confirmed.total,
            deaths : dailyData.deaths.total,
            date : dailyData.reportDate,
        }))

        return modifiedData
    } catch (error) {
        
    }
}

export const fetchCountries = async () => {
    return await axios.get(`${url}/countries`)
}