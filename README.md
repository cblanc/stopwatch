# Stopwatch

A timing API that fits in my head

```
npm install @cablanchard/stopwatch
```

## Use

```
const { Stopwatch } = require("@cablanchard/stopwatch");

const stopwatch = Stopwatch.start(); // Start the stopwatch

const result = await doSomething();

// Get the amount of time transpired
stopwatch.split() // => 103.2312 ms
stopwatch.split("s") // => 0.1812 s (seconds)
stopwatch.split("ms") // => 308.2322 ms (milliseconds)
stopwatch.split("ns") // => 490000000 ns (nanoseconds)
```

## License

MIT
