// Hooks
import { useEffect, useState } from "react";
import { GuestNavbar } from "../../components/Navbar";
import SearchProposal from "../../components/functionalComponents/Search";
import Tabs from "../../components/Tabs/Tabs";
import PageTitle from "../../components/PageTitle";
import Card from "../../components/Cards/Card";
import { useSearchParams } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar";
import Badge from "../../components/Badge";

// Components

const tabItemsText = ["Profile", "Collab"];
const analyticsOverviewData = [
  {
    id: 1,
    title: "links",
    countTotal: 2230,
    countLastMonth: 1500,
    percentage: 30,
  },
  {
    id: 2,
    title: "products",
    countTotal: 896,
    countLastMonth: 988,
    percentage: -8,
  },
  {
    id: 3,
    title: "services",
    countTotal: 747,
    countLastMonth: 1096,
    percentage: -42,
  },
  {
    id: 4,
    title: "collab opportunity",
    countTotal: 786,
    countLastMonth: 345,
    percentage: 16,
  },
];
const breakdownData = [
  {
    id: 1,
    name: "Twitter",
    numClicks: 800,
    percentageChange: Math.floor(Math.random() * (20 - 10)) + 10,
  },
  {
    id: 2,
    name: "WhatsApp",
    numClicks: 430,
    percentageChange: Math.floor(Math.random() * (20 - 10)) + 10,
  },
  {
    id: 3,
    name: "Discord",
    numClicks: 1000,
    percentageChange: Math.floor(Math.random() * (20 - 10)) + 10,
  },
];
const applicantsData = [
  {
    orderId: 1000,
    applicantName: "Haropis",
    applicationDate: Date.now() + Math.floor(Math.random() * 10000),
    isReceived: true,
    price: Math.floor(Math.random() * 200) + 1,
  },
  {
    orderId: 2000,
    applicantName: "Haropiis",
    applicationDate: Date.now() + Math.floor(Math.random() * 10000),
    isReceived: false,
    price: Math.floor(Math.random() * 200) + 1,
  },
  {
    orderId: 3000,
    applicantName: "Haropiiiis",
    applicationDate: Date.now() + Math.floor(Math.random() * 10000),
    isReceived: true,
    price: Math.floor(Math.random() * 200) + 1,
  },
];
const numClicksTotal = breakdownData.reduce(
  (acc, cur) => acc + cur.numClicks,
  0,
);

