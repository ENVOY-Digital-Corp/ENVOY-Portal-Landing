import Image from "next/image"

type Props = {
  imageSrc: string
  alt: string
}
const PartnerCard: React.FC<Props> = ({ imageSrc, alt }) => {
  return (
    <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-44 lg:h-44 rounded-2xl flex-col justify-start items-start inline-flex">
      <div className="w-full h-full p-4 lg:p-10 bg-zinc-900 rounded-2xl border border-white border-opacity-10 backdrop-blur-xl justify-center items-center inline-flex">
        <div className="w-full relative">
          <Image
            alt={alt}
            src={imageSrc}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  )
}

export default PartnerCard
