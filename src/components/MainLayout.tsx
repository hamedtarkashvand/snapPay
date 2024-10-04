import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div
      className="
        w-full
        h-screen
      bg-indigo-600/90
        py-7 "
    >
      <section className="mx-auto h-full overflow-hidden bg-white grow max-w-md p-3 shadow-xl rounded-md">
        <Outlet />
      </section>
    </div>
  );
};
export default MainLayout;
