"use client";

import { useParams } from "next/navigation";

import PostDetails from "./_components/PostDetails";
import PostActions from "./_components/PostActions";

const posts = () => {
  const { id } = useParams();

  return (
    <div className='flex flex-col md:flex-row gap-6'>
      <PostDetails id={id.toString()} />
      <PostActions />
    </div>
  );
};

export default posts;
