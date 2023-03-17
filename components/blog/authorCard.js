import Image from "next/image";
import { PortableText } from "@lib/sanity";
import GetImage from "@utils/getImage";

export default function AuthorCard({ author }) {
  const imageProps = author?.image ? GetImage(author.image) : null;
  return (
    <div className="px-8 py-8 mt-3 text-gray-500 rounded-2xl dark:text-gray-400">
      <div className="flex items-start sm:space-x-6 sm:flex-nowrap">
        <div className="relative lg:w-1/4 md:w-24 sm:w-24 h-40 ">
          {imageProps && (
            <Image
              src={imageProps.src}
              loader={imageProps.loader}
              blurDataURL={imageProps.blurDataURL}
              objectFit="cover"
              alt={author.name}
              placeholder="blur"
              layout="fill"
            />
          )}
        </div>
        <div className="sm:w-full md:w-full lg:w-3/4">
          <div className="mb-3">
            <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              About {author.name}
            </h4>
          </div>
          <div>
            {author.bio && <PortableText value={author.bio} />}
          </div>
        </div>
      </div>
    </div>
  );
}
