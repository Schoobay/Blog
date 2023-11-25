import Carousel from "./components/Carousel";

interface Post {
  id: number;
  title: string;
  img: string;
  description: string;
  createdAt: Date;
}

const Hero = async ({ posts }: { posts: Post[] }) => {
  return <Carousel posts={posts} />;
};

export default Hero;
