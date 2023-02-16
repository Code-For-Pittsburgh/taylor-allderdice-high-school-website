import CategoryLabel from "./blog/category";
import GetImage from "@utils/getImage";
import Link from "next/link";
import Image from "next/image";

export default function RecentHome(props) {
  const imageProps = props.data[0]?.mainImage
    ? GetImage(props.data[0].mainImage)
    : null;
  const AuthorimageProps = props.data[0]?.author?.image
    ? GetImage(props.data[0].author.image)
    : null;

  console.log(props.data[0]);
  const data = props.data;
  return (
    <section className="py-24 max-w-screen-lg mx-auto md:py-40">
      <div className="container px-4 mx-auto">
        <div className="flex items-center mb-24">
          <span className="font-heading text-xl">07</span>
          <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
          <span className="font-heading text-xl">Our Blog</span>
        </div>
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
              <a className="inline-block mb-4 text-2xl text-black dark:text-white leading-tight text-coolGray-800  hover:text-coolGray-900 font-bold hover:underline">
                {data[0].title}
              </a>
            </div>

            <div className="flex items-center mb-10">
              <Image
                src={AuthorimageProps.src}
                blurDataURL={AuthorimageProps.blurDataURL}
                loader={AuthorimageProps.loader}
                alt={"alt"}
                placeholder="blur"
                width={40}
                height={40}
                className="w-10 h-10 mr-4 rounded-full"
              />
              <span className="text-gray-400">Pora Kakkeren</span>
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
