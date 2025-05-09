
import Navbar from "@/components/Navbar";
import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) redirect('/sign-in');
  
  return (
    <div className="dashboard-layout">
      <Navbar isAuthenticated/>
      {children}
    </div>
  );
};

export default DashboardLayout;
