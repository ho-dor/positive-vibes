"use client";

import { Posts } from "@/components/posts";
import { AddPost } from "@/components/add-post";
import { useState } from "react";
export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between p-24'>
      <div className='min-w-full flex justify-between'>
        <h1 className='font-bold text-xl'>PositiveVibes</h1>
        <AddPost />
      </div>
      <Posts />
    </main>
  );
}
