import { createServer } from "miragejs";

export function makeServer() {
  createServer({
    routes() {
      this.namespace = "api";

      this.get("/metrics", () => ({
        totalUsers: 50000,
        activeUsers: 12000,
        totalStreams: 350000,
        revenue: 85000,
        topArtist: "The Weekend",
      }));

      this.get("/user-growth", () => [
        { month: "Jan", totalUsers: 10000, activeUsers: 2000 },
        { month: "Feb", totalUsers: 15000, activeUsers: 4000 },
        { month: "Mar", totalUsers: 20000, activeUsers: 5000 },
        { month: "Apr", totalUsers: 25000, activeUsers: 8000 },
        { month: "May", totalUsers: 30000, activeUsers: 10000 },
        { month: "Jun", totalUsers: 35000, activeUsers: 11000 },
        { month: "Jul", totalUsers: 40000, activeUsers: 11500 },
        { month: "Aug", totalUsers: 45000, activeUsers: 11800 },
        { month: "Sep", totalUsers: 50000, activeUsers: 12000 },
      ]);

      this.get("/revenue-distribution", () => [
        { source: "Subscriptions", value: 60000 },
        { source: "Ads", value: 25000 },
        {source: "Events", value:15000}
      ]);

      this.get("/top-streamed-songs", () => [
        { song: "Blinding Lights", streams: 2000 },
        { song: "Save Your Tears", streams: 1800 },
        { song: "Levitating", streams: 1600 },
        { song: "Peaches", streams: 1400 },
        { song: "Good 4 U", streams: 1300 },
      ]);

      this.get("/recent-streams", () => [
        { id: 1, song: "Blinding Lights", artist: "The Weekend", date: "2024-05-01", streams: 200, user: 1001 },
        { id: 2, song: "Save Your Tears", artist: "The Weekend", date: "2024-05-02", streams: 180, user: 1002 },
        { id: 3, song: "Levitating", artist: "Dua Lipa", date: "2024-05-03", streams: 160, user: 1003 },
        { id: 4, song: "Peaches", artist: "Justin Bieber", date: "2024-05-04", streams: 140, user: 1004 },
        { id: 5, song: "Good 4 U", artist: "Olivia Rodrigo", date: "2024-05-05", streams: 130, user: 1005 },
      ]);

      this.passthrough((request) => {
        console.log("Unmatched request:", request.url);
      });
    },
  });
}
