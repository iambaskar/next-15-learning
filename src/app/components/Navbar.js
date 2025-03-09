import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="sticky top-0 bg-white">
      <ul className="flex items-center gap-[30px] justify-center py-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </div>
  );
}
