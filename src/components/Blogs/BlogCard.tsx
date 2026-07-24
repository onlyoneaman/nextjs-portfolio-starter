import React from 'react';
import Link from 'next/link';
import {Card, CardContent, CardHeader} from '@/components/ui/card';
import {Blog} from "@/types/blog.ts";
import moment from "moment";
import { motion } from "framer-motion";
import Image from 'next/image';
import { FollowerPointerCard } from '@/components/ui/following-pointer';

type BlogCardProps = {
  post: Blog
}

const BlogCard = ({post}: BlogCardProps) => {
  const {
    date,
    title,
    description,
    image,
    cardImage,
    type,
    slug,
    highlight
  } = post;

  return (
    <Link href={`/blogs/${slug}`}>
      <motion.div
        className="w-full h-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FollowerPointerCard
          title={
            <div className="flex flex-col flex-wrap gap-2">
              <h2 className="text-primary max-w-sm font-semibold leading-none line-clamp-1">
                {"Check this out"}
              </h2>
            </div>
          }
        >
          <Card
            className='bg-neutral-200 border-none text-gray-800 hover:border-zinc-800 min-w-full h-full flex flex-col'
          >
            <CardHeader
              className="flex flex-col p-2 gap-2"
            >
              {(cardImage || image) ? (
                <Image
                  className="rounded-md object-cover w-full aspect-video"
                  src={cardImage || image || ""}
                  alt={title}
                  width={500}
                  height={500}
                />
              ) : (
                <div className="min-w-36 h-24 bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-md"></div>
              )}
            </CardHeader>
            <CardContent
              className="flex flex-col gap-1 flex-1 pb-4"
            >
              <div className="flex-1">
                <h2 className="text-primary font-semibold line-clamp-1">
                  {title}
                </h2>
                <h3 className="text-gray-800 text-sm line-clamp-1">
                  {highlight}
                </h3>
                <h4 className="text-xs line-clamp-2">
                  {description}
                </h4>
              </div>

              <div
                className="flex gap-2 items-center justify-between text-xs text-zinc-700 mt-auto pt-2"
              >
                <span>
                  {moment(date).format("MMM DD, YYYY")}
                </span>
                <span
                  className="bg-zinc-800 text-white rounded-md px-2 py-1"
                >
                  {type}
                </span>
              </div>
            </CardContent>
          </Card>
        </FollowerPointerCard>
      </motion.div>
    </Link>
  )
};

export default BlogCard;
