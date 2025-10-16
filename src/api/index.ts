import axios from 'axios';

interface RevenueParams {
    mining_power: number;
    selected_months: string;
    response_sample_rate: number;
    start_date: string;
}

const API_BASE_URL = "";

export const API_ENDPOINTS = {
  calculate_revenue: `${API_BASE_URL}/api/heating/calculate-revenue`,
};

export async function fetchMiningRevenue(params: RevenueParams) {
    console.log('paramsssss', params)
    return await axios.put(API_ENDPOINTS.calculate_revenue, null, {
        params: {
            mining_power: params.mining_power,
            selected_months: params.selected_months,
            response_sample_rate: params.response_sample_rate,
            start_date: params.start_date
        }
    })
}