"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import "./../styles/global.css";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot", href: "/forgot-password" },
];

export default function AuthLayout({ children }) {
  const pathname = usePathname();
  return (
    <div>
      {children}
      {navLinks.map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <Link
            href={item.href}
            key={item.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
