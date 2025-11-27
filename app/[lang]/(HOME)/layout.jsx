// app/dashboard/layout.jsx (Example if dashboard had header/footer)
import React from 'react';
import Footer from './_components/Footer'; // Assuming Footer is in _components
import Navbar from './_components/Navbar';

function DashboardLayout({ children }) {
  return (
    <div className="">
       <Navbar/>
        <div > 
            {/* <Sidebar /> */}
            
            <main className="flex-1">{children}</main> {/* Main content area */}
        </div>
         <Footer/>
    </div>
  );
}

export default DashboardLayout;