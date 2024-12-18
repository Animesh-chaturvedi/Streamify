# **Streamify Dashboard**

## **Overview**
Streamify Dashboard is a responsive and visually appealing single-page analytics dashboard for a fictional music streaming platform, **Streamify**. It allows users to view key metrics, interactive data visualizations, and recent stream records. The dashboard is built using **React**, **React-Bootstrap**, and optimized with responsive design principles to provide a seamless experience across all devices.

---

## **Features**

### **Key Metrics Section**
- Displays the following key metrics in an organized card layout:
  - **Total Users**: Number of registered users.
  - **Active Users**: Users who have streamed at least one song in the last 30 days.
  - **Total Streams**: Total number of song streams.
  - **Revenue**: Total revenue generated.
  - **Top Artist**: The most streamed artist in the last 30 days.

### **Interactive Tabs with Data Visualizations**
- **User Growth**: A **line chart** showing the growth of total and active users over the past year.
- **Revenue Distribution**: A **pie chart** representing the breakdown of revenue (e.g., Subscriptions, Ads).
- **Top Songs**: A **bar chart** highlighting the top 5 most-streamed songs.

### **Recent Streams Table**
- Displays the latest streaming activity in a responsive table with:
  - Song Name
  - Artist
  - Date Streamed
  - Stream Count
  - User ID
- **Features**:
  - **Search**: Filter streams based on song name or artist.
  - **Sorting**: Sort by columns (Song, Artist, Date, Stream Count).
  - **Debounced Input**: Optimized search functionality to improve performance.

### **Responsive Design**
- Fully responsive layout using **React-Bootstrap**.
- Cards and charts adjust automatically on smaller screens (e.g., one column layout for mobile).

### **Performance Optimizations**
- Lazy loading for charts (`PieChart` and `BarChart`) using `React.lazy` and `Suspense`.
- Debounced search input for optimized rendering.
- Memoized computations with `useMemo` and `React.memo` to avoid unnecessary re-renders.

---

## **Tech Stack**

- **Frontend**: React, React-Bootstrap, Bootstrap Icons
- **State Management**: React Context API
- **Charts**: Chart.js (react-chartjs-2)
- **Data Mocking**: MirageJS
- **Performance Optimizations**:
  - Lazy loading
  - Debounced input
  - Memoization (`useMemo`, `React.memo`)

---

## **Getting Started**

Follow these steps to set up the project locally.

### **1. Prerequisites**
- Node.js >= 14.x
- npm or yarn installed

### **2. Clone the Repository**

```
git clone https://github.com/your-username/streamify-dashboard.git
cd streamify-dashboard
```

### **3. Install Dependencies**

```
npm install
# or, if you are using yarn
yarn install
```
### **4. Run Application**

```
npm start
# or
yarn start
```
### **5. Testing The Application**

```
npm test
# or
yarn test
```

