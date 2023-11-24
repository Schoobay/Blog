import React from "react";
import exampleBlogs from "./exampleBlogs";
import Post from "./components/PostCard";
import { Box, Grid } from "@radix-ui/themes";

interface PostProps {
  post: {
    key: number;
    title: string;
    description: string;
    img: string;
  };
}

const Feed = () => {
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap='5'>
      {exampleBlogs.map((blog) => (
        <Post key={blog.key} post={blog} />
      ))}
    </Grid>
  );
};

export default Feed;
