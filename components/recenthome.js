import CategoryLabel from "./blog/category";
import GetImage from "@utils/getImage";
import Link from "next/link";
import Image from "next/image";

import { parseISO, format } from "date-fns";

export default function RecentHome(props) {
  const imageProps = props.data[0]?.mainImage
    ? GetImage(props.data[0].mainImage)
    : null;
  const AuthorimageProps = props.data[0]?.author?.image
    ? GetImage(props.data[0].author.image)
    : null;

  const data = props.data;
  return (
    <section className="py-24 max-w-screen-xl mx-auto md:py-40">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-3/5 px-4 mb-16 lg:mb-0">
            <div>
              <div className="mb-5 relative">
                <img
                  src="https://wallpaperaccess.com/full/45056.jpg"
                  alt=""
                />
              </div>
              <div className="mb-2">
                <CategoryLabel categories={data[0].categories} />
              </div>

              <div className="flex items-center mb-2">
                <a
                  href="/"
                  className="hover:underline text-coolGray-500 font-medium">
                  {data[0].author.name} •{" "}
                  {format(
                    parseISO(data[0].publishedAt),
                    "MMMM do, yyyy"
                  )}
                </a>
              </div>
              <a className="inline-block mb-4 text-2xl text-black dark:text-white leading-tight text-coolGray-800  hover:text-coolGray-900 font-bold hover:underline">
                {data[0].title}
              </a>

              <p className="mb-4 text-base md:text-lg text-white-400 font-medium">
                {data[0].excerpt}
              </p>

              <a
                className="inline-flex items-center text-base md:text-lg text-green-500 hover:text-green-600 font-semibold"
                href={`/post/${data[0].slug.current}`}>
                <span className="mr-3">Read More</span>
                <svg
                  width={8}
                  height={10}
                  viewBox="0 0 8 10"
                  fill="nocne"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-2/5 px-4">
            <div className="max-w-md mx-auto">
              <a className="block mb-14" href="#">
                <div className="relative mb-8">
                  <span className="absolute bottom-0 left-0 ml-4 mb-4 inline-block px-5 py-2 text-sm bg-white rounded-full">
                    Feb 10, 2022
                  </span>
                  <img
                    className="block w-full h-56 rounded"
                    src="https://wallpapercave.com/wp/wp1839969.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-6">
                  <span className="font-heading text-2xl relative">
                    <span>
                      How to find the best tools for designing?
                    </span>
                    <span className="absolute bottom-0 right-0 mb-1 -mr-8">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14.9983 2.97487L12.8444 2.94712L12.9539 11.4487L1.76433 0.259107L0.261729 1.76171L11.4513 12.9513L2.94974 12.8418L2.97749 14.9957L15.1552 15.1525L14.9983 2.97487Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
                <div className="flex items-center mt-6 mb-10">
                  <img
                    className="w-10 h-10 mr-4 rounded-full"
                    src="wrexa-assets/images/avatar-male2.png"
                    alt=""
                  />
                  <span className="text-gray-400">Ethan 0.Son</span>
                </div>
              </a>
              <a className="block" href="#">
                <div className="relative mb-8">
                  <img
                    className="block w-full h-56 rounded"
                    src="https://pbs.twimg.com/media/Cvu3EGIXYAEN2Vh.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-6">
                  <span className="font-heading text-2xl relative">
                    <span>
                      Only with us you will learn the real trends
                    </span>
                    <span className="absolute bottom-0 right-0 mb-1 -mr-8">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M14.9983 2.97487L12.8444 2.94712L12.9539 11.4487L1.76433 0.259107L0.261729 1.76171L11.4513 12.9513L2.94974 12.8418L2.97749 14.9957L15.1552 15.1525L14.9983 2.97487Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
                <div className="flex items-center mb-10">
                  <img
                    className="w-10 h-10 mr-4 rounded-full"
                    src="wrexa-assets/images/avatar-women1.png"
                    alt=""
                  />
                  <span className="text-gray-400">Pora Kakkeren</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
