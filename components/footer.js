import Container from "@components/container";
import ThemeSwitch from "@components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@utils/all";
import VercelLogo from "../public/img/vercel.svg";
import GetImage from "@utils/getImage";
import Link from "next/link";

export default function Footer(props) {
  return (
    <section className="bg-white overflow-hidden dark:bg-black">
      <div className="border-b dark:border-zinc-900 border-gray-200" />

      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center py-12 md:pb-32">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h1>
              <span className="text-2xl font-bold text-coolGray-900 dark:text-white flex row align-center gap-2">
                <Link href="/">
                  <a className="w-10 dark:hidden">
                    {props.logo ? (
                      <Image
                        {...GetImage(props.logo)}
                        alt="Logo"
                        sizes="(max-width: 640px) 100vw, 200px"
                        priority={true}
                      />
                    ) : (
                      <span className="block text-left">
                        Code For Pittsburgh
                      </span>
                    )}
                  </a>
                </Link>
                <Link href="/">
                  <a className="hidden w-10 dark:block">
                    {props.logoalt ? (
                      <Image
                        {...GetImage(props.logoalt)}
                        alt="Logo"
                        sizes="(max-width: 640px) 100vw, 200px"
                        priority={true}
                      />
                    ) : (
                      <h1 className="block text-left text-3xl">
                        Code For Pittsburgh
                      </h1>
                    )}
                  </a>
                </Link>
                <h1 className="block text-left text-3xl">
                  {props.title}
                </h1>
              </span>
            </h1>
            <p className="text-coolGray-400 ">{props.description}</p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex flex-wrap md:justify-end -mx-5">
              {props.youtube && (
                <div className="px-5 flex items-center justify-between">
                  <a
                    className="inline-blcock text-black hover:text-red-600 dark:text-white dark:hover:text-red-600"
                    href={props.youtube}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                </div>
              )}

              {props.Twitter && (
                <div className="px-5 flex items-center justify-between">
                  <a
                    className="inline-block text-black hover:text-blue-400 dark:text-white dark:hover:text-blue-400"
                    href={props.Twitter}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              )}

              {props.Instagram && (
                <div className="px-5 flex items-center justify-between">
                  <a
                    className="inline-block text-black hover:text-purple-500 dark:text-white dark:hover:text-purple-500"
                    href={props.Instagram}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              )}
              <div className="px-2">
                <div className="inline-block text-black hover:text-purple-500 dark:text-white dark:hover:text-purple-500	">
                  <ThemeSwitch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
