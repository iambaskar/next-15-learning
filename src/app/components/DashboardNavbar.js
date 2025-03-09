import Link from "next/link";
import React from "react";

export default function DashboardNavbar() {
  return (
    <ul className="flex items-center gap-[30px] justify-center py-4">
      <li>
        <Link href="/">Back to home</Link>
      </li>
      <li>
        <Link href="/dashboard">Users</Link>
      </li>
      <li>
        <Link href="/dashboard/tasks">Tasks</Link>
      </li>
      <li>
        <Link href="/dashboard/profile">Profile</Link>
      </li>
      <li>
        <Link href="/dashboard/settings">Settings</Link>
      </li>
    </ul>
  );
}
