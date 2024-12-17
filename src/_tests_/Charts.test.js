import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PieChart from "../Components/charts/PieChart";
const mockChartData = [
  { source: "Subscriptions", value: 60000 },
  { source: "Ads", value: 25000 },
];

describe("RevenueChart Component", () => {
  test("renders pie chart with provided data", () => {
    render(<PieChart data={mockChartData} />);

    expect(screen.getByText("Pie Chart Mock")).toBeInTheDocument();
  });
});