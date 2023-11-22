import Image from "next/image"
import Link from "next/link"

const TITLE_MAX_LENGTH = 100
const DESCRIPTION_MAX_LENGTH = 300

type Props = {
  imageSrc: string
  imageAlt: string
  title: string
  href?: string
  description: string
  date: string
  newsSource?: string
}
const NewsCard: React.FC<Props> = ({
  imageSrc,
  imageAlt,
  title,
  href = "#",
  description,
  date,
  newsSource,
}) => {
  return (
    <div className="p-4 bg-neutral-200 bg-opacity-5 rounded-2xl border border-white border-opacity-10 flex-col justify-between items-start flex">
      <div className="w-full flex-col justify-start items-start flex">
        <div className="w-full relative bg-black bg-opacity-5 justify-center items-start flex">
          <Image
            className="rounded-lg"
            src={imageSrc}
            alt={imageAlt}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <div className="py-4 justify-center items-start flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 flex">
            <Link href={href} className="hover:underline">
              <div className="text-white text-base font-bold leading-normal tracking-tight">
                {title.length > TITLE_MAX_LENGTH
                  ? `${title.slice(0, TITLE_MAX_LENGTH)}...`
                  : title}
              </div>
            </Link>

            <div className="opacity-40 text-white text-sm font-normal leading-tight tracking-tight">
              {description.length > DESCRIPTION_MAX_LENGTH
                ? `${description.slice(0, DESCRIPTION_MAX_LENGTH)}...`
                : description}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full justify-end items-start flex gap-2">
        <div className="text-white text-xs font-normal leading-none tracking-tight">
          {date}
        </div>
        <div className="text-white text-xs font-normal leading-none tracking-tight">
          {newsSource}
        </div>
      </div>
    </div>
  )
}

export default NewsCard
