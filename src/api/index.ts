import axios from 'axios';

interface RevenueParams {
    mining_power: number;
    selected_months: string;
    response_sample_rate: number;
    start_date: string;
}

interface FiatRevenue {
    date: number; // unix timestamp
    fiat_revenue: number;
}

interface SatoshiRevenue {
    date: number;
    satoshi_revenue: number;
}

interface RevenueResult {
    fiat_revenues: FiatRevenue[];
    satoshi_revenues: SatoshiRevenue[];
    hodlers_revenues: FiatRevenue[];
    total_fiat_revenue: number;
    total_satoshis: number;
    current_total_sats_fiat_value: number;
    current_exchange_rate: number;
}

const API_BASE_URL = "";

export const API_ENDPOINTS = {
  calculate_revenue: `${API_BASE_URL}/api/heating/calculate-revenue`,
};

export async function fetchMiningRevenue(params: RevenueParams) {
    console.log(API_ENDPOINTS)
    return await axios.put(API_ENDPOINTS.calculate_revenue, null, {
        params: {
            mining_power: params.mining_power,
            selected_months: params.selected_months,
            response_sample_rate: params.response_sample_rate,
            start_date: params.start_date
        }
    });
}