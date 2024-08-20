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

import {
  singlequery,
  configQuery,
  pathquery,
  related
} from "@lib/groq";
import CategoryLabel from "@components/blog/category";
import AuthorCard from "@components/blog/authorCard";
import HorizontalPost from "@components/PostListHorizontal";

export default function Post(props) {
  const { postdata, siteconfig, preview, relatedPosts } = props;

  const router = useRouter();
  const { slug } = router.query;

  const { data: post } = usePreviewSubscription(singlequery, {
    params: { slug: slug },
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined
  });

  const { data: siteConfig } = usePreviewSubscription(configQuery, {
    initialData: siteconfig,
    enabled: preview || router.query.preview !== undefined
  });

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const imageProps = post?.mainImage
    ? GetImage(post?.mainImage)
    : null;

  const AuthorimageProps = post?.author?.image
    ? GetImage(post.author.image)
    : null;



  return (
    <>
      {post && siteConfig && (
        <Layout {...siteConfig}>
          <NextSeo
            title={`${post.title} - ${siteConfig.title}`}
            description={post.excerpt || ""}
            canonical={`${siteConfig?.url}/post/${post.slug.current}`}
            openGraph={{
              url: `${siteConfig?.url}/post/${post.slug.current}`,
              title: `${post.title} - ${siteConfig.title}`,
              description: post.excerpt || "",
              images: [
                {
                  url: GetImage(post?.mainImage)?.src || GetImage(siteConfig?.openGraphImage)?.src || "none",
                  width: 800,
                  height: 600,
                  alt: ""
                }
              ],
              site_name: siteConfig.title
            }}
            twitter={{
              cardType: "summary_large_image"
            }}
          />
          {/*
          <div className="relative bg-white/20">
            <div className="absolute w-full h-full -z-10">
              {post?.mainImage && (
                <Image
                  {...GetImage(post.mainImage)}
                  alt={post.mainImage?.alt || "Thumbnail"}
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
            <Container className="py-48">
              <h1 className="relative max-w-3xl mx-auto mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl after:absolute after:w-full after:h-full after:bg-white after:inset-0 after:-z-10 after:blur-2xl after:scale-150">
                {post.title}
              </h1>
            </Container>
          </div> */}

          {/* <Container>
            <article className="max-w-screen-md mx-auto ">
              <div className="mx-auto my-3 prose prose-base dark:prose-invert prose-a:text-blue-500">
                {post.body && <PortableText value={post.body} />}
              </div>
              <div className="flex justify-center mt-7 mb-7">
                <Link href="/">
                  <a className="px-5 py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20 ">
                    ← View all posts
                  </a>
                </Link>
              </div>
              {post.author && <AuthorCard author={post.author} />}
            </article>
          </Container> */}

          <div className="flex flex-row flex-wrap max-w-screen-xl m-auto">
            <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
              <div className="flex flex-row flex-wrap mx-auto">
                <section className="py-5 pb-10">
                  {post?.mainImage && (
                    <MainImage image={post.mainImage} />
                  )}

                  <div className="max-w-screen-md p-2">
                    <div className="flex justify-start px-3">
                      <CategoryLabel
                        size="large"
                        categories={post.categories}
                      />
                    </div>

                    <h1 className="mt-2 px-3 mb-3 text-3xl tracking-tight text-left lg:leading-snug text-brand-primary font-bold lg:text-5xl dark:text-white">
                      {post.title}
                    </h1>

                    <div className="flex justify-left mt-3 space-x-3 px-3 text-gray-500 ">
                      <div className="flex items-center gap-3">
                        {/* <div className="relative flex-shrink-0 w-10 h-10">
                          <a href={post?.author?.slug.current}>
                            {AuthorimageProps && (
                              <Image
                                src={AuthorimageProps.src}
                                blurDataURL={
                                  AuthorimageProps.blurDataURL
                                }
                                loader={AuthorimageProps.loader}
                                objectFit="cover"
                                alt={post?.author?.name}
                                placeholder="blur"
                                layout="fill"
                                className="rounded-full"
                              />
                            )}
                          </a>
                        </div> */}
                        <div>
                          <p className="text-gray-800 dark:text-gray-400">
                            {post?.author?.name}
                          </p>
                          <div className="flex items-center space-x-2 text-sm">
                            <time
                              className="text-gray-500 dark:text-gray-400"
                              dateTime={
                                post?.publishedAt || post._createdAt
                              }>
                              {format(
                                parseISO(
                                  post?.publishedAt || post._createdAt
                                ),
                                "MMMM dd, yyyy"
                              )}
                            </time>
                            <span>
                              · {post.estReadingTime || "5"} min read
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap ">
                      <div className="my-3 prose prose-base  dark:prose-invert prose-p:text-black dark:prose-p:text-white prose-a:text-blue-500">
                        {post.body && (
                          <PortableText value={post.body} />
                        )}
                      </div>
                    </div>
                  </div>
                </section>
                {post.author && <AuthorCard author={post.author} />}

                <div className="flex w-full justify-between mt-7 mb-7">
                  <Link href="/">
                    <a className="px-2 py-2 text-base font-bold rounded-full text-green-500 bg-brand-secondary/20 ">
                      ← View all posts
                    </a>
                  </Link>
                  <Link
                    href={`/author/${post?.author?.slug?.current}`}>
                    <a className="px-2 py-2 text-base font-bold rounded-full text-green-500 bg-brand-secondary/20 ">
                      More from the author →
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pb-8 order-last lg:order-last pt-0 ">
              <div
                className="w-full bg-white sticky top-2
              dark:bg-black rounded overflow-scroll ">
                <div
                  className="
                 ">
                  <div
                    className="p-5 border-b border-zinc-200 dark:border-zinc-900
                   ">
                    <h2 className="text-3xl font-bold text-black dark:text-white">
                      Related
                    </h2>
                  </div>
                  <div className="flex flex-wrap mx-4 divide-y gap-10 dark:divide-zinc-900 divide-gray-200">
                    {relatedPosts.related.slice(0, 3).map(post => (
                      <HorizontalPost
                        key={post._id}
                        post={post}
                        aspect="square"
                      />
                    ))}
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

const MainImage = ({ image }) => {
  return (
    <div className="max-h-100 overflow-hidden mb-10">
      <Image
        {...GetImage(image)}
        className="max-w-full w-full mx-auto h-auto transition duration-300 ease-in-out hover:scale-110 hover:opacity-75 "
        alt={image.alt || "Thumbnail"}
      />
      <figcaption className="text-left mx-5 ">
        {image.caption && (
          <span className="text-sm italic text-gray-600 dark:text-gray-400">
            {image.caption}
          </span>
        )}
      </figcaption>
    </div>
  );
};

export async function getStaticProps({ params, preview = false }) {
  //console.log(params);
  const post = await getClient(preview).fetch(singlequery, {
    slug: params.slug
  });

  const config = await getClient(preview).fetch(configQuery);
  const relatedPosts = await getClient(preview).fetch(related, {
    slug: params.slug
  });

  return {
    props: {
      postdata: { ...post },
      siteconfig: { ...config },
      relatedPosts: { ...relatedPosts },
      preview
    },
    revalidate: 10
  };
}

export async function getStaticPaths() {
  const allPosts = await client.fetch(pathquery);
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
