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
                className="max-w-full w-full mx-auto h-auto"
                src={imageProps.src}
                alt="Image description"
              />
            </a>
          )}

          <div className="bg-transparent lg:bg-transparent md:bg-transparent bg-stone-900	lg:absolute md:absolute lg:bg-gradient-to-t md:bg-gradient-to-t from-black px-5 pt-8 pb-5 bottom-0 w-full ">
            <a href="#">
              <h2 className="lg:text-5xl md:text-3xl text-3xl font-bold capitalize text-white lg:text-white md:text-white dark:text-white mb-3">
                {data[0].title}
              </h2>
            </a>
            <p className="text-sm font-bold md:text-white capitalize text-white lg:text-white dark:text-white mb-3">
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
