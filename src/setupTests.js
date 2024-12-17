// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock the Canvas API for Chart.js
jest.mock("react-chartjs-2", () => ({
    Pie: () => <div>Pie Chart Mock</div>,
    Line: () => <div>Line Chart Mock</div>,
    Bar: () => <div>Bar Chart Mock</div>,
  }));
  
  // Mock the Canvas API for getContext()
  HTMLCanvasElement.prototype.getContext = jest.fn();
  
