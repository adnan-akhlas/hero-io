import { Outlet } from "react-router";
import Navbar from "../components/layout/Navbar";

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
