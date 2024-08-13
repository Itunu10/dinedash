import DashboardHeaderText from "../../../components/header/dashboard";
import { statisticalData } from "../../../data/analytics-data";
import ChartSection from "./chart";
import StatisticsComponent from "./stat";

const AdminDashboardAnalytics = () => {
  return (
    <div>
      <div className="mb-5">
        <DashboardHeaderText
          title="Analytics"
          description="Overview of all activities"
        />
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {statisticalData.map((data) => {
          return (
            <div
              className={`${data.bg} flex w-full flex-col gap-4 p-3 rounded-md shadow-md text-white`}
            >
              <span className="text-xl">{data.icon}</span>
              <h1>{data.title}</h1>
              <h1 className="font-semibold">{data.value}</h1>
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
