"use client";

import { Post } from "./post";
import { fetchData } from "../db/client";
import { useEffect, useState } from "react";
import { supabase } from "../db/client";
import { SetStateAction } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState<[{ post: string }]>([{ post: "" }]);
  useEffect(() => {
    fetchData()
      .then((res) => setPosts(res.data as SetStateAction<[{ post: string }]>))
      .catch((error) => console.log(error));
    supabase
      .channel("schema-table-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "posts",
        },
        async () => {
          try {
            setPosts([] as unknown as SetStateAction<[{ post: string }]>);
            const res = await fetchData();
            return setPosts(res.data as SetStateAction<[{ post: string }]>);
          } catch (error) {
            return console.log(error);
          }
        }
      )
      .subscribe();
  }, []);

  return (
    <>
      {posts.length > 0 ? (
        posts.map((post) => {
          return <Post post={post.post} key={new Date().valueOf()} />;
        })
      ) : (
        <h1 className='texxt-lg'>No posts here</h1>
      )}
    </>
  );
};
