import React from "react";
import { fetchPosts } from "@/lib/actions/blog";
import { PostCard } from "@/components/blog/post-card";
import Link from "next/link";
import { BlogPagination } from '@/components/blog/blog-pagination';
type Props = {
  params: {
    id: string;
  };
};

async function Blog({ params: { id } }: Readonly<Props>) {
  const { posts, pagination } = await fetchPosts(parseInt(id));

  return (
    <div className='w-full min-h-screen overflow-hidden text-white bg-[#101014]'>
      <div className='mx-auto bg-[#18181c] w-full max-w-[1200px] min-h-screen'>
        <div className='grid grid-cols-1 md:grid-cols-3 mx-auto no-underline hover:no-underline'>
          {posts &&
            posts.map((post: any) => <PostCard post={post} key={post.id} />)}
        </div>
        <div>
          <BlogPagination page={parseInt(id)} pages={pagination.pages} />
        </div>
      </div>
    </div>
  );
}

export default Blog;
