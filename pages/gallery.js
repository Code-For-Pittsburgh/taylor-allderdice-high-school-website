import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Layout from "@components/layout";
import Container from "@components/container";
// import Subpagehero from "@components/sections/subpagehero";
// import Categories from "@components/categories";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "@lib/sanity";
// import defaultOG from "../public/img/opengraph.jpg";
import { postquery, configQuery } from "@lib/groq";
import GetImage from "@utils/getImage";
import PostList from "@components/postlist";

export default function Gallery(props) {
  const { postdata, siteconfig, preview } = props;

  const router = useRouter();
  //console.log(router.query.category);

  const { data: posts } = usePreviewSubscription(postquery, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined
  });

  const { data: siteConfig } = usePreviewSubscription(configQuery, {
    initialData: siteconfig,
    enabled: preview || router.query.preview !== undefined
  });
  //console.log(posts);
  const ogimage = siteConfig?.openGraphImage
    ? GetImage(siteConfig?.openGraphImage).src
    : "";

  return (
    <>
      <Layout {...siteConfig}>
        <NextSeo
          title={`Blog — ${siteConfig?.title}`}
          description={siteConfig?.description || ""}
          canonical={siteConfig?.url}
          openGraph={{
            url: siteConfig?.url,
            title: `Blog — ${siteConfig?.title}`,
            description: siteConfig?.description || "",
            images: [
              {
                url: ogimage,
                width: 800,
                height: 600,
                alt: ""
              }
            ],
            site_name: "Code for Pitsburgh"
          }}
          twitter={{
            cardType: "summary_large_image"
          }}
        />

        <Container>
          <h1 className="text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
            Archive
          </h1>

          <div className="flex mt-20 flex-wrap -mx-4 mb-12 md:mb-20">
            <div className="columns-1 md:columns-3 lg:columns-3">
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/1"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/2"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/3"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/4"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/5"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/6"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/7"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/8"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/9"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/10"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/11"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/12"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/13"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/14"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="inline-block relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/15"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/16"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/17"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/18"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/19"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/20"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/21"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/22"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/23"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/24"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                <img
                  className="w-full rounded-md"
                  src="https://source.unsplash.com/random/25"
                />
                <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
                  <div className="relative">
                    <a
                      className="test__link absolute inset-0"
                      target="_blank"
                      href="/"
                    />
                    <h1 className="test__title text-3xl font-bold mb-3">
                      Title post
                    </h1>
                    <p className="test__author font-sm font-light">
                      Author
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">
                      #tag
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(postquery);
  const config = await getClient(preview).fetch(configQuery);

  // const categories = (await client.fetch(catquery)) || null;

  return {
    props: {
      postdata: post,
      // categories: categories,
      siteconfig: { ...config },
      preview
    },
    revalidate: 10
  };
}
