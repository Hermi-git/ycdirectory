import { formatDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image";
import { Button } from "./ui/button";

const StartUpCard = ({post}) => {
    const {_createdAt, views, _id, author: {_id:authorId, name}, category, title, description, image } = post
  return (
    <li className="bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-300 hover:bg-primary-100;
   group">
        <div className="flex justify-between items-center">
            <p className="font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100">
                {formatDate(_createdAt)}
            </p>
            <div className="flex gap-1.5">
                <EyeIcon className="size-6 text-pink-600"/>
                <span className="font-medium text-[16px] text-black">{views}</span>
            </div>
        </div>

        <div className="flex justify-between items-center mt-5 gap-5">
            <div className="flex-1">
                <Link href={`/user/${authorId}`}>
                    <p className="font-medium text-[16px] text-black line-clamp-1">{name}</p>
                </Link>
                <Link href={`/startup/${_id}`}>
                    <h3 className="font-semibold text-[26px] text-black line-clamp-1">{title}</h3>
                </Link>
            </div>
              <Link href={`/user/${authorId}`}>
                <Image
                  src={image}
                  alt={name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </Link>
        </div>

          <Link href={`/startup/${_id}`}>
            <p className="font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all">{description}</p>
           <img src={image} alt="placeholder" className="w-full h-[164px] rounded-[10px] object-cover" />
          </Link>

          <div className="flex justify-between items-center gap-3 mt-5">
            <Link href={`/?query=${category?.toLowerCase()}`} >
                <p className="font-medium text-[16px] text-black">{category}</p>
            </Link>

            <Button className="rounded-full bg-black-200 font-medium text-[16px] text-white px-5 py-3 !important" asChild>
                <Link href={`/startup/${_id}`}>
                    Details
                </Link>
            </Button>
          </div>
    </li>
  )
}

export default StartUpCard