function Analytics() {
  const [selectedTab, setSelectedTab] = useState(
    tabItemsText[0].toLowerCase() || "",
  );

  function handleSelectTab(id) {
    setSelectedTab(id.toLowerCase());
  }

  const [selectedCategory, setSelectedCategory] = useState(
    analyticsOverviewData[0].title,
  );
  console.log(selectedCategory);

  return (
    <>
      <GuestNavbar />
      <div className="flex min-h-screen  bg-black pt-40 text-white">
        <div className="container mx-auto max-w-[72rem] justify-between px-6">
          <PageTitle
            title="Analytics Page"
            subTitle="Check activity on your page"
          />
          <Tabs
            tabItemsText={tabItemsText}
            onSelectTab={handleSelectTab}
            selectedTab={selectedTab}
          />
          <div className="flex flex-col gap-6 py-10">
            <Card className="w-fit rounded-md px-8">
              <span>Total Profile visits: </span>
              <span className="font-bold text-yellow-500">3478</span>
            </Card>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {analyticsOverviewData.map((el) => (
                <Card
                  key={el.id}
                  className={`grid cursor-pointer gap-3 px-6 text-center transition-colors hover:bg-[#333333] ${selectedCategory === el.title ? "scale-105 bg-[#333333]" : ""}`}
                  onClick={() => setSelectedCategory(el.title)}
                >
                  <p className="text-sm font-semibold capitalize">{el.title}</p>
                  <h3 className="text-3xl font-bold">{el.countTotal}</h3>
                  <p className="text-sm">Last month ({el.countLastMonth})</p>
                  <p
                    className={`text-sm ${el.percentage >= 0 ? "text-green-600" : "text-red-600"}`}
                  >
                    {el.percentage > 0 && "+"}
                    {el.percentage}%
                  </p>
                </Card>
              ))}
            </div>
            <Card className="overflow-x-auto">
              <h3 className="text-md font-bold">Breakdown</h3>
              <table className="overflow-x-auto">
                <tr>
                  <th className="h-10 min-w-[230px] text-left text-sm font-normal text-gray-400">
                    Links
                  </th>
                  <th className="h-10 min-w-[230px] text-left text-sm font-normal text-gray-400">
                    Clicks
                  </th>
                  <th className="h-10 min-w-[230px] text-left text-sm font-normal text-gray-400">
                    Change
                  </th>
                  <th className="h-10 min-w-[230px] text-left text-sm font-normal text-gray-400">
                    % of total clicks
                  </th>
                  <th className="h-10 min-w-[230px] text-left text-sm font-normal text-gray-400">
                    Best Location
                  </th>
                </tr>
                {breakdownData.map((item) => (
                  <tr key={item.id}>
                    <td className="h-10 min-w-[230px] text-sm">{item.name}</td>
                    <td className="h-10 min-w-[230px] text-sm">
                      {item.numClicks}
                    </td>
                    <td className="h-10 min-w-[230px] text-sm text-green-500">
                      +{item.percentageChange}.00%
                    </td>
                    <td className="h-10 min-w-[230px] text-sm">
                      {((item.numClicks / numClicksTotal) * 100).toFixed(2)}
                    </td>
                    <td className="h-10 min-w-[230px] text-sm">Lagos</td>
                  </tr>
                ))}
              </table>
            </Card>
            <div
              className="flex flex-col gap-6 md:grid"
              style={{ gridTemplateColumns: "1.5fr 1fr" }}
            >
              <Card>
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold">Chart</h3>
                    <div>
                      <span>All Links</span>
                    </div>
                  </div>
                  ‼️ Chart here ‼️
                </div>
              </Card>
              <Card>
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold">Location</h3>
                    <span>All Links</span>
                  </div>
                  <img
                    className="w-full object-cover"
                    src="/assests/images/dashboard.png"
                    alt="map"
                  />
                  <div className="flex flex-col gap-2 py-8">
                    <ProgressBar min={0} max={2000} value={378} />
                    <ProgressBar min={0} max={2000} value={1870} />
                    <ProgressBar min={0} max={2000} value={1128} />
                  </div>
                </div>
              </Card>
            </div>
            <Card className="overflow-x-auto">
              <h3 className="text-md font-bold">Service applicant details</h3>
              <table className="overflow-x-auto">
                <tr>
                  <th className="h-10 min-w-[230px] text-left text-sm font-normal text-gray-400">
                    Applicant
                  </th>
                  <th className="h-10 min-w-[230px] text-left text-sm font-normal text-gray-400">
                    Order ID
                  </th>
                  <th className="h-10 min-w-[230px] text-left text-sm font-normal text-gray-400">
                    Status
                  </th>
                  <th className="h-10 min-w-[230px] text-left text-sm font-normal text-gray-400">
                    Price
                  </th>
                  <th className="h-10 min-w-[230px] text-left text-sm font-normal text-gray-400">
                    Location
                  </th>
                </tr>
                {applicantsData.map((item) => (
                  <tr key={item.id}>
                    <td className="h-10 min-w-[230px] text-sm">
                      {item.applicantName}
                    </td>
                    <td className="h-10 min-w-[230px] text-sm">
                      #{item.orderId}
                    </td>
                    <td className="h-10 min-w-[230px] text-sm text-green-500">
                      <Badge
                        text="Received"
                        variant={item.isReceived ? "success" : "progress"}
                      />
                    </td>
                    <td className="h-10 min-w-[230px] text-sm">
                      ${item.price}
                    </td>
                    <td className="h-10 min-w-[230px] text-sm">Lagos</td>
                  </tr>
                ))}
              </table>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Analytics;
