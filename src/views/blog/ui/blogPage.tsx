//"use client";
//@ts-nocheck

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const getPosts = async () => {
  const resulting = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs`, {
    cache: "no-cache",
  });
  const result = await resulting.json();
  return result.data;
};

export const BlogPage = async () => {
  const result = await getPosts();
  //   const [result, b] = useState();
  //   useEffect(() => {
  //     resultQ.then((res) => b(res));
  //   }),
  //     [];

  console.log(result);
  return (
    <>
      <Head>
        <title>thisBlog</title>
        <meta title="description" content="This is an example of our blog" />
      </Head>
      <div>
        <h1>Blog Post Links:</h1>
        <div>
          {result?.map((result: any) => {
            return (
              <div key={result.id}>
                <Link href={`/blog/${result.id}`}>
                  <Image
                    src={`${result.attributes.imageUrl}`}
                    alt="blog-post"
                    priority={true}
                    width={300}
                    height={300}
                  />
                  <h2>{result.attributes.title}</h2>
                  <div>
                    <p>{result.attributes.description}</p>
                  </div>
                </Link>
                <div>{result.attributes.draft}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
