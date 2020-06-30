
import {IApiSummaryResponse,ICountryWiseStats,IApiSummaryGlobalResponse,ICountryWiseTotalData} from './apiInterface'

export interface IGlobalState
{
    summaryData?:IApiSummaryGlobalResponse
    countries?:Array<ICountryWiseTotalData>
    lastUpdate?:Date | string
    countryWiseStats?:Array<ICountryWiseStats>
} 


