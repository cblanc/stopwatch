import { assert } from "chai";
import { Stopwatch } from "../lib/index";

const DEVIATION = 0.5; // 20% deviation permissible

const isWithinRange = (val: number, target: number, deviation: number): boolean => {
	const lowerBound = target * (1 - deviation);
	const upperBound = target * (1 + deviation);
	return val >= lowerBound && val <= upperBound;
};

describe("Stopwatch", () => {
	it ("measures seconds", done => {
		const stopwatch = Stopwatch();
		setTimeout(() => {
			const time = stopwatch.split("s");
			assert.isTrue(isWithinRange(time, 1, DEVIATION));
			done();
		}, 1000);
	});

	it ("measures milliseconds", done => {
		const stopwatch = Stopwatch();
		setTimeout(() => {
			const time = stopwatch.split("ms");
			assert.isTrue(isWithinRange(time, 10, DEVIATION));
			done();
		}, 10);
	});

	it ("measures milliseconds by default", done => {
		const stopwatch = Stopwatch();
		setTimeout(() => {
			const time = stopwatch.split();
			assert.isTrue(isWithinRange(time, 10, DEVIATION));
			done();
		}, 10);
	});

	it ("measures nanoseconds", done => {
		const stopwatch = Stopwatch();
		setTimeout(() => {
			const time = stopwatch.split("ns");
			assert.isTrue(isWithinRange(time, 10000000, DEVIATION));
			done();
		}, 10);
	});
});
