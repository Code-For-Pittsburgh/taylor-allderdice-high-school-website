import { NextSeo } from "next-seo";
import Layout from "@components/layout";
import Container from "@components/container";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "@lib/sanity";
import defaultOG from "../public/img/opengraph.jpg";
import { postquery, configQuery } from "@lib/groq";
import GetImage from "@utils/getImage";
import PostList from "@components/postlist";

export default function Post(props) {
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
    : defaultOG.src;
  return (
    <>
      {posts && siteConfig && (
        <Layout {...siteConfig}>
          <NextSeo
            title={`${siteConfig?.title}`}
            description={siteConfig?.description || ""}
            canonical={siteConfig?.url}
            openGraph={{
              url: siteConfig?.url,
              title: `${siteConfig?.title}`,
              description: siteConfig?.description || "",
              images: [
                {
                  url: ogimage,
                  width: 800,
                  height: 600,
                  alt: ""
                }
              ],
              site_name: "Stablo"
            }}
            twitter={{
              cardType: "summary_large_image"
            }}
          />
          <section className="pt-24 pb-28 bg-white dark:bg-black overflow-hidden">
            <div className="container px-4 mx-auto">
              <h2 className="mb-7 text-6xl md:text-8xl xl:text-10xl font-bold font-heading text-center tracking-px-n leading-none text-green-500">
                Say hi to new blogs!
              </h2>
              <p className="mb-14 text-lg text-black dark:text-white font-medium text-center mx-auto md:max-w-2xl">
                This site is created and run by "Code for Pittsburgh.
                It is a nonprofit organization that is dedicated to
                improving the quality of life in Pittsburgh by using
                technology to solve problems.
              </p>
              <div className="flex justify-center">
                <div className="inline-block">
                  <img
                    className="mb-11 mx-auto transform hover:translate-y-3 transition ease-in-out duration-1000"
                    src="https://nextjs.org/static/blog/next-13/twitter-card.png"
                    alt=""
                  />
                  <ul className="flex flex-wrap justify-center -m-8">
                    <li className="w-auto p-8">
                      <a
                        className="text-sm  text-green-400 hover:text-green-500 font-semibold uppercase tracking-px"
                        href="#">
                        Fast and Secure
                      </a>
                    </li>
                    <li className="w-auto p-8">
                      <a
                        className="text-sm text-green-400 hover:text-green-500 font-semibold uppercase tracking-px"
                        href="#">
                        Easy to Use
                      </a>
                    </li>
                    <li className="w-auto p-8">
                      <a
                        className="text-sm text-green-400 hover:text-green-500 font-semibold uppercase tracking-px"
                        href="#">
                        Cloud Servers
                      </a>
                    </li>
                    <li className="w-auto p-8">
                      <a
                        className="text-sm text-green-400 hover:text-green-500 font-semibold uppercase tracking-px"
                        href="#">
                        24/7 Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section
            className="py-20 xl:pt-24 xl:pb-32 bg-white dark:bg-black"
            style={{
              backgroundImage:
                'url("flex-ui-assets/elements/pattern-white.svg")',
              backgroundPosition: "center"
            }}>
            <div className="container px-4 mx-auto">
              <div className="text-center">
                <h3 className="mb-4 text-4xl md:text-5xl  text-black dark:text-white font-bold tracking-tighter">
                  We believe in the power of technology
                </h3>
                <p className="mb-16 xl:mb-24 mx-auto text-lg md:text-xl  text-black dark:text-white font-medium max-w-4xl">
                  This website is a blog platform that lets you run
                  your blog on one platform.
                </p>
                <div className="flex flex-wrap justify-center -mx-4">
                  <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
                    <h2 className="mb-2 text-4xl md:text-5xl  text-black dark:text-white font-bold tracking-tighter">
                      235.000
                    </h2>
                    <p className="text-lg md:text-xl  text-black dark:text-white font-medium">
                      Projects completed
                    </p>
                  </div>
                  <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
                    <h2 className="mb-2 text-4xl md:text-5xl  text-black dark:text-white font-bold tracking-tighter">
                      $10m
                    </h2>
                    <p className="text-lg md:text-xl  text-black dark:text-white font-medium">
                      APR
                    </p>
                  </div>
                  <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
                    <h2 className="mb-2 text-4xl md:text-5xl  text-black dark:text-white font-bold tracking-tighter">
                      +50.000
                    </h2>
                    <p className="text-lg md:text-xl  text-black dark:text-white font-medium">
                      Hours Saved Annually
                    </p>
                  </div>
                  <div className="w-full md:w-1/3 lg:w-1/4 px-4">
                    <h2 className="mb-2 text-4xl md:text-5xl  text-black dark:text-white font-bold tracking-tighter">
                      3.500
                    </h2>
                    <p className="text-lg md:text-xl  text-black dark:text-white font-medium">
                      Unique Users
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="md:max-w-5xl bg-white dark:bg-black mx-auto mb-2 md:mb-12 text-center">
            <h3 className="mb-4 text-3xl md:text-5xl leading-tight  text-black dark:text-white font-bold tracking-tighter">
              Our latest posts
            </h3>
          </div>

          <section className="py-16 bg-white dark:bg-black">
            <div className="container max-w-screen-lg px-4 mx-auto">
              <div className="flex flex-wrap -mx-4 mb-12 md:mb-20">
                {posts.slice(0, 2).map(post => (
                  <PostList
                    key={post._id}
                    post={post}
                    aspect="square"
                  />
                ))}
              </div>
              <a
                className="flex items-center justify-center py-2 px-4 mx-auto text-sm leading-5 text-green-50 font-medium bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 md:max-w-max rounded-md"
                href="/archive">
                <span className="mr-3">View more</span>
                <svg
                  className="text-green-50"
                  width={12}
                  height={10}
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.7583 4.40833C10.6809 4.33023 10.5887 4.26823 10.4871 4.22592C10.3856 4.18362 10.2767 4.16183 10.1667 4.16183C10.0567 4.16183 9.94773 4.18362 9.84619 4.22592C9.74464 4.26823 9.65247 4.33023 9.575 4.40833L6.83333 7.15833V0.833333C6.83333 0.61232 6.74554 0.400358 6.58926 0.244078C6.43297 0.0877975 6.22101 0 6 0C5.77899 0 5.56702 0.0877975 5.41074 0.244078C5.25446 0.400358 5.16667 0.61232 5.16667 0.833333V7.15833L2.425 4.40833C2.26808 4.25141 2.05525 4.16326 1.83333 4.16326C1.61141 4.16326 1.39859 4.25141 1.24167 4.40833C1.08475 4.56525 0.99659 4.77808 0.99659 5C0.99659 5.22192 1.08475 5.43475 1.24167 5.59167L5.40833 9.75833C5.48759 9.8342 5.58104 9.89367 5.68333 9.93333C5.78308 9.97742 5.89094 10.0002 6 10.0002C6.10906 10.0002 6.21692 9.97742 6.31667 9.93333C6.41896 9.89367 6.51241 9.8342 6.59167 9.75833L10.7583 5.59167C10.8364 5.5142 10.8984 5.42203 10.9407 5.32048C10.9831 5.21893 11.0048 5.11001 11.0048 5C11.0048 4.88999 10.9831 4.78107 10.9407 4.67952C10.8984 4.57797 10.8364 4.4858 10.7583 4.40833Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </section>
        </Layout>
      )}
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
