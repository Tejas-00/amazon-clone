import {formatCurrency} from '../scripts/utils/money.js';

console.log('checking for base case');
if (formatCurrency(2095) === '20.95') {
    console.log('Test passed');
} else {
    console.log('Test failed');
}

console.log('checking for round-off');

if (formatCurrency(2000.5) === '20.01') {
    console.log('Test passed');
} else {
    console.log('Test failed');
}