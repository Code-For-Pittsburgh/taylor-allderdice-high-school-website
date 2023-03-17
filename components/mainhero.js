import CategoryLabel from "./blog/category";
import { parseISO, format } from "date-fns";
import GetImage from "@utils/getImage";

export default function MainArticle(props) {
  const data = props.data;

  const imageProps = data[0]?.mainImage
    ? GetImage(data[0].mainImage)
    : null;

  return (
    <>
      <div className="flex-shrink max-w-full w-full px-3 pb-5">
        <div className="relative hover-img max-h-98 overflow-hidden">
          {imageProps && (
            <a href={`/post/${data[0].slug.current}`}>
              <img
                className="max-w-full w-full mx-auto h-auto transition duration-300 ease-in-out hover:scale-110 hover:opacity-75 "
                src={imageProps.src}
                loading="lazy"
                alt={data[0].title}
              />
            </a>
          )}

          <div className="bg-transparent lg:bg-transparent md:bg-transparent bg-black	lg:absolute md:absolute lg:bg-gradient-to-t md:bg-gradient-to-t from-black px-5 pt-8 pb-5 bottom-0 w-full ">
            <a href={`/post/${data[0].slug.current}`}>
              <h2 className="lg:text-5xl md:text-3xl text-3xl font-bold capitalize text-white lg:text-white md:text-white dark:text-white mb-3">
                {data[0].title}
              </h2>
            </a>
            <p
              className="text-sm  capitalize text-gray-100
            lg:text-gray-100 dark:text-gray-100 mb-3">
              {data[0].excerpt}
            </p>

            <div className="pt-2">
              <div className="text-gray-100">
                <div className="inline-block">
                  <a
                    href={`/post/${data[0].slug.current}`}
                    className="mb-5 hover:underline text-coolGray-500 font-medium">
                    {data[0].author.name} •{" "}
                    {format(
                      parseISO(data[0].publishedAt),
                      "MMMM do, yyyy"
                    )}
                  </a>
                  <CategoryLabel categories={data[0].categories} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
