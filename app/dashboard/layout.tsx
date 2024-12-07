import NavBar from "../component/dashboard/navbar/navbar";
import SideBar from "../component/dashboard/sidebar/sidebar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
         <div>
            <NavBar prop={{prop:true}}/>
           
        </div>
        <div className="flex flex-row">
           <div>
            <SideBar/>
            </div>
            <div className="ml-6">
            {children}
            </div>
        
        </div>
       
      </div>
    );
  }