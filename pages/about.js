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
          <div className="max-w-md mb-16">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
              Team
            </span>
            <h3 className="mb-4 text-4xl md:text-5xl font-bold tracking-tighte text-black dark:text-white">
              Meet our team
            </h3>
            <p className="text-lg md:text-xl text-coolGray-500 font-medium">
              Highly professional and capable team of developers and
              designers.
            </p>
          </div>

          <div className="flex flex-wrap -mx-4 -mb-14">
            {authors.map(author => {
              const { ...imgprops } = GetImage(author?.image);
              return (
                <div
                  key={authors.id}
                  className="w-full md:w-1/2 lg:w-1/3 mb-14">
                  <div className="max-w-xs mx-auto">
                    <div className="relative mb-12">
                      <img
                        className="relative h-72 w-full object-cover rounded-lg"
                        {...imgprops}
                        alt={author.name || " "}
                        style={{ zIndex: 1 }}
                      />
                      <div className="bg-green-300 absolute  top-0 left-0 w-full h-full mt-4 -ml-4 rouned-lg" />
                    </div>
                    <h3 className="mb-2 text-xl md:text-3xl leading-tight font-semibold text-black dark:text-white">
                      {author.name}
                    </h3>
                    <h1 className="text-lg font-medium text-green-500">
                      {(author.role + "").toUpperCase()}
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
