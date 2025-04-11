import { getCurrentUser } from "@/lib/actions/auth.action";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();
  const isAuthenticated = !!user;
  
  return (
    <div className="root-layout">
      <Navbar isAuthenticated={isAuthenticated} />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="py-6 border-t">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Practice Perfect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
