import ReactECharts from "echarts-for-react";
import { ObjectProps } from "../../../types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useGetordersQuery } from "../../../features/order";
import { useEffect, useState } from "react";

const ChartSection = () => {
  const getBarChartOptions = () => {
    return {
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        containLabel: true,
      },
      legend: {
        show: false,
      },
      tooltip: {},
      dataset: {
        source: [
          ["product", "Last 6 days", "Last Week"],
          ["01", 10.8, 15],
          ["02", 5, 15],
          ["03", 5, 10],
          ["04", 10, 5],
          ["05", 10.8, 15],
          ["06", 5, 15],
          ["07", 5, 10],
          ["08", 10, 5],
          ["09", 10.8, 15],
          ["10", 5, 15],
          ["11", 5, 10],
          ["12", 10, 5],
        ],
      },
      xAxis: {
        type: "category",
      },
      yAxis: {
        axisLabel: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            width: 1.4,
            type: "dashed",
          },
        },
      },

      series: [
        {
          barWidth: "15%",
          type: "bar",
          itemStyle: {
            color: "#08AC33",
          },
        },
        {
          barWidth: "15%",
          type: "bar",
          itemStyle: {
            color: "#E6E8EC",
          },
        },
      ],
    };
  };
  const getDoughnutChartOptions = () => {
    return {
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      tooltip: {
        trigger: "item",
        backgroundColor: "#37375C",
        textStyle: {
          color: "#fff",
        },
        formatter: function (params: ObjectProps) {
          return `
                <div style="padding: 10px; color: #fff;">
                    <span style="font-size : 13px">${params.name}</span><br/>
                    <span style="color : #b7b7b7;"> 1pm - 4pm </span><br/>
                    <span> 1.890 orders </span><br/>
                </div>
            `;
        },
      },
      legend: {
        show: false,
      },

      series: [
        {
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            // label: {
            //   show: true,
            //   fontSize: 40,
            //   fontWeight: "bold",
            // },
          },
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 40,
              name: "Completed",
              itemStyle: {
                color: "#68DA86",
              },
            },
            {
              value: 32,
              name: "Pending",
              itemStyle: {
                color: "#D5F3D5",
              },
            },
            {
              value: 28,
              name: "Failed",
              itemStyle: {
                color: "#08AC33",
              },
            },
          ],
        },
      ],
    };
  };

  const { data: orders } = useGetordersQuery();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (orders?.data) {
      const totalOrders = orders?.data?.docs?.reduce(
        (acc: number, curr: ObjectProps) => acc + curr?.totalPrice,
        0
      );

      setTotal(totalOrders);
    }
  }, [orders]);

  console.log(orders);

  return (
    <section className="my-10 flex md:flex-row flex-col w-full gap-16">
      <div className="md:w-[75%]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm">Total Orders</h2>
            <h1 className="font-medium">
              {Intl.NumberFormat("en-Us", {
                style: "currency",
                currency: "USD",
              }).format(total)}
            </h1>
            <p className="text-xs flex items-center gap-2 text-gray-400">
              <span className="text-primary-default">
                <Icon icon="formkit:arrowup" />
              </span>{" "}
              <span className="text-primary-default">2.1% </span>vs last week
            </p>
            <p className="my-2 text-xs text-gray-400">
              Sales from 1-12 Apr, 2023
            </p>
          </div>
          <button className="text-sm text-primary-default p-2 rounded-md px-3 font-medium border self-start bg-gray-100 ">
            View Report
          </button>
        </div>
        <div className="h-52 ">
          <ReactECharts
            option={getBarChartOptions()}
            style={{ height: "100%", width: "100%" }}
            className="echarts-for-react"
          />
          <div className="flex items-center gap-4 text-xs my-2 text-gray-500">
            <div className="flex items-center gap-2">
              {" "}
              <span className="bg-primary-default w-2 h-2 p-1 rounded-full"></span>
              <span>Last 6 Days</span>
            </div>
            <div className="flex items-center gap-2">
              {" "}
              <span className="bg-gray-300 w-2 h-2 p-1 rounded-full"></span>
              <span>Last Week</span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[40%]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm">Orders summary</h2>

            <p className="my-2 text-xs text-gray-400">From 1-6 Jun, 2024</p>
          </div>
          <button className="text-sm text-primary-default p-2 rounded-md px-3 font-medium border self-start bg-gray-100 ">
            View Report
          </button>
        </div>
        <div className="h-64 ">
          <ReactECharts
            option={getDoughnutChartOptions()}
            style={{ height: "100%", width: "100%" }}
            className="echarts-for-react"
          />
          <div className="flex items- justify-between gap-4 text-xs my-2 text-gray-500">
            <div className="flex items-center gap-2">
              {" "}
              <span className="bg-primary-default w-2 h-2 p-1 rounded-full"></span>
              <span>Compeleted</span>
            </div>
            <div className="flex items-center gap-2">
              {" "}
              <span className="bg-gray-300 w-2 h-2 p-1 rounded-full"></span>
              <span>Pending</span>
            </div>
            <div className="flex items-center gap-2">
              {" "}
              <span className="bg-green-500 w-2 h-2 p-1 rounded-full"></span>
              <span>Failed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartSection;
