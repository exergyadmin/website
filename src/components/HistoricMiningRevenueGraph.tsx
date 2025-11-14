import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from 'recharts';

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

interface ChartDataPoint {
    date: string;
    fiatRevenue: number;
    satoshiRevenue: number;
    hodlersRevenue: number;
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
    const formatChartData = (data: RevenueResult): ChartDataPoint[] => {
      console.log(data)
        return data.fiat_revenues.map((fiat, index) => ({
            date: new Date(fiat.date * 1000).toLocaleDateString(),
            fiatRevenue: fiat.fiat_revenue / 1000,
            satoshiRevenue: data.satoshi_revenues[index].satoshi_revenue / 100000000,
            hodlersRevenue: data.hodlers_revenues[index].fiat_revenue / 1000
        })
        )
    }

    const chartData = formatChartData({
        fiat_revenues,
        satoshi_revenues,
        hodlers_revenues,
        total_fiat_revenue,
        total_satoshis,
        current_total_sats_fiat_value,
        current_exchange_rate,
      });

      console.log(chartData)
    

    return (
        <div className="flex flex-col items-start text-left space-y-2 mt-2">
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


            <div style={{ width: '100%', height: 500, marginTop: 40 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{ top: 5, right: 90, left: 80, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="date"
                    angle={-45}
                    textAnchor="end"
                    height={70}
                    interval={10}
                  />
                  <YAxis 
                    yAxisId="left"
                    label={{ value: 'Fiat Revenue (K$)', angle: -90, position: 'insideLeft', offset: -40, dy: 110, style: { fill: '#8884d8' } }}
                    hide
                  />
                  <YAxis 
                    yAxisId="right" 
                    orientation="right"
                    label={{ value: 'Bitcoin Revenue (BTC)', angle: 90, position: 'insideRight', offset: -80, dy: 110, style: { fill: '#82ca9d' } }}
                    hide
                  />
                  <Tooltip />
                  <Legend 
                    verticalAlign="bottom" 
                    layout="horizontal"
                    wrapperStyle={{ paddingTop: "60px" }}
                  />
                  <Line
                    yAxisId="left"
                    dataKey="fiatRevenue"
                    stroke="#8884d8"
                    name="Fiat Revenue (K$)"
                    dot={false}
                    strokeWidth={2}
                  />
                  <Line
                    yAxisId="left"
                    dataKey="hodlersRevenue"
                    stroke="#FFA500"
                    name="Hodlers Revenue (K$)"
                    dot={false}
                    strokeWidth={2}
                  />
                  <Line
                    yAxisId="right"
                    dataKey="satoshiRevenue"
                    stroke="#82ca9d"
                    name="Bitcoin Revenue (BTC)"
                    dot={false}
                    strokeWidth={2}
                  />
                </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}