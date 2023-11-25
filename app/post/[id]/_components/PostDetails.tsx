"use client";

import { Post } from "@prisma/client";
import { Card, Heading } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  id: string;
}

const PostDetails: React.FC<Props> = ({ id }: Props) => {
  const { data: post, error, isLoading } = usePost(id);

  if (isLoading) return "Loading...";

  if (error) return null;

  return (
    <>
      <div className='flex flex-col space-y-6 flex-1 max-w-xl'>
        <Heading>{post?.title}</Heading>
        <Card variant='ghost'>
          <ReactMarkdown>{post?.description}</ReactMarkdown>
        </Card>
      </div>
    </>
  );
};

const usePost = (id: string) =>
  useQuery<Post>({
    queryKey: ["post"],
    queryFn: () => axios.get("/api/post/" + id).then((res) => res.data),
    retry: 3,
  });
export default PostDetails;
