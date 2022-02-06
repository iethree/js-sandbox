import assert from 'assert'
import { hello } from '../src/sandbox';

assert.equal(hello('TypeScripts'), 'Hello, TypeScripts!');

console.log('✅ All tests passed!');
