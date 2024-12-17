import React from "react";
import { render, screen } from "@testing-library/react";
import RevenueChart from "../components/charts/RevenueChart";

const mockChartData = [
  { source: "Subscriptions", value: 60000 },
  { source: "Ads", value: 25000 },
];

describe("RevenueChart Component", () => {
  test("renders pie chart with provided data", () => {
    render(<RevenueChart data={mockChartData} />);
    // Check that chart renders
    expect(screen.getByText("Subscriptions")).toBeInTheDocument();
    expect(screen.getByText("Ads")).toBeInTheDocument();
  });
});
