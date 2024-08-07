import React from "react";

const DashboardHeaderText: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-sm font-light">{description}</p>
    </div>
  );
};
export default DashboardHeaderText;
