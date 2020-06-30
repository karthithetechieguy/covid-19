import axios from 'axios';
import {ICountryWiseStatsAll} from './../interfaces/apiInterface';

const summaryUrl = "https://api.covid19api.com/summary";
const fetchCountriesUrl="https://api.covid19api.com/countries";

export const fetchSummaryData = async () => {
    try{
        const response:any=await axios.get(summaryUrl);
        if(response.status != 200)
        {
            throw new Error("Api call failed");
        }
        let {data:{Global,Countries,Date}} = response;
        return {Global,Countries,Date};
    }
    catch(e)
    {

    }

}


export const fetchCountries=async ()=>
{
    const response:any=await axios.get(fetchCountriesUrl);
    return response
}


export const fetchCountryWiseDayData=async (slug:string)=>
{
    console.log(slug);
    const url=`https://api.covid19api.com/country/${slug}?from=2020-01-01T00:00:00Z&to=2020-06-01T00:00:00Z`
    const response:any=await axios.get(url);
    console.log(response);

    return response.data.map((e:ICountryWiseStatsAll)=>
    {
        return {
            Confirmed:e.Confirmed,
            Deaths:e.Deaths,
            Recovered:e.Recovered,
            Active:e.Active,
            Date:e.Date
        }
    })
}