import { Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
  Popover,
  Transition
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon
} from "@heroicons/react/20/solid";
import { navbarQuery } from "@lib/groq";
import { getClient, usePreviewSubscription } from "@lib/sanity";
import { useEffect } from "react";
import Image from "next/image";
import GetImage from "@utils/getImage";
import Link from "next/link";
const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon
  }
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

async function getNavbar() {
  try {
    const navbarItems = await getClient(false)
      .fetch(navbarQuery)
      .then(res => {
        return res;
      });
    return navbarItems;
  } catch (err) {
    console.log(err);
  }
}

export default function Navbar(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState([]);

  const navigation = props.navigation;

  return (
    <header
      className="bg-white dark:bg-black 
    border-b border-gray-200 dark:border-gray-800 lg:mb-4">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 "
        aria-label="Global">
        <Link href="/">
          <a className="w-16 dark:hidden">
            {props.logo ? (
              <Image
                {...GetImage(props.logo)}
                alt="Logo"
                sizes="(max-width: 640px) 100vw, 200px"
                priority={true}
              />
            ) : (
              <span className="block text-left">BekDev</span>
            )}
          </a>
        </Link>
        <Link href="/">
          <a className="hidden w-16 dark:block">
            {props.logoalt ? (
              <Image
                {...GetImage(props.logoalt)}
                alt="Logo"
                sizes="(max-width: 640px) 100vw, 200px"
                priority={true}
              />
            ) : (
              <span className="block text-left">BekDev</span>
            )}
          </a>
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-5 text-black dark:text-white text-center ">
          <a
            href="/"
            className="text-sm font-semibold leading-6 text-center
             py-2 px-4 border-transparent hover:border-green-500 hover:text-green-500
            
            ">
            Home
          </a>
          <a
            href="/gallery"
            className="text-sm font-semibold leading-6 text-center
             py-2 px-4 border-transparent hover:border-green-500 hover:text-green-500
            
            ">
            Gallery
          </a>
          <a
            href="/gallery"
            className="text-sm font-semibold leading-6 text-center
             py-2 px-4 border-transparent hover:border-green-500 hover:text-green-500
            
            ">
            About
          </a>
          {navigation &&
            navigation.map((item, index) => (
              <a
                key={item.slug.current}
                href={`/category/${item.slug.current}`}
                className="text-sm font-semibold leading-6 text-center
                    py-2 px-4 border-transparent hover:border-green-500 hover:text-green-500
                   ">
                {item.title}
              </a>
            ))}
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1
        dark:bg-black dark:text-white
        sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div
                className="space-y-2 py-6 divide-y divid-1 divide-zinc-900
              ">
                <a
                  href="/"
                  className="-mx-3 block  py-2 px-3 text-base font-semibold leading-7  hover:text-green-500">
                  Home
                </a>
                <a
                  href="/gallery"
                  className="-mx-3 block  py-2 px-3 text-base font-semibold leading-7  hover:text-green-500">
                  gallery
                </a>
                <a
                  href="/about"
                  className="-mx-3 block  py-2 px-3 text-base font-semibold leading-7  hover:text-green-500">
                  About
                </a>
                {navigation &&
                  navigation.map((item, index) => (
                    <a
                      key={item.slug.current}
                      href={`/category/${item.slug.current}`}
                      className="-mx-3 block  py-2 px-3 text-base font-semibold leading-7  hover:text-green-500">
                      {item.title}
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
