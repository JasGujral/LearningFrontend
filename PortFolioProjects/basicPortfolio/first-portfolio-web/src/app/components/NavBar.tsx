import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-orange-500 bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="text-5xl  text-white">
          <span className="font-extrabold">MO</span>
          <span>Stack</span>
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex flex-row space-x-6 sm:text-2xl">
            <li>
              <Link href={"#about"} className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-white">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
