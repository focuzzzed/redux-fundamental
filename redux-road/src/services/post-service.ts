import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../models/post.interface";

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    fetchAllPosts: build.query<Post[], number>({
      query: (limit = 5) => ({
        url: '/posts',
        params: {
          _limit: limit,
        }
      }),
      providesTags: ['Post']
    }),
    createPost: build.mutation<Post, Post>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Post']
    }),
    updatePost: build.mutation<Post, Post>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Post']
    }),
    deletePost: build.mutation<Post, Post>({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post']
    }),
  })
})