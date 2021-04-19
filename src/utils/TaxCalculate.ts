let result: number;
let remainingValue: number;
let totalTax: Array<number> = [];

export const calculateTaxOnIncome = (monthlyIncome: number) => {
	result = 0;
	remainingValue = 0;
	totalTax = [];

	remainingValue = monthlyIncome - 319;

	if (remainingValue > 100) {
		remainingValue = remainingValue - 100;
		calculateRateTaxIncome(0.05, 100);
		calculateNext120TaxOnIncome(remainingValue);
	} else {
		calculateRateTaxIncome(0.05, remainingValue);
	}

	result = totalTax.reduce(
		(accumulator, currentValue) => accumulator + currentValue
	);

	return result;
};

const calculateRateTaxIncome = (rate: number, income: number) => {
	totalTax.push(rate * income);
};

const calculateNext120TaxOnIncome = (remainingValue: number) => {
	if (remainingValue > 120) {
		remainingValue = remainingValue - 120;
		calculateRateTaxIncome(0.1, 120);
		calculateNext3000TaxOnIncome(remainingValue);
	} else {
		calculateRateTaxIncome(0.1, remainingValue);
	}
};

const calculateNext3000TaxOnIncome = (remainingValue: number) => {
	if (remainingValue > 3000) {
		remainingValue = remainingValue - 3000;
		calculateRateTaxIncome(0.175, 3000);
		calculateNext16461TaxOnIncome(remainingValue);
	} else {
		calculateRateTaxIncome(0.175, remainingValue);
	}
};

const calculateNext16461TaxOnIncome = (remainingValue: number) => {
	if (remainingValue > 16461) {
		remainingValue = remainingValue - 16461;
		calculateRateTaxIncome(0.25, 16461);
		calculateExceeding20000TaxOnIncome(remainingValue);
	} else {
		calculateRateTaxIncome(0.25, remainingValue);
	}
};

const calculateExceeding20000TaxOnIncome = (remainingValue: number) => {
	if (remainingValue > 20000) {
		remainingValue = remainingValue - 20000;
		calculateRateTaxIncome(0.3, 20000);
	} else {
		calculateRateTaxIncome(0.3, remainingValue);
	}
};
