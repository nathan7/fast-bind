[![Build Status](https://travis-ci.org/nathan7/fast-bind.svg?branch=master)](https://travis-ci.org/nathan7/fast-bind)
# fast-bind
  
  The fastest `Function#bind` I could find.

```
Function#bind (native) x 803,410 ops/sec ±2.35% (79 runs sampled)
Function#bind (slice) x 4,771,960 ops/sec ±0.95% (99 runs sampled)
Function#bind (concat) x 3,838,614 ops/sec ±1.41% (95 runs sampled)
Function#bind (loop) x 6,440,278 ops/sec ±0.69% (97 runs sampled)
Fastest is Function#bind (loop)
8.02x as fast as Function#bind (native)
```

## Installation

    npm install fast-bind

## API

```js
Function.prototype.bind = require('fast-bind')
```
