import { Card, Flex, Inset, Strong, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Post {
  id: number;
  title: string;
  img: string;
}

const PostCard = ({ id, img, title }: Post) => {
  return (
    <Link href={`/post/${id}`}>
      <Card
        size={{ initial: "2", md: "5" }}
        style={{ maxWidth: 500, Height: 500 }}
        variant='classic'
      >
        <Inset clip='padding-box' side='top' pb='current'>
          <img
            src={img}
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
          <Strong>{title}</Strong>
        </Text>
      </Card>
    </Link>
  );
};

export default PostCard;
