import React from "react";
import exampleBlogs from "./exampleBlogs";
import PostCard from "./components/PostCard";
import { Box, Grid } from "@radix-ui/themes";

interface Post {
  id: number;
  title: string;
  img: string;
  description: string;
  createdAt: Date;
}

const Feed = ({ posts }: { posts: Post[] }) => {
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap='5'>
      {posts.map((post: Post) => (
        <PostCard
          key={post.id}
          title={post.title}
          img={post.img}
          id={post.id}
        />
      ))}
    </Grid>
  );
};

export default Feed;
