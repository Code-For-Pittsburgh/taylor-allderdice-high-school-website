import Container from "@components/container";
import Layout from "@components/layout";
import { authorsquery, configQuery } from "@lib/groq";
import { getClient } from "@lib/sanity";
import GetImage from "@utils/getImage";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, siteconfig }) {
  const imageProps = authors?.image ? GetImage(author.image) : null;

  return (
    <Layout {...siteconfig}>
      <section className="relative py-24">
        <div className="container px-4 mx-auto relative ">
          <div className="max-w-md lg:p-10 mb-10">
            <h3 className="mb-4 text-4xl md:text-5xl font-bold tracking-tighte text-black dark:text-white">
              Meet our team
            </h3>
            <p className="text-lg md:text-xl text-coolGray-500 font-medium">
              We are a team of passionate people who love to create
              and share.
            </p>
          </div>

          <div className="flex flex-wrap  -mb-14">
            {authors.map(author => {
              const { ...imgprops } = GetImage(author?.image);
              return (
                <div
                  key={authors.id}
                  className="w-full md:w-1/2 lg:w-1/3 mb-14">
                  <a href={`/author/${author.slug.current}`}>
                    <div className="max-w-xs mx-auto">
                      <div
                        className="relative mb-5 h-72 overflow-hidden rounded-lg 
                    ">
                        <img
                          className="relative h-72 w-full object-cover rounded-lg hover:opacity-75 transition duration-150 ease-in-out hover:scale-110"
                          {...imgprops}
                          alt={author.name || " "}
                          style={{ zIndex: 1 }}
                        />
                      </div>
                      <h3 className="mb-2 text-xl md:text-3xl leading-tight font-semibold text-black dark:text-white">
                        {author.name}
                      </h3>
                      <h1 className="text-lg font-medium text-green-500">
                        {(author.role + "").toUpperCase()}
                      </h1>
                    </div>
                  </a>
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
