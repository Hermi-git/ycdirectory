import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { urlFor } from "@/sanity/lib/image"; 
import { STARTUPS_QUERY_RESULT } from "@/sanity/types";

export type StartupTypeCard = STARTUPS_QUERY_RESULT[number];

const StartUpCard = ({ post}: {post: StartupTypeCard}) => {
  const {
    _createdAt,
    views,
    _id,
    author,
    category,
    title,
    description,
    image: startupImage,
  } = post;

  return (
    <li className="bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100 group">
      {/* Top info: date and views */}
      <div className="flex justify-between items-center">
        <p className="font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100">
          {formatDate(_createdAt)}
        </p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-pink-600" />
          <span className="font-medium text-[16px] text-black">{views}</span>
        </div>
      </div>

      {/* Author and title */}
      <div className="flex justify-between items-center mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="font-medium text-[16px] text-black line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="font-semibold text-[26px] text-black line-clamp-1">{title}</h3>
          </Link>
        </div>

        {/* Author Image */}
        <Link href={`/user/${author?.name}`}>
          {author?.image ? (
            <Image
              src={urlFor(author?.image).width(48).height(48).url()}
              alt={author?.name || "author"}
              width={48}
              height={48}
              className="rounded-full"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-200" /> // fallback circle
          )}
        </Link>
      </div>

      {/* Description + Startup Image */}
      <Link href={`/startup/${_id}`}>
        <p className="font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all">{description}</p>
        {startupImage ? (
          <Image
            src={urlFor(startupImage).width(400).height(164).url()}
            alt={title || "startup image"}
            width={400}
            height={164}
            className="w-full h-[164px] rounded-[10px] object-cover"
          />
        ) : (
          <div className="w-full h-[164px] rounded-[10px] bg-gray-200" />
        )}
      </Link>

      {/* Category + Details Button */}
      <div className="flex justify-between items-center gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="font-medium text-[16px] text-black">{category}</p>
        </Link>

        <Button className="rounded-full bg-black-200 font-medium text-[16px] text-white px-5 py-3 !important" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartUpCard;