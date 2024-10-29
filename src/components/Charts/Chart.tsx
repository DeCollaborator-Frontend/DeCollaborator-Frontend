import styles from "./Chart.module.css";

import React from "react";
import ReactApexChart from "react-apexcharts";

const Chart = ({
  type = "pie", // Default chart type
  series = [44, 55, 13, 43, 22], // Default series data
  options = {}, // Default empty object to allow spreading custom options
  height = 350,
}) => {
  // Default options within the component
  const defaultOptions = {
    chart: {
      id: "default-chart",
      toolbar: { show: true }, // Show toolbar by default
    },
    title: {
      text: "Default Chart Title", // Default title
      align: "center",
    },
    labels: [
      "Category 1",
      "Category 2",
      "Category 3",
      "Category 4",
      "Category 5",
    ], // Default labels
    colors: ["#004163", "#00263b", "#68cbff", "#05a3f7", "#5d9cbe"], // Default colors for each segment
    dataLabels: {
      enabled: true,
      formatter: (val, { seriesIndex }) => `${series[seriesIndex]}`, // Show values by default
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Default categories for x-axis
      title: {
        text: "X Axis Label", // Default x-axis label
      },
    },
    yaxis: {
      title: {
        text: "Y Axis Label", // Default y-axis label
      },
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
  };

  // Combine user options with defaults
  const combinedOptions = { ...defaultOptions, ...options };

  return (
    <div id="chart" className={styles[type]}>
      <ReactApexChart
        options={combinedOptions}
        series={series}
        type={type}
        height={height}
      />
    </div>
  );
};

export default Chart;
