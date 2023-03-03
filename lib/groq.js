import { groq } from "next-sanity";

export const postquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) {
  ...,
  author->,
  categories[]->
}
`;

export const artquery = groq`
*[_type == "art"] | order(publishedAt desc, _createdAt desc) {
  ...,
  author->
}
`;

export const configQuery = groq`
*[_type == "siteconfig"][0] {
  ...,
}
`;

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
  publishedAt
 }
}
`;

export const allcat = groq`
*[_type == "category"] {
  'slug': slug.current,
}
`;
