"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import "./../styles/global.css";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot", href: "/forgot-password" },
];

export default function AuthLayout({ children }) {
  const [input, setInput] = useState("");
  const pathname = usePathname();
  return (
    <div>
      {children}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
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
