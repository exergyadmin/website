import { useState } from 'react';
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

export function HistoricMiningRevenueGraph({
    fiat_revenues,
    satoshi_revenues,
    hodlers_revenues,
    total_fiat_revenue,
    total_satoshis,
    current_total_sats_fiat_value,
    current_exchange_rate
}: RevenueResult) {
    return (
        <div className="flex flex-col items-start text-left space-y-2">
            {/* <h1>Results</h1> */}
            <h2 style={{ color: '#8884d8' }} title="Revenue generated if sats earned from mining was exchanged for fiat">
                Total Fiat Revenue: ${Math.round(total_fiat_revenue).toLocaleString('en-US')}
            </h2>
            <h2 style={{ color: '#FFA500' }} title="Revenue generated if sats earned from mining was held to current date and not exchanged for fiat">
                Hodler's Revenue: ${Math.round(current_total_sats_fiat_value).toLocaleString('en-US')}  
                <span className="ml-2 text-xs">(at today's exchange rate of ${current_exchange_rate})</span>
            </h2>
            <h2 style={{ color: '#82ca9d' }} title="Total Revenue generated in sats">
                Total Bitcoin Revenue (sats): {total_satoshis.toLocaleString('en-US')}
            </h2>
        </div>
    )
}