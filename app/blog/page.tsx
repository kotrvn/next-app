'use client'
import { Metadata } from "next";
import { Posts } from "@/components/Posts";
import { PostsSearch } from "@/components/PostsSearch";
import { usePosts } from "@/store";
import { shallow } from "zustand/shallow";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: 'Blog page',
  description: 'Awesome about page',
}

export default async function Blog() {
  return (
    <>
      <h1>Blog page</h1>
      <PostsSearch />
      <Posts />
    </>

  )
}