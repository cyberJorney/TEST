import capitalize from '../src/bin/capitalize.js';

import { strict as assert } from 'node:assert';

assert.deepEqual(capitalize('hello'), 'Hello');

assert.deepEqual(capitalize(''), '');

console.log('Все тесты пройдены!');
