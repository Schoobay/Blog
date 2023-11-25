import { Button } from "@radix-ui/themes";
import React from "react";

const PostActions = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Button>Edit Post</Button>
      <Button color='red'>Delete Post</Button>
    </div>
  );
};

export default PostActions;
