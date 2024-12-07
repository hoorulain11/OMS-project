"use client";
import React, { useState, useEffect } from 'react';
import { LuFileSpreadsheet } from "react-icons/lu";
import { BsClipboard2Pulse } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";
import { PiStudentBold } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbFileInvoice } from "react-icons/tb";
import { usePathname } from 'next/navigation';

const Dashboard = ({ prop }: { prop: { prop: boolean } }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className='h-full'>
        {/* Sidebar */}
        <aside className={`bg-white shadow-md h-full ${isSidebarOpen ? 'w-64' : 'w-20'} lg:w-64 lg:h-full`}>
          <nav className="flex flex-col mt-6 px-2 space-y-2 text-gray-400 text-sm ">
            <div className="lg:hidden px-4 py-1 h-full">
              <button onClick={toggleSidebar} className="text-gray-700">
                {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
            {isSidebarOpen && <p className='text-gray-400 text-sm'>ANALYZE</p>}
            <div className={`inline-flex block py-2 px-4 rounded gap-2 ${isActive('/dashboard') ? 'bg-blue-50 text-blue-600' : 'text-gray-700'} hover:bg-blue-50 hover:text-blue-600`}>
              <BsClipboard2Pulse className="text-2xl" />
              {isSidebarOpen && <a href={"/dashboard"} className="text-lg">Dashboard</a>}
            </div>
            <div className={`inline-flex block py-2 px-4 rounded gap-2 ${isActive('/dashboard/report') ? 'bg-blue-50 text-blue-600' : 'text-gray-700'} hover:bg-blue-50 hover:text-blue-600 h-full lg:h-full`}>
              <TbReportSearch className="text-2xl" />
              {isSidebarOpen && <a href={"/dashboard/report"} className="text-lg">Report</a>}
            </div>
            {isSidebarOpen && <p>TRACK</p>}
            <div className={`inline-flex gap-2 block py-2 h-full lg:h-full px-4 rounded ${isActive('/dashboard/profiles') ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}>
              <CgProfile className='text-2xl' />
              {isSidebarOpen && <a href={"/dashboard/profiles"} className="text-lg">Profiles</a>}
            </div>
            <div className={`inline-flex gap-2 block py-2 h-full lg:h-full px-4 rounded ${isActive('/dashboard/customers') ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}>
              <RiCustomerService2Line className='text-2xl' />
              {isSidebarOpen && <a href={"/dashboard/customers"} className="text-lg">Customers</a>}
            </div>
            <div className={`inline-flex gap-2 block py-2 h-full lg:h-full px-4 rounded ${isActive('/dashboard/invoices') ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}>
              <TbFileInvoice className='text-2xl' />
              {isSidebarOpen && <a href={"/dashboard/invoices"} className="text-lg">Invoices</a>}
            </div>
            
            {isSidebarOpen && <p className='text-gray-400 text-sm'>MANAGE</p>}
            <div className={`inline-flex block py-2 px-4 rounded gap-2 ${isActive('/dashboard/student') ? 'bg-blue-50 text-blue-600' : 'text-gray-700'} hover:bg-blue-50 hover:text-blue-600`}>
              <PiStudentBold className="text-2xl" />
              {isSidebarOpen && <a href={"/dashboard/student"} className="text-lg">Users</a>}
            </div>
            <div className={`inline-flex block py-2 px-4 rounded gap-2 ${isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-gray-700'} hover:bg-blue-50 hover:text-blue-600`}>
              <MdLogout className="text-2xl" />
              {isSidebarOpen && <a href={"/"} className="text-lg">Logout</a>}
            </div>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard;

