"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from 'next/image';

const navigation = [
  { name: "Home", href: "/" },
  { name: "Areas", href: "/areas" },
  { name: "Videos", href: "/videos" },
  { name: "Blog", href: "/blog" },
  { name: "Market Insights", href: "/market-insights" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky m-0 top-0 z-50 bg-white  shadow-sm">
      <nav className="mx-auto flex max-w-8xl items-center  justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex">
          <Link href="/" className="brand-color font-bold">
            Hyderabad Growth
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md brand-color"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        {/* This is the key part - the navigation items are now in a div that's aligned to the right */}
        <div className="hidden lg:flex lg:items-center  lg:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 brand-color hover:text-blue-200 transition duration-200"
            >
              {item.name}
            </Link>
          ))}
          
          {/* Optional: Contact button */}
          <Link
            href="/contact"
            className="ml-4 bg-[#29356B] contact px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition duration-200"
          >
            Contact
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"}`}>
        <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
        
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="font-bold text-[#29356B]">Hyderabad Growth</span>
              
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base  font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Mobile contact button */}
                <Link
                  href="/contact"
                  className="-mx-3 mt-4 block rounded-full bg-[#29356B] px-6 py-2.5 text-center text-base font-semibold leading-7 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 