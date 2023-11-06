import Category from "../Cards/Category"

type Props = {
  title: string
  date: string
  categories: string[]
}
const BlogHeader: React.FC<Props> = ({ title, date, categories }) => {
  return (
    <div className="Cardheader flex-col justify-center items-start gap-8 flex">
      <div className="Content self-stretch flex-col justify-start items-start flex">
        <div className="EternalCryptWizardryBcSignsPartnershipWithSoutheastAsiaGameGuildGarudaGuildGames self-stretch text-neutral-50 text-2xl md:text-5xl font-semibold font-['Euclid Circular B']">
          {title}
        </div>
      </div>
      <div className="DateCategory self-stretch justify-start items-start gap-2 flex">
        <div className="Chip px-1 py-0.5 rounded-full justify-start items-start flex">
          <div className="Typography px-1.5 flex-col justify-start items-start flex">
            <div className="Chip text-white text-xs font-normal font-['Euclid Circular B'] leading-none tracking-tight">
              {date}
            </div>
          </div>
        </div>
        <div className="Frame48095603 grow shrink basis-0 justify-start items-start gap-2 flex">
          {categories.map((category, index) => (
            <Category key={index} title={category} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogHeader
