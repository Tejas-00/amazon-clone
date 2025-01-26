import {formatCurrency} from '../scripts/utils/money.js';

describe('test suite formatCurrency', function() {
    it('should return 20.95 for 2095', function() {
        expect(formatCurrency(2095)).toBe('20.95');
    });
    it('should return 20.01 for 2000.5', function() {
        expect(formatCurrency(2000.5)).toBe('20.01');
    });
    it('should return 0.00 for 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    })
});