import { calculateTaxOnIncome } from './TaxCalculate';

test('Calculate Taxable Earn on Ghs 419 Chargeable Income', () => {
	const result = calculateTaxOnIncome(419);
	expect(result).toBe(5.0);
});

test('Calculate Taxable Earn on Ghs 539 Chargeable Income', () => {
	const result = calculateTaxOnIncome(539);
	expect(result).toBe(17.0);
});

test('Calculate Taxable Earn on Ghs 3539 Chargeable Income', () => {
	const result = calculateTaxOnIncome(3539);
	expect(result).toBe(542.0);
});

test('Calculate Taxable Earn on Ghs 20,000 Chargeable Income', () => {
	const result = calculateTaxOnIncome(20000);
	expect(result).toBe(4657.25);
});

test('Calculate Taxable Earn on Ghs 30,000 Chargeable Income', () => {
	const result = calculateTaxOnIncome(30000);
	expect(result).toBe(7657.25);
});

test('Calculate Taxable Earn on Ghs 60,000 Chargeable Income', () => {
	const result = calculateTaxOnIncome(60000);
	expect(result).toBe(10657.25);
});
