import { groq } from "next-sanity";

export const postquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) {
  excerpt,
  featured,
  mainImage,
  publishedAt,
  slug,
  title,
  author->,
  categories[]->{
    slug,
    title,
    description
  }
  
}
`;

export const artquery = groq`
*[_type == "art"] | order(publishedAt desc, _createdAt desc) {
  ...,
  author->
}
`;

export const configQuery = groq`
*[_type == "siteconfig"][0]  {
  ...,
  navigation[] ->{
    slug,
    title,
    description
  }
}
`;

export const navbarQuery = groq`*[_type == 'category' ]{title,slug}`;

export const singlequery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ...,
  author->,
  categories[]->,
  "estReadingTime": round(length(pt::text(body)) / 5 / 180 )
}
`;

export const pathquery = groq`
*[_type == "post"] {
  'slug': slug.current,
}
`;

export const authorq = groq`
*[_type == "author"] {
  'slug': slug.current,
}
`;

export const authorsquery = groq`
*[_type == "author"] {
 ...
}
`;

// test below
// to delete later

export const listquery = groq`
*[_type == "listing"] | order(_createdAt desc) [$start..$end] {
  ...,
  category->
 }
`;

export const productquery = groq`
*[_type == "listing" && slug.current == $slug][0] {
  ...,
  category-> {
    ...,
    enqform->,
    vendorform->
  }
 }
`;

export const onecatquery = groq`
*[_type == 'category' && slug.current == ($category)  ]{
  title,
  description,
  'result' : 
  *[_type == 'post' && references(^._id)  ]{
  author->,
  categories[]->,
  mainImage,
  slug,
  title,
  excerpt,
  publishedAt
 }
}
`;

export const allcat = groq`
*[_type == "category"] {
  'slug': slug.current,
}
`;

export const authortest = groq`
*[_type == 'author' && slug.current == ($author)  ]{
  name,
  title,
  bio,
  image,
  role,
  'result' : 
  *[_type == 'post' && references(^._id)  ]{
  author->,
  categories[]->,
  mainImage,
  slug,
  title,
  publishedAt,
  excerpt
 }
}
`;

export const related = groq`
*[_type == "post" && slug.current == $slug][0] {
  title,
  categories[]->,
  "related": *[_type == "post" && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..5] {
     _id,
    author -> {
    ...
  },
    categories,
    excerpt,
    featured,
    mainImage,
    publishedAt,
    slug,title
   }
}
`;
