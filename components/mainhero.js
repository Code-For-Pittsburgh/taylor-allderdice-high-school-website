import CategoryLabel from "./blog/category";
import { parseISO, format } from "date-fns";
import GetImage from "@utils/getImage";

export default function MainArticle(props) {
  const data = props.data;

  const imageProps = data[0]?.mainImage
    ? GetImage(data[0].mainImage)
    : null;

  return (
    <section className="py-10 max-w-screen-xl m-auto">
      <div className="container px-4 mx-auto">
        <div
          className={`flex  ${
            props.reverse ? "flex-row-reverse" : ""
          } flex-wrap -mx-4`}>
          <div className="w-full lg:w-1/2 px-4 mb-14 lg:mb-0 m ">
            <a href={`/post/${data[0].slug.current}`}>
              {imageProps && (
                <img
                  className="block mx-auto object-contain max-h-96	rounded "
                  src={imageProps.src}
                  alt=""
                />
              )}
            </a>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="lg:max-w-md mx-auto">
              <a
                href={`/post/${data[0].slug.current}`}
                className="inline-block mb-2 text-3xl text-black dark:text-white leading-tight text-coolGray-800  hover:text-coolGray-900 font-bold hover:underline">
                {data[0].title}
              </a>
              <a
                href="/"
                className="mb-5 hover:underline text-coolGray-500 font-medium">
                {data[0].author.name} •{" "}
                {format(
                  parseISO(data[0].publishedAt),
                  "MMMM do, yyyy"
                )}
              </a>
              <p className="max-w-md font-light mb-2 mt-2">
                {data[0].excerpt}
              </p>
              <div className="mb-2">
                <CategoryLabel categories={data[0].categories} />
              </div>
              <a
                className="inline-flex items-center text-base md:text-lg text-green-500 hover:text-green-600 font-semibold"
                href={`/post/${data[0].slug.current}`}>
                <span className="mr-3">Read More</span>
                <svg
                  width={8}
                  height={10}
                  viewBox="0 0 8 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
