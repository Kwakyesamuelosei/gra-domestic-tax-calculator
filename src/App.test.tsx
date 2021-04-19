import React from "react";
import { render, screen } from "@testing-library/react";
import App from './App'


describe("<App />", () => {

  it("Renders <App /> component correctly", () => {
    const { getByText } = render(<App />);

    const chargeableInput = screen.getByLabelText("Enter Chargeable income")
    const payableInput = screen.getByLabelText ("Payable Amount GHS")

    expect(getByText(/GRA DOMESTIC TAX CALCULATORS/i)).toBeInTheDocument();
    expect(getByText(/PAY AS YOU GO/i)).toBeInTheDocument();
    expect(chargeableInput).toBeInTheDocument();
    expect(payableInput).toBeInTheDocument();

  });

})