export type TimeUnit = "ns" | "ms" | "s";

interface UnitConverter {
	(number: number): number;
}

type ConversionTable = {
	[unit in TimeUnit]: UnitConverter;
}

export interface IStopwatch {
	(): StopwatchInstance;
}

export interface StopwatchInstance {
	split(unit?: TimeUnit): number;
}

const MS_PER_NS = 1e-6;
const SEC_PER_NS = 1e-9;
const nanosecondsTo: ConversionTable = {
	"ns": ns => ns,
	"ms": ns => ns * MS_PER_NS,
	"s": ns => ns * SEC_PER_NS,
};

const NS_PER_S = 1e9;
const MS_PER_S = 1e3;
const secondsTo: ConversionTable = {
	"ns": s => s * NS_PER_S,
	"ms": s => s * MS_PER_S,
	"s": s => s,
};

const DEFAULT_UNIT: TimeUnit = "ms";

export const Stopwatch: IStopwatch = () => {
	const start = process.hrtime();

	return {
		split: unit => {
			const u = unit || DEFAULT_UNIT;
			const [seconds, nanoseconds] = process.hrtime(start);

			return secondsTo[u](seconds) + nanosecondsTo[u](nanoseconds);
		}
	};
};
