import { useEffect, useState } from "react";
import DashboardHeaderText from "../../../components/header/dashboard";
import { statisticalData } from "../../../data/analytics-data";
import { useGetprofilesQuery } from "../../../features/auth";
import { useGetcategoriesQuery } from "../../../features/category";
import { useGetmenusQuery } from "../../../features/menu";
import { useGetordersQuery } from "../../../features/order";
import ChartSection from "./chart";
import StatisticsComponent from "./stat";

const AdminDashboardAnalytics = () => {
  const { data: menus } = useGetmenusQuery();
  const { data: orders } = useGetordersQuery();
  const { data: categories } = useGetcategoriesQuery();
  const { data: profiles } = useGetprofilesQuery();

  const [stats, setStats] = useState([0, 0, 0, 0]);

  useEffect(() => {
    if (menus?.data || orders?.data || categories?.data || profiles?.data) {
      setStats([
        menus?.data?.totalDocs,
        orders?.data?.totalDocs,
        categories?.data?.totalDocs,
        profiles?.data?.totalDocs,
      ]);
    }
  }, [menus, orders, categories, profiles]);

  return (
    <div>
      <div className="mb-5">
        <DashboardHeaderText
          title="Analytics"
          description="Overview of all activities"
        />
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {statisticalData.map((data, index) => {
          return (
            <div
              className={`${data.bg} flex w-full flex-col gap-4 p-3 rounded-md shadow-md text-white`}
            >
              <span className="text-xl">{data.icon}</span>
              <h1>{data.title}</h1>
              <h1 className="font-semibold">{stats[index]}</h1>
            </div>
          );
        })}
      </div>
      <ChartSection />
      <StatisticsComponent />
    </div>
  );
};

export default AdminDashboardAnalytics;
