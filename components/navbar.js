import React from "react";
import { Disclosure } from "@headlessui/react";
import Container from "@components/container";
import Link from "next/link";
import Image from "next/image";
import GetImage from "@utils/getImage";
import { myLoader } from "@utils/all";
import { useRouter } from "next/router";
import { cx } from "@utils/all";

export default function Navbar(props) {
  const leftmenu = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "Blogs",
      href: "/blogs"
    },
    {
      label: "Contact",
      href: "/contact"
    }
  ];
  const router = useRouter();
  const route = router.route.toLocaleLowerCase();

  function giveBackLowerCase(passedRoute) {
    if (passedRoute.href === route) {
      return "text-sky-500";
    } else return "text-gray-600";
  }

  const mobilemenu = [...leftmenu];

  return (
    <section className="overflow-hidden">
      <div className="flex items-center justify-between px-7 xl:px-40 py-5 lg:py-7 dark:bg-black bg-white">
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto mr-14">
              <a href="/">
                <img
                  src="https://discoverpps.org/img/mascot/301.jpg"
                  alt=""
                  className="w-12 h-12"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto hidden lg:block">
              <ul className="flex items-center mr-16">
                <li className="mr-9 font-medium hover:text-gray-700">
                  <a href="/">Home</a>
                </li>
                <li className="mr-9 font-medium hover:text-gray-700">
                  <a href="/archive">Blogs</a>
                </li>
                <li className="mr-9 font-medium hover:text-gray-700">
                  <a href="/about">About</a>
                </li>
              </ul>
            </div>
            <div className="w-auto lg:hidden">
              <a href="#">
                <svg
                  className="navbar-burger text-indigo-600"
                  width={51}
                  height={51}
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    width={56}
                    height={56}
                    rx={28}
                    fill="currentColor"
                  />
                  <path
                    d="M37 32H19M37 24H19"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
        <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
          <div className="flex flex-wrap justify-between h-full">
            <div className="w-full">
              <div className="flex items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <a className="inline-block" href="#">
                    <img
                      src="flaro-assets/logos/flaro-logo-black.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-auto p-2">
                  <a className="navbar-burger" href="#">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 18L18 6M6 6L18 18"
                        stroke="#111827"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center py-16 w-full">
              <ul>
                <li className="mb-12">
                  <a
                    className="font-medium hover:text-gray-700"
                    href="#">
                    Features
                  </a>
                </li>
                <li className="mb-12">
                  <a
                    className="font-medium hover:text-gray-700"
                    href="#">
                    Solutions
                  </a>
                </li>
                <li className="mb-12">
                  <a
                    className="font-medium hover:text-gray-700"
                    href="#">
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    className="font-medium hover:text-gray-700"
                    href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-end w-full pb-8">
              <div className="flex flex-wrap">
                <div className="w-full">
                  <div className="block">
                    <button
                      className="py-3 px-5 w-full text-white font-semibold rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                      type="button">
                      Try 14 Days Free Trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
