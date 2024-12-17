import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import StreamTable from "../Components/StreamTable";
import { DataContext } from "../Components/context/DataContext";

const mockRecentStreams = [
  { song: "Blinding Lights", artist: "The Weekend", date: "2024-05-01", streams: 200, user: 1001 },
  { song: "Save Your Tears", artist: "The Weekend", date: "2024-05-02", streams: 180, user: 1002 },
];

describe("StreamTable Component", () => {
  test("filters data correctly after debounce delay", async () => {
    render(
      <DataContext.Provider value={{ recentStreams: mockRecentStreams }}>
        <StreamTable />
      </DataContext.Provider>
    );

    const searchInput = screen.getByPlaceholderText("Search by Song or Artist");

    fireEvent.change(searchInput, { target: { value: "Blinding" } });

    await waitFor(() => {
      expect(screen.getByText("Blinding Lights")).toBeInTheDocument();
      expect(screen.queryByText("Save Your Tears")).not.toBeInTheDocument();
    });
  });
});
