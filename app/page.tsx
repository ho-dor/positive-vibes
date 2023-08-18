"use client";

import { Posts } from "@/components/posts";
import { AddPost } from "@/components/add-post";
import { useState } from "react";
export default function Home() {
  const [posts, setPosts] = useState<string[]>([]);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Posts posts={posts} />
      <AddPost posts={posts} setPosts={setPosts} />
    </main>
  );
}
