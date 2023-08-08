'use client'

import { DOMAttributes, FormEventHandler, useEffect, useState } from "react";
import { getPostsBySearch } from "@/services/getPosts";
import { usePosts } from "@/store";
import useSWR from "swr";


const PostsSearch = () => {
  const { mutate } = useSWR('posts')
  const [search, setSearch] = useState('')

  // const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  const handeleSubmitForm: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    const posts = await getPostsBySearch(search)

    mutate(posts)

  }
  return (
    <form onSubmit={handeleSubmitForm}>
      <input
        type='search'
        placeholder='search'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export { PostsSearch }