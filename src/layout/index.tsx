import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const Layout = () => {
	return (
		<div className="w-full h-full text-white relative">
			<Sidebar />
            <Outlet />
			
		</div>
	);
};

export default Layout;