import styles from "./CollabAnalytics.module.css";
import Map from "@/components/Map";
import Card from "@/components/Cards/Card";
import PageTitle from "@/components/PageTitle";
import ProgressBar from "@/components/ProgressBar";
import SelectInput from "@/components/SelectInput";
import Tabs from "@/components/Tabs/Tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronRight } from "lucide-react";

import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function CollabAnalytics() {
  const [selectedTab, setSelectedTab] = useState("profile");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the state whenever the window resizes
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleSelectTab(id) {
    setSelectedTab(id.toLowerCase());
  }
  return (
    <div>
      <PageTitle
        title="Analytics Page"
        subTitle="Check activity on your page"
      />
      <Tabs
        onSelectTab={handleSelectTab}
        tabItemsText={["Profile", "Collab"]}
        selectedTab={selectedTab}
      />
      <div className="flex items-center justify-between py-5">
        <SelectInput
          hasBorder={false}
          options={["Collab 1", "Collab 2"]}
          value="All Collab Types"
        />
        <div className="flex items-center justify-center gap-3">
          <span>Duration:</span>
          <SelectInput
            options={["A month", "A year"]}
            defaultSelection="A month"
          />
        </div>
      </div>
      <div className="flex items-start justify-end gap-5">
        <span>From</span>
        <span className="flex border-b-[3px] border-neutral-700 p-2 pt-0 text-neutral-400">
          August 1st
        </span>
        <span>To</span>
        <span className="flex border-b-[3px] border-neutral-700 p-2 pt-0 text-neutral-400">
          August 6th
        </span>
      </div>
      <div className="mt-10 grid grid-cols-6 gap-5 lg:gap-8">
        <div className="col-span-6 rounded-lg border border-yellow-400 border-opacity-40 bg-neutral-900 p-5 md:col-span-3">
          {/* <h4 className="text-center font-bold">
            Collab manager of the week: Abubs
          </h4> */}
          <div className={styles.chartContainer}>
            <Chart
              width="100%"
              type="pie"
              series={[400, 250, 45, 120, 31]}
              options={{
                labels: [
                  "Completed",
                  "Accepted",
                  "Received",
                  "Pending",
                  "Rejected",
                ],
                chart: {
                  background: "transparent",
                },
                legend: {
                  show: true,
                  position: screenWidth < 768 ? "bottom" : "right",
                  itemMargin: {
                    vertical: screenWidth < 768 ? 5 : 20,
                    horizontal: screenWidth < 768 ? 10 : 0,
                  },
                  fontSize: "15rem",
                  fontWeight: 700,
                },
                theme: {
                  mode: "dark",
                },
                colors: ["#008000", "#049696", "#fad705", "#484849", "#ff2929"],
                title: {
                  text: "Collab manager of the week: Abubs",
                  align: "center",
                },
                dataLabels: {
                  enabled: true,
                  formatter: (val, { seriesIndex }) =>
                    `${[400, 250, 45, 120, 31][seriesIndex]}`,
                },
                markers: {
                  shape: "rect",
                  strokeOpacity: ".75",
                },
              }}
            />
          </div>
        </div>
        <div className="col-span-6 rounded-lg border border-yellow-400 border-opacity-40 bg-neutral-900 p-5 md:col-span-3">
          {/* <h4 className="text-center font-bold">
            Collab manager of the week: Abubs
          </h4> */}
          <div className={styles.chartContainer}>
            <Chart
              width="100%"
              type="pie"
              series={[400, 250, 45, 120, 31]}
              options={{
                labels: ["Abubsssss", "Demitchy", "Malcom", "Wale", "Michael"],
                chart: {
                  background: "transparent",
                },
                legend: {
                  show: true,
                  position: screenWidth < 768 ? "bottom" : "right",
                  itemMargin: {
                    vertical: screenWidth < 768 ? 5 : 20,
                    horizontal: screenWidth < 768 ? 10 : 0,
                  },
                  fontSize: "15rem",
                  fontWeight: 700,
                },
                theme: {
                  mode: "dark",
                },
                colors: ["#004163", "#00263b", "#68cbff", "#05a3f7", "#5d9cbe"],
                title: {
                  text: "Total completed collabs: 2000",
                  align: "center",
                },
                dataLabels: {
                  enabled: true,
                  formatter: (val, { seriesIndex }) =>
                    `${[400, 250, 45, 120, 31][seriesIndex]}`,
                },
                markers: {
                  shape: "rect",
                  strokeOpacity: ".75",
                },
              }}
            />
          </div>
        </div>
        <div className="col-span-6 rounded-lg border border-yellow-400 border-opacity-40 bg-neutral-900 p-5 lg:col-span-2">
          {/* <h4 className="text-center font-bold">
            Collab manager of the week: Abubs
          </h4> */}

          <div className={styles.chartContainer}>
            <Chart
              width="100%"
              type="pie"
              series={[400, 250, 45, 120, 31]}
              options={{
                labels: ["Abubs", "Demitchy", "Malcom", "Wale", "Michael"],
                tooltip: {
                  enabled: true,
                },
                chart: {
                  id: "responsive-chart",
                  parentHeightOffset: 0, // Prevents the chart from exceeding the container’s height
                  background: "transparent",
                },
                yaxis: {
                  crosshairs: {
                    show: false, // Disable the y-axis crosshair line
                  },
                },
                legend: {
                  show: true,
                  position: "bottom", // Position legend below chart
                  horizontalAlign: "center", // Center-align the legend horizontally
                  itemMargin: {
                    horizontal: 10,
                    vertical: 5,
                  },
                  fontSize: "15rem",
                  fontWeight: 700,
                },
                theme: {
                  mode: "dark",
                },
                stroke: {
                  width: 1,
                },
                colors: ["#004163", "#00263b", "#68cbff", "#05a3f7", "#5d9cbe"],
                title: {
                  text: "Total sent collabs: 2000",
                  align: "center",
                  style: {
                    fontWeight: 900,
                    display: "block",
                    marginBottom: "4rem",
                  },
                },
                dataLabels: {
                  enabled: true,
                  formatter: (val, { seriesIndex }) =>
                    `${[400, 250, 45, 120, 31][seriesIndex]}`,
                },
                markers: {
                  shape: "rect",
                  strokeOpacity: ".75",
                },
              }}
            />
          </div>
        </div>
        <div className="col-span-6 rounded-lg border border-yellow-400 border-opacity-40 bg-neutral-900 p-5 lg:col-span-2">
          {/* <h4 className="text-center font-bold">
            Collab manager of the week: Abubs
          </h4> */}

          <div className={styles.chartContainer}>
            <Chart
              width="100%"
              type="pie"
              series={[400, 250, 45, 120, 31]}
              options={{
                labels: ["Abubs", "Demitchy", "Malcom", "Wale", "Michael"],
                tooltip: {
                  enabled: true,
                },
                chart: {
                  id: "responsive-chart",
                  parentHeightOffset: 0, // Prevents the chart from exceeding the container’s height
                  background: "transparent",
                },
                yaxis: {
                  crosshairs: {
                    show: false, // Disable the y-axis crosshair line
                  },
                },
                legend: {
                  show: true,
                  position: "bottom", // Position legend below chart
                  horizontalAlign: "center", // Center-align the legend horizontally
                  itemMargin: {
                    horizontal: 10,
                    vertical: 5,
                  },
                  fontSize: "15rem",
                  fontWeight: 700,
                },
                theme: {
                  mode: "dark",
                },
                stroke: {
                  width: 1,
                },
                colors: ["#004163", "#00263b", "#68cbff", "#05a3f7", "#5d9cbe"],
                title: {
                  text: "Total sent collabs: 2000",
                  align: "center",
                  style: {
                    fontWeight: 900,
                    display: "block",
                    marginBottom: "4rem",
                  },
                },
                dataLabels: {
                  enabled: true,
                  formatter: (val, { seriesIndex }) =>
                    `${[400, 250, 45, 120, 31][seriesIndex]}`,
                },
                markers: {
                  shape: "rect",
                  strokeOpacity: ".75",
                },
              }}
            />
          </div>
        </div>
        <div className="col-span-6 rounded-lg border border-yellow-400 border-opacity-40 bg-neutral-900 p-5 lg:col-span-2">
          {/* <h4 className="text-center font-bold">
            Collab manager of the week: Abubs
          </h4> */}

          <div className={styles.chartContainer}>
            <Chart
              width="100%"
              type="pie"
              series={[400, 250, 45, 120, 31]}
              options={{
                labels: ["Abubs", "Demitchy", "Malcom", "Wale", "Michael"],
                tooltip: {
                  enabled: true,
                },
                chart: {
                  id: "responsive-chart",
                  parentHeightOffset: 0, // Prevents the chart from exceeding the container’s height
                  background: "transparent",
                },
                yaxis: {
                  crosshairs: {
                    show: false, // Disable the y-axis crosshair line
                  },
                },
                legend: {
                  show: true,
                  position: "bottom", // Position legend below chart
                  horizontalAlign: "center", // Center-align the legend horizontally
                  itemMargin: {
                    horizontal: 10,
                    vertical: 5,
                  },
                  fontSize: "15rem",
                  fontWeight: 700,
                },
                theme: {
                  mode: "dark",
                },
                stroke: {
                  width: 1,
                },
                colors: ["#004163", "#00263b", "#68cbff", "#05a3f7", "#5d9cbe"],
                title: {
                  text: "Total sent collabs: 2000",
                  align: "center",
                  style: {
                    fontWeight: 900,
                    display: "block",
                    marginBottom: "4rem",
                  },
                },
                dataLabels: {
                  enabled: true,
                  formatter: (val, { seriesIndex }) =>
                    `${[400, 250, 45, 120, 31][seriesIndex]}`,
                },
                markers: {
                  shape: "rect",
                  strokeOpacity: ".75",
                },
              }}
            />
          </div>
        </div>
        <Card borderColor="yellow" className="col-span-6 !p-3">
          <h4 className="font-bold">
            <SelectInput
              hasBorder={false}
              options={["Type 1", "Type 2"]}
              placeholder="Collab type"
            />
          </h4>
          <Table>
            <TableHeader>
              <TableRow className="!border-0">
                <TableHead>Collab manager</TableHead>
                <TableHead>Received proposals</TableHead>
                <TableHead>Change</TableHead>
                <TableHead>% of total</TableHead>
                <TableHead>Best Location</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <image
                      className="aspect-square h-10 w-10 rounded-full border border-yellow-400"
                      src="/assests/images/Avatar/04.png"
                    />
                    <span>Demitchy</span>
                  </div>
                </TableCell>
                <TableCell>800</TableCell>
                <TableCell>+10.00%</TableCell>
                <TableCell>35.9</TableCell>
                <TableCell>
                  <div className="flex items-center justify-between">
                    <span>Lagos</span>
                    <ChevronRight className="text-yellow-400" />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
        <div className="col-span-6 grid grid-cols-5 gap-8">
          <Card borderColor="yellow" className="col-span-6 lg:col-span-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold">Chart</h4>
              <div className="flex items-center gap-8">
                <svg
                  className="h-8 w-8 rounded-md border border-white p-[6px]"
                  width={21}
                  height={22}
                  viewBox="0 0 21 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7474 8.42207C10.0467 8.42207 9.39042 8.69395 8.89354 9.19082C8.39901 9.6877 8.12479 10.3439 8.12479 11.0447C8.12479 11.7455 8.39901 12.4018 8.89354 12.8986C9.39042 13.3932 10.0467 13.6674 10.7474 13.6674C11.4482 13.6674 12.1045 13.3932 12.6014 12.8986C13.0959 12.4018 13.3701 11.7455 13.3701 11.0447C13.3701 10.3439 13.0959 9.6877 12.6014 9.19082C12.3587 8.94627 12.0698 8.75237 11.7515 8.6204C11.4333 8.48843 11.092 8.42102 10.7474 8.42207ZM20.4107 13.9416L18.8779 12.6314C18.9506 12.1861 18.9881 11.7314 18.9881 11.2791C18.9881 10.8268 18.9506 10.3697 18.8779 9.92676L20.4107 8.6166C20.5265 8.51748 20.6094 8.38545 20.6483 8.23808C20.6873 8.09071 20.6804 7.93499 20.6287 7.7916L20.6076 7.73067C20.1858 6.55103 19.5537 5.45759 18.742 4.50332L18.6998 4.4541C18.6012 4.33821 18.4699 4.2549 18.323 4.21515C18.1762 4.1754 18.0207 4.18108 17.8771 4.23145L15.974 4.90879C15.2709 4.33223 14.4881 3.87754 13.6396 3.56113L13.2717 1.57129C13.2439 1.42139 13.1712 1.28348 13.0632 1.17589C12.9552 1.0683 12.817 0.996125 12.667 0.968945L12.6037 0.957227C11.3849 0.736914 10.1006 0.736914 8.88182 0.957227L8.81854 0.968945C8.66853 0.996125 8.53035 1.0683 8.42234 1.17589C8.31433 1.28348 8.24162 1.42139 8.21385 1.57129L7.84354 3.57051C7.00314 3.88944 6.22025 4.34302 5.52557 4.91348L3.60839 4.23145C3.46487 4.18068 3.3093 4.1748 3.16236 4.21457C3.01542 4.25434 2.88405 4.33789 2.78573 4.4541L2.74354 4.50332C1.93329 5.45861 1.30137 6.55178 0.877917 7.73067L0.856823 7.7916C0.751354 8.08457 0.838073 8.4127 1.07479 8.6166L2.62635 9.94082C2.5537 10.3814 2.51854 10.8314 2.51854 11.2768C2.51854 11.7268 2.5537 12.1768 2.62635 12.6127L1.07948 13.9369C0.963688 14.036 0.880814 14.1681 0.841879 14.3154C0.802944 14.4628 0.809791 14.6185 0.86151 14.7619L0.882604 14.8229C1.30682 16.0018 1.9326 17.0916 2.74823 18.0502L2.79042 18.0994C2.88898 18.2153 3.02035 18.2986 3.1672 18.3384C3.31406 18.3781 3.46951 18.3724 3.61307 18.3221L5.53026 17.64C6.2287 18.2143 7.00682 18.6689 7.84823 18.983L8.21854 20.9822C8.2463 21.1321 8.31902 21.27 8.42703 21.3776C8.53504 21.4852 8.67322 21.5574 8.82323 21.5846L8.88651 21.5963C10.1173 21.8178 11.3776 21.8178 12.6084 21.5963L12.6717 21.5846C12.8217 21.5574 12.9599 21.4852 13.0679 21.3776C13.1759 21.27 13.2486 21.1321 13.2764 20.9822L13.6443 18.9924C14.4928 18.6736 15.2756 18.2213 15.9787 17.6447L17.8818 18.3221C18.0253 18.3728 18.1809 18.3787 18.3279 18.3389C18.4748 18.2992 18.6062 18.2156 18.7045 18.0994L18.7467 18.0502C19.5623 17.0869 20.1881 16.0018 20.6123 14.8229L20.6334 14.7619C20.7342 14.4713 20.6474 14.1455 20.4107 13.9416ZM10.7474 15.165C8.47167 15.165 6.62714 13.3205 6.62714 11.0447C6.62714 8.76895 8.47167 6.92442 10.7474 6.92442C13.0232 6.92442 14.8678 8.76895 14.8678 11.0447C14.8678 13.3205 13.0232 15.165 10.7474 15.165Z"
                    fill="#FEFEFE"
                  />
                </svg>
                <span className="font-bold">Collab proposals</span>
              </div>
            </div>
            <Chart
              type="bar"
              series={[
                {
                  name: "Company1",
                  data: [400, 250, 270, 380, 70, 100],
                },
              ]}
              options={{
                chart: {
                  background: "transparent",
                },
                labels: ["1st", "2nd", "3rd", "4th", "5th", "6th"],
                dataLabels: {
                  enabled: false,
                },
                colors: ["#d0aa16"],
                grid: {
                  show: false,
                },
                theme: {
                  mode: "dark",
                },
              }}
            />
          </Card>
          <Card
            borderColor="yellow"
            className="col-span-6 space-y-5 lg:col-span-2"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-bold">Location</h4>
              <span className="font-bold">Collab proposals</span>
            </div>
            <div className="my-5 grid h-60 place-items-center bg-neutral-800">
            <Map />
            </div>
            <div className="!mt-10 space-y-4">
              <ProgressBar max={300} value={200} />
              <ProgressBar max={500} value={280} />
              <ProgressBar max={700} value={100} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CollabAnalytics;
