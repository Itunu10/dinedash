import ReactECharts from "echarts-for-react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { mostOrderedProductsCatergories } from "../../../data/analytics-data";

const StatisticsComponent = () => {
  const getLineChartOptions = () => {
    return {
      title: {},
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // Disable axis pointers here
          show: false,
        },
      },
      legend: {
        show: false,
      },
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["01", "02", "03", "05", "06", "06"],
      },
      yAxis: {
        axisLabel: {
          show: false,
        },
        type: "value",
      },
      series: [
        {
          name: "Last 6 days",
          type: "line",

          data: [5, 3, 10, 9.3, 5, 15],
          yAxisIndex: 0,
        },
        {
          name: "Last Week",
          type: "line",

          data: [9.8, 13, 5, 13, 9.3, 10],
          yAxisIndex: 0,
        },
      ],
    };
  };

  return (
    <section className="my-20 grid md:grid-cols-2   gap-3 border-t">
      <div className="border-x p-4">
        <div className="flex flex-col gap-2">
          <h1> Most Ordered Product Categories</h1>
          <p className="text-xs text-black font-light">
            see the list of ordered categories of products
          </p>
        </div>
        <section className="flex flex-col gap-8 my-10">
          {mostOrderedProductsCatergories.map((data) => {
            return (
              <div className="flex items-center gap-2 justify-between ">
                <div className="flex items-center gap-5 ">
                  <span className="w-10  shadow-xl rounded-full overflow-hidden h-10">
                    <img
                      className="w-full h-full object-fit "
                      src={data.image}
                      alt={data.title}
                    />
                  </span>
                  <span className="text-base font-light">{data.title}</span>
                </div>
                <span className="text-gray-700 font-light">
                  {" "}
                  {Intl.NumberFormat("NG", {
                    style: "currency",
                    currency: "NGN",
                  }).format(data.value)}
                </span>
              </div>
            );
          })}
        </section>
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm">Total Customers</h2>
            <h1 className="font-medium">1000</h1>
            <p className="text-xs text-gray-400 flex items-center gap-2">
              {" "}
              <span className="text-red-500">
                <Icon icon="formkit:arrowdown" />
              </span>
              <span className="text-red-500">2.1% </span>vs last week
            </p>
            <p className="my-2 text-xs text-gray-400">
              Sales from 1-12 Apr, 2023
            </p>
          </div>
          <button className="text-sm text-primary-default p-2 rounded-md px-3 font-medium border self-start bg-gray-100 ">
            View Report
          </button>
        </div>
        <div className="h-64 w-[100%]">
          <ReactECharts
            option={getLineChartOptions()}
            style={{ height: "100%", width: "100%" }}
            className="echarts-for-react"
          />
        </div>
      </div>
    </section>
  );
};

export default StatisticsComponent;
