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
      <div class="flex-shrink max-w-full w-full px-3 pb-5">
        <div class="relative hover-img max-h-98 overflow-hidden">
          {imageProps && (
            <a href={`/post/${data[0].slug.current}`}>
              <img
                class="max-w-full w-full mx-auto h-auto"
                src={imageProps.src}
                alt="Image description"
              />
            </a>
          )}

          <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
            <a href="#">
              <h2 class="text-3xl font-bold capitalize text-white mb-3">
                {data[0].title}
              </h2>
            </a>
            <p class="text-gray-100 hidden sm:inline-block">
              {data[0].excerpt}
            </p>

            <div class="pt-2">
              <div class="text-gray-100">
                <div class="inline-block">
                  <a
                    href="/"
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
