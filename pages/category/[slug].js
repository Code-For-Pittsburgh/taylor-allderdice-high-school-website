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

import {
  singlequery,
  allcat,
  configQuery,
  categoryq,
  onecatquery
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
          <Container>
            <div className="max-w-3xl mb-10">
              <h3 className="mb-4 text-3xl md:text-3xl font-bold tracking-tighte text-green-400">
                {categorydata.title.toUpperCase()}
              </h3>
              <p className="text-lg md:text-lg text-coolGray-500 font-medium">
                {categorydata.description}
              </p>
            </div>
            <div className="flex mt-20 flex-wrap -mx-4 mb-12 md:mb-20">
              {posts.map(post => (
                <ArchivePostList
                  key={post._id}
                  post={post}
                  aspect="square"
                />
              ))}
            </div>
          </Container>
        </Layout>
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const config = await getClient(preview).fetch(configQuery);
  const categories = await client.fetch(onecatquery, {
    category: params.slug
  });

  return {
    props: {
      postdata: categories[0].result,
      categorydata: {
        title: categories[0].title,
        description: categories[0].description
      },
      siteconfig: { ...config },
      preview
    },
    revalidate: 10
  };
}

export async function getStaticPaths() {
  const allPosts = await client.fetch(allcat);
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
