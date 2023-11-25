"use client";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import exampleBlogs from "../exampleBlogs.js";

interface Post {
  id: number;
  title: string;
  img: string;
  description: string;
  createdAt: Date;
}

export const Carousel = ({ posts }: { posts: Post[] }) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className='embla mb-5' ref={emblaRef}>
      <div className='embla__container'>
        {posts.map((blog: Post) => (
          <div className='embla__slide max-h-[500px] relative' key={blog.id}>
            <img
              src={blog.img}
              alt='no image'
              className='w-full h-full object-cover'
            />
            <div className='text-overlay absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50'></div>
            <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
              <Link
                href={`/post/${blog.id}`}
                className='flex justify-center items-center m-auto'
              >
                <p className='text-white md:font-extrabold md:text-3xl font-bold text-lg p-4 md:p-8'>
                  {blog.title}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
