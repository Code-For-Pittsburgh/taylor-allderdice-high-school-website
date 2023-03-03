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
import { artquery, configQuery } from "@lib/groq";
import GetImage from "@utils/getImage";

export default function Gallery(props) {
  const { postdata, siteconfig, preview } = props;
  console.log(postdata);

  const router = useRouter();
  //console.log(router.query.category);

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
            Our Gallery
          </h1>

          <div className="flex mt-20 flex-wrap -mx-4 mb-12 md:mb-20">
            <div className="columns-1 md:columns-3 lg:columns-3">
              {postdata.map(post => (
                <div
                  key={post._id}
                  className="relative mb-4 before:content-[''] 
                before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                  <img
                    className="w-full rounded-md"
                    src={GetImage(post?.mainImage).src}
                  />
                  <div className="test__body absolute inset-0 p-8 text-white flex flex-col h-full opacity-0 filter hover:bg-black hover:opacity-100 transition-all	">
                    <div className="relative ">
                      <a className="test__link absolute inset-0" />
                      <h1 className="test__title text-3xl font-bold mb-3">
                        {post?.title}
                      </h1>
                      <p className="test__author font-sm font-light">
                        {post?.author?.name}
                      </p>
                    </div>
                    <div className="mt-auto"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const pictures = await getClient(preview).fetch(artquery);
  const config = await getClient(preview).fetch(configQuery);

  // const categories = (await client.fetch(catquery)) || null;

  return {
    props: {
      postdata: pictures,
      // categories: categories,
      siteconfig: { ...config },
      preview
    },
    revalidate: 10
  };
}
