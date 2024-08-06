import { Outlet } from "react-router";
import MainHeader from "./header";
import MainFooter from "./footer";

const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <main className="bg-slate-100 p-5">
        <Outlet />
      </main>
      <MainFooter />
    </>
  );
};

export default MainLayout;
