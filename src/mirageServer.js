// src/mirageServer.js
import { createServer, Model } from 'miragejs';

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      card: Model,
      chart:Model
    },

    seeds(server) {
        server.create("card", { name: "totalUsers", value: 17800 });
        server.create("card", { name: "activeUsers", value: 1898 });
        server.create("card", { name: "totalStreams", value: 184501 });
        server.create("card", { name: "Revenue", value: 32500 });
        server.create("card", { name: "TopArtist", value: "Diljeet Dosanjh", imageUrl:'https://elle.in/wp-content/uploads/2024/04/AMAR-SINGH-CHAMKILA-A-FILM-BY-@imtiazaliofficial-@parineetichopra-@arrahman-@kamil_irshad_official-@mohitchauhanofficial-@netflix_in-@saregama_official-768x957.jpg' });
        server.create("chart", {type:"line", chartData:{labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{ label: 'Monthly Sales', data: [65, 59, 80, 81, 56, 55], fill: false, borderColor: 'rgb(75, 192, 192)', tension: 0.1 }]}})
        server.create("chart", {type:"pie", chartData:{labels: ['Red', 'Blue', 'Yellow'],
          datasets: [{ data: [300, 50, 100], backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'] }]}})
        server.create("chart", { type:"bar", chartData: {labels: ['Q1', 'Q2', 'Q3', 'Q4'],
          datasets: [{ label: 'Quarterly Revenue', data: [200, 300, 400, 500], backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 1 }]}})

      },

    routes() {
      this.namespace = 'api';

      this.get("/cards", (schema) => {
        return schema.cards.all();
      });
      this.get("/charts", (schema) => {
        return schema.charts.all()
      }
       )
    }
  });

  return server;
}
