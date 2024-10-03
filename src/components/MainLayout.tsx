import type { FC } from "react";
import { Outlet } from "react-router-dom";

interface MainLayoutProps {}

const MainLayout: FC<MainLayoutProps> = ({}) => {
  return (
    <div
      className="
        w-full
        h-screen
      bg-rose-300
        py-7 "
    >
      <section className="mx-auto h-full overflow-hidden bg-white grow max-w-md p-3 shadow-xl rounded-md">
        <Outlet />
      </section>
    </div>
  );
};
export default MainLayout;
