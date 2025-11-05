import { useState, useMemo, FormEvent, KeyboardEvent } from "react";
import { fetchMiningRevenue } from "../api";
import { HistoricMiningRevenueGraph } from "./HistoricMiningRevenueGraph";
import { Spinner } from "./Spinner";

type MiningInputs = {
    miningPower: number | null;
    responseSampleRate: number;
    startDate: string;
    months: number[];
}

// TOOD: do i need to add a sample response rate to the my chart?
// you can ignore

// move types to resuable place (DRY)
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

interface ChartDataPoint {
    date: string;
    fiat_revenue: number;
    satoshii_revenue: number;
}

// formatting for input, is there a max/min value?
function clampInt(value: string): number | null {
    // allow empty => null; otherwise parse non-negative int
    if (value.trim() === "") return null;
    const parsed = parseInt(value.replace(/[^\d]/g, ""), 10);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : null;
}

function isValid(inputs: MiningInputs) {
    return (
        inputs.miningPower !== null &&
        inputs.miningPower >= 0 &&
        inputs.startDate &&
        inputs.months.length > 0
    );
}


export function MiningRevenueCalculator() {
    const [loadingChart, setLoadingChart] = useState(false);
    const [inputs, setInputs] = useState<MiningInputs>({
        miningPower: null,
        responseSampleRate: 4,
        startDate: (new Date()).toString(),
        months: []
    });

    const [miningData, setMiningData] = useState<RevenueResult | null>(null);
    
    const [touched, setTouched] = useState<{power?: Boolean, date?: Boolean; months?: boolean}>({});
    const [graphData, setGraphData] = useState([]);
    const [chartError, setChartError] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!isValid(inputs)) return;
        
        try {
            setChartError(false);
            setLoadingChart(true);
            const res = await fetchMiningRevenue({
                mining_power: inputs.miningPower!,
                response_sample_rate: inputs.responseSampleRate,
                start_date: inputs.startDate + 'T00:00:00Z',
                selected_months: inputs.months.join(',')
            })
    
            if (res.data) {
                setMiningData(res.data);
            }
        } catch(error) {
            setChartError(true);
            console.log(error)
        }

        setLoadingChart(false);
    }

    const handleDateChange = (val: string) => {
        setInputs((prev) => ({...prev, startDate: val}));
    }

    const handlePowerChange = (raw: string) => {
        setInputs((prev) => ({ ...prev, miningPower: clampInt(raw)}))
    }

    const toggleMonth = (m: number) => {
        setInputs((prev) => {
            const exists = prev.months.includes(m);
            const months = exists ? prev.months.filter((x) => x !== m) : [...prev.months, m].sort((a, b) => a - b);
            return { ...prev, months };
        });
    }

    const onKeyToggle = (e: KeyboardEvent<HTMLButtonElement>, m: number) => {
        if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            toggleMonth(m);
        }

    }

    const canSubmit = isValid(inputs);


    const displayMiningData = () => {
        if (loadingChart) {
            return <Spinner label={"Loading Chart"} />
        }

        if (chartError) {
            return <h2 className="text-red-600 font-semibold text-center">Error loading chart data, please try again.</h2>
        }

        if (!miningData) return;

        return (
            <HistoricMiningRevenueGraph {...miningData} />
        );
    }

    return (
        <>
        {/* TODO: make sure it works with a dark and light mode */}
            {/* <h1>Mining Revenue Calculators</h1> */}

            {/* calculator */}
            <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto rounded-2xl border border-zinc-800/50 bg-zinc-900/40 backdrop-blur p-6 md:p-8 shadow-xl">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-6">Historic Mining Revenue Calculator</h3>
                <div className="mb-5">
                    <label className="block text-sm font-medium mb-1">
                        Mining Power
                    </label>
                    <input 
                        id="miningPower"
                        name="miningPower"
                        type="text"
                        inputMode="numeric"
                        autoComplete="off"
                        placeholder="e.g., 1200"
                        className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 outline-none focus:border-zinc-400"
                        value={inputs.miningPower ?? ""}
                        onChange={(e) => handlePowerChange(e.target.value)}
                        onBlur={() => setTouched((t) => ({...t, power: true}))} 
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="startDate" className="block text-sm font-medium mb-1">
                        Start Date
                    </label>
                    <input 
                        id="startDate"
                        name="startDate"
                        type="date"
                        className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 outline-none foucs:border-zinc-400"
                        value={inputs.startDate}
                        onChange={(e) => handleDateChange(e.target.value)}
                        onBlur={() => setTouched((t) => ({...t, date: true}))}
                    />
                </div>

                <fieldset className="mb-6">
                    <legend className="block text-sm font-medium mb-2">Months (select one or more)</legend>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => {
                            const active = inputs.months.includes(m);

                            return (
                                <button 
                                    type="button"
                                    key={m}
                                    aria-pressed={active}
                                    onClick={() => toggleMonth(m)}
                                    onKeyDown={(e) => onKeyToggle(e, m)}
                                    className={[
                                        "rounded-xl border px-3 py-2 text-sm font-medium transition",
                                        active
                                            ? "border-zinc-300 bg-zinc-100 text-zinc-900"
                                            : "border-zinc-700 bg-zing-950 hover:border-zinc-500",
                                    ].join(" ")}
                                    >
                                    {m}
                                </button>
                            );
                        })}
                    </div>
                </fieldset>

                <div className="flex gap-3">
                    <button type="submit" disabled={!canSubmit} className={[
                        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold",
                        canSubmit
                        ? "bg-white text-zinc-900 hover:brightness-95"
                        : "bg-zinc-800 text-zinc-400 cursor-not-allowed"
                    ].join(" ")}>
                        Calculate
                    </button>
                </div>
            </form>
            {/* ghost loader/error message */}
            {/* basic ui of data */}
            {displayMiningData()}
        </>
    )
}