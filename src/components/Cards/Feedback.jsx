import React, { useEffect, useState, useMemo } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import ReviewsData from "../../data/dummyData/reviews.json";

const Feedback = () => {
  const [negative, setNegative] = useState(0);
  const [positive, setPositive] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const data = ReviewsData.reviews;
  const length = data.length;

  useEffect(() => {
    let positiveCount = 0;
    let negativeCount = 0;

    data.forEach((review) => {
      if (review.type === "positive") {
        positiveCount += 1;
      } else if (review.type === "negative") {
        negativeCount += 1;
      }
    });

    setPositive(positiveCount);
    setNegative(negativeCount);
  }, [data]);

  const negativePercent = useMemo(() => {
    return (negative / (negative + positive)) * 100 || 0;
  }, [negative, positive]);

  const positivePercent = useMemo(() => {
    return (positive / (negative + positive)) * 100 || 0;
  }, [negative, positive]);

  const truncateText = (text) => {
    const words = text.split(" ");
    return words.length > 10 ? words.slice(0, 10).join(" ") + "..." : text;
  };

  const filterReviews = (type) => {
    if (type === "all") return data;
    return data.filter((review) => review.type === type);
  };

  const tabs = [
    {
      title: "All",
      content: (
        <FeedbackList data={filterReviews("all")} truncateText={truncateText} />
      ),
    },
    {
      title: `Positive (${positive})`,
      content: (
        <FeedbackList
          data={filterReviews("positive")}
          truncateText={truncateText}
        />
      ),
    },
    {
      title: `Negative (${negative})`,
      content: (
        <FeedbackList
          data={filterReviews("negative")}
          truncateText={truncateText}
        />
      ),
    },
  ];

  return (
    <div className="rounded-lg bg-[#242424] p-5">
      <div>
        <div className="flex flex-col items-center gap-4">
          <FeedbackBar
            icon={<FaThumbsUp color="green" />}
            count={positive}
            percent={positivePercent}
            color="green"
          />
          <FeedbackBar
            icon={<FaThumbsDown color="red" />}
            count={negative}
            percent={negativePercent}
            color="red"
          />
        </div>
        <h3 className="mt-5 text-center text-2xl font-bold">
          {length} Reviews
        </h3>
      </div>

      <div className="mb-5 mt-10 flex justify-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex cursor-pointer px-2 py-2 text-center font-bold ${
              activeTab === index
                ? "border-b-2 border-[#FFDF00] text-[#FFDF00]"
                : "border-b-2 border-transparent text-gray-500 hover:text-[#FFDF00]"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

const FeedbackBar = ({ icon, count, percent, color }) => {
  return (
    <div className="flex w-1/4 items-center justify-center gap-4">
      {icon}
      <div className="w-full overflow-hidden rounded-lg bg-gray-300">
        <div
          className={`rounded-lg py-2 text-center text-xs leading-none text-white bg-[${color}]`}
          style={{ width: `${percent}%` }}
        >
          {` `}
        </div>
      </div>
      {count}
    </div>
  );
};

const FeedbackList = ({ data, truncateText }) => {
  return (
    <div>
      {data.map((review, index) => (
        <div key={index} className="mt-5 grid grid-cols-3">
          <div className="flex items-center">
            <span className="rounded-full bg-[cornflowerblue] px-3 py-2 text-xs">
              A
            </span>
            <span className="ml-4 text-xl font-bold">Anonymous</span>
          </div>
          <div className="col-span-2 flex items-center gap-3">
            <div className="rounded-full bg-gray-700 p-2">
              {review.type === "negative" ? (
                <FaThumbsDown color="red" />
              ) : (
                <FaThumbsUp color="green" />
              )}
            </div>
            <p>{truncateText(review.review)}</p>
          </div>
          <p className="ml-8 p-3">{review.dates}</p>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
