import Image from "next/image";
import Link from "next/link";
import { cx } from "@utils/all";
import GetImage from "@utils/getImage";
import { parseISO, format } from "date-fns";
import { PhotographIcon } from "@heroicons/react/outline";
import CategoryLabel from "@components/blog/category";

export default function HorizontalPost({
  post,
  aspect,
  preloadImage
}) {
  const imageProps = post?.mainImage
    ? GetImage(post.mainImage)
    : null;
  const AuthorimageProps = post?.author?.image
    ? GetImage(post.author.image)
    : null;

  return (
    <>
      <div
        className={
          aspect === "rec"
            ? "w-full md:w-1/2 lg:w-1/3 md:p-2 yyy "
            : `w-full`
        }>
        <div className="flex flex-row mx-auto mt-4 max-w-4xl font-sans md:flex-nowrap md:justify-around md:mx-0 md:mt-8">
          <div className="flex flex-col flex-wrap mr-4 w-3/4 text-left md:mt-0 xl:relative items-around">
            <a
              className=" block text-black dark:text-white font-semibold leading-6 text-base header-500 md:text-base hover:underline"
              href={`/post/${post.slug.current}`}>
              {post.title}
            </a>

            <div className="flex flex-row mt-3 md:justify-start">
              <a href={`/author/${post.author.slug.current}`}>
                <div
                  className="leading-tight font-regular subtitle-1 hover:underline text-coolGray-500 font-medium
                ">
                  {post.author.name}
                  <br></br>
                  {format(
                    parseISO(post.publishedAt),
                    "MMMM do, yyyy"
                  )}
                </div>
              </a>
            </div>
          </div>
          <div className=" w-1/2 overflow-hidden flex">
            <div
              className={`relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 aspect-video mb-4 min-h-full	
                 } `}>
              <a href={`/post/${post.slug.current}`}>
                <Link href={`/post/${post.slug.current}`}>
                  {imageProps ? (
                    <Image
                      src={imageProps.src}
                      loader={imageProps.loader}
                      blurDataURL={imageProps.blurDataURL}
                      alt={post.mainImage.alt || "Thumbnail"}
                      placeholder="blur"
                      sizes="(max-width: 640px) 90vw, 480px"
                      layout="fill"
                      objectFit="cover"
                      priority={preloadImage ? true : false}
                      className={`transition-all hover:scale-110 transorm duration-500 ease-in-out min-h-full		 ${
                        aspect === "rec"
                          ? "sm:h-24 md:h-24 lg:h-30"
                          : "h-30"
                      }`}
                    />
                  ) : (
                    <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <PhotographIcon />
                    </span>
                  )}
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
