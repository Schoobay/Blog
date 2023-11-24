import { Card, Flex, Inset, Strong, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface PostProps {
  post: {
    key: number;
    title: string;
    description: string;
    img: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <Link href={`/post/${post.key}`}>
      <Card
        size={{ initial: "2", md: "5" }}
        style={{ maxWidth: 500, Height: 500 }}
        variant='classic'
      >
        <Inset clip='padding-box' side='top' pb='current'>
          <img
            src={post.img}
            alt='Bold typography'
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: 250,
            }}
          />
        </Inset>
        <Text as='p' size='3'>
          <Strong>{post.title}</Strong>
        </Text>
      </Card>
    </Link>
  );
};

export default Post;
