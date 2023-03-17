import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@components/layout";
import Container from "@components/container";
import { useRouter } from "next/router";
import client, {
  getClient,
  usePreviewSubscription,
  PortableText
} from "@lib/sanity";
import ErrorPage from "next/error";
import GetImage from "@utils/getImage";
import { parseISO, format } from "date-fns";
import { NextSeo } from "next-seo";
import PostList from "@components/postlist";
import ArchivePostList from "@components/archiveposts";
import HorizontalPost from "@components/PostListHorizontal";

import {
  singlequery,
  configQuery,
  catquery,
  pathquery,
  authorq,
  authortest,
  test
} from "@lib/groq";
import CategoryLabel from "@components/blog/category";
import AuthorCard from "@components/blog/authorCard";
import { postquery, categoryquery } from "@lib/groq";

export default function Post(props) {
  const { postdata, siteconfig, preview, categorydata } = props;

  const router = useRouter();
  const givenSlug = useRouter().query.slug;

  const { data: posts } = usePreviewSubscription(postquery, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined
  });

  const { data: siteConfig } = usePreviewSubscription(configQuery, {
    initialData: siteconfig,
    enabled: preview || router.query.preview !== undefined
  });
  const ogimage = siteConfig?.openGraphImage
    ? GetImage(siteConfig?.openGraphImage).src
    : "";

  const AuthorimageProps = categorydata?.image
    ? GetImage(categorydata.image)
    : null;

  return (
    <>
      {posts && siteConfig && (
        <Layout {...siteConfig}>
          <NextSeo
            title={categorydata.title + " posts"}
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
              site_name: "Bek Blogs"
            }}
            twitter={{
              cardType: "summary_large_image"
            }}
          />

          <div className="flex flex-row flex-wrap max-w-screen-xl m-auto">
            <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
              <div className="flex flex-row flex-wrap -mx-3 mx-auto">
                <section className="">
                  <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -mx-4 -mb-4">
                      {posts.map((post, index) => (
                        <PostList
                          key={post._id}
                          post={post}
                          aspect="about"
                        />
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div
              className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pb-8 order-last lg:order-last p-5 pt-10 border-l border-gray-200 dark:border-zinc-900 order-first lg:order-last
             ">
              <div
                className="w-full bg-white sticky top-2
              dark:bg-black rounded overflow-hidden pb-10">
                <div className="w-full">
                  <div className="max-w-xs mx-auto">
                    <div
                      className="relative mb-5 h-72 overflow-hidden rounded-lg 
                    ">
                      <img
                        className="relative h-72 w-full object-cover rounded-lg hover:opacity-75 transition duration-150 ease-in-out hover:scale-110"
                        src={AuthorimageProps.src}
                        alt={categorydata.title}
                        style={{ zIndex: 1 }}
                      />
                    </div>
                    <h3 className="mb-2 text-xl md:text-3xl leading-tight font-semibold text-black dark:text-white">
                      {categorydata.title}
                    </h3>
                    <h1 className="text-lg font-medium text-green-500">
                      {(categorydata.role + "").toUpperCase()}
                    </h1>
                    {categorydata.description && (
                      <PortableText
                        value={categorydata.description}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const config = await getClient(preview).fetch(configQuery);
  const categories = await client.fetch(authortest, {
    author: params.slug
  });

  return {
    props: {
      postdata: categories[0].result,
      categorydata: {
        title: categories[0].name,
        description: categories[0].bio,
        image: categories[0].image,
        role: categories[0].role
      },
      siteconfig: { ...config },
      preview
    },
    revalidate: 10
  };
}

export async function getStaticPaths() {
  const allPosts = await client.fetch(authorq);
  return {
    paths:
      allPosts?.map(page => ({
        params: {
          slug: page.slug
        }
      })) || [],
    fallback: true
  };
}
