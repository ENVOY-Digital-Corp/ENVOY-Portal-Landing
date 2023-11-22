import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react"

type Props = {
  imageSrc?: string
  imageAlt?: string
  title: string
  description: string
  date: string
  newsSource?: string
  href?: string
}
const HorizontalNewsCard: React.FC<Props> = ({
  imageSrc = "/circle-graphic.webp",
  imageAlt = "circle-graphic",
  title,
  description,
  date,
  newsSource,
  href = "#",
}) => {
  return (
    <Fragment>
      <div className="hidden self-stretch flex-col justify-start items-start gap-6 md:flex">
        <div className="self-stretch flex-col justify-start items-start gap-6 flex">
          <div className="self-stretch justify-start items-center gap-6 flex">
            <div className="flex-col justify-start items-start flex">
              <div className="w-32 h-32 bg-black bg-opacity-5 rounded-lg justify-center items-center flex">
                <Image
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
            </div>
            <div className="grow shrink basis-0 justify-center items-start flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 flex">
                <Link href={href} className="hover:underline">
                  <h3 className="self-stretch text-white text-lg font-bold leading-loose">
                    {title}
                  </h3>
                </Link>
                <p className="self-stretch opacity-40 text-white text-sm font-normal leading-snug">
                  {description}
                </p>
              </div>
            </div>
          </div>
          <div className="self-stretch px-8 justify-end items-start flex gap-2">
            <div className="text-white text-xs font-normal leading-none tracking-tight">
              {date}
            </div>
            <div className="text-white text-xs font-normal leading-none tracking-tight">
              {newsSource}
            </div>
          </div>
          <div className="self-stretch h-px opacity-20 border border-white flex-col justify-start items-start flex">
            <div className="w-px h-px relative" />
          </div>
        </div>
      </div>

      {/* SP */}
      <div className="flex-col justify-start items-start gap-4 flex md:hidden">
        <div className="self-stretch justify-start items-start gap-6 flex">
          <div className="flex-col justify-start items-start flex">
            <div className="w-24 h-24 bg-black bg-opacity-5 rounded-lg justify-center items-center flex">
              <Image
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
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-4 flex">
            <div className="self-stretch h-16 flex-col justify-start items-start gap-2 flex">
              <Link href="#" className="hover:underline">
                <h3 className="self-stretch text-white text-lg font-bold">
                  {title.length > 40 ? `${title.slice(0, 40)}...` : title}
                </h3>
              </Link>
            </div>
            <div className="w-full justify-start items-start flex gap-2">
              <div className="text-white text-xs font-normal leading-none tracking-tight">
                {date}
              </div>
              <div className="text-white text-xs font-normal leading-none tracking-tight">
                {newsSource}
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-px opacity-20 border border-white flex-col justify-start items-start flex">
          <div className="MinHeight w-px h-px relative" />
        </div>
      </div>
    </Fragment>
  )
}

export default HorizontalNewsCard
