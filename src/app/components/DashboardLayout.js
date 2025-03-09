import React from 'react'
import DashboardNavbar from './DashboardNavbar'
export default function DashboardLayout({ children }) {
  return (
   <div>
    <DashboardNavbar />
    <main>{children}</main>
   </div>
  )
}
