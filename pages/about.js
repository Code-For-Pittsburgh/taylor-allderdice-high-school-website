import Container from "@components/container";
import Layout from "@components/layout";
import { authorsquery, configQuery } from "@lib/groq";
import { getClient } from "@lib/sanity";
import GetImage from "@utils/getImage";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, siteconfig }) {
  console.log(authors);
  const imageProps = authors?.image ? GetImage(author.image) : null;

  return (
    <Layout {...siteconfig}>
      <section
        className="py-24 bg-white dark:bg-black"
        style={{
          backgroundImage:
            'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundPosition: "center"
        }}>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4 mb-16">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <div className="max-w-md">
                <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
                  Team
                </span>
                <h3 className="mb-4 text-4xl md:text-5xl font-bold tracking-tighte text-black dark:text-white">
                  Meet our team
                </h3>
                <p className="text-lg md:text-xl text-coolGray-500 font-medium">
                  Highly professional and capable team of developers
                  and designers.
                </p>
              </div>
            </div>
          </div>
          <div className="flex  flex-wrap -mx-4">
            {authors.map(author => {
              const { ...imgprops } = GetImage(author?.image);
              return (
                <div
                  key={author._id}
                  className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12">
                  <div className="max-w-screen-lg block	 mx-auto">
                    <img
                      {...imgprops}
                      alt={author.name || " "}
                      className="w-full mb-5"
                    />
                    <h3 className="mb-2 text-3xl md:text-4xl leading-tight font-semibold text-black dark:text-white">
                      {author.name}
                    </h3>
                    <h1 className="text-lg font-medium text-green-500">
                      Creator
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  //console.log(params);
  const authors = await getClient(preview).fetch(authorsquery);
  const config = await getClient(preview).fetch(configQuery);
  return {
    props: {
      authors: authors,
      siteconfig: { ...config },
      preview
    },
    revalidate: 100
  };
}
