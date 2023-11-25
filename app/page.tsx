import Hero from "./components/Carousel";
import Feed from "./Feed";
import prisma from "@/prisma/client";

export default async function Home() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  const heroPosts = posts.slice(0, 5);

  return (
    <main>
      <Hero posts={heroPosts} />
      <Feed posts={posts} />
      console.log(posts)
    </main>
  );
}
