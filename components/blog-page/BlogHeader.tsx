import Category from "../common/cards/Category"

type Props = {
  title: string
  date: string
  categories: string[]
}
const BlogHeader: React.FC<Props> = ({ title, date, categories }) => {
  return (
    <section className="flex-col justify-center items-start gap-8 flex">
      <div className="self-stretch flex-col justify-start items-start flex">
        <div className="self-stretch text-neutral-50 text-2xl md:text-5xl font-semibold font-['Euclid Circular B']">
          {title}
        </div>
      </div>
      <div className="self-stretch justify-start items-start gap-2 flex">
        <div className="px-1 py-0.5 rounded-full justify-start items-start flex">
          <div className="px-1.5 flex-col justify-start items-start flex">
            <div className="text-white text-xs font-normal font-['Euclid Circular B'] leading-none tracking-tight">
              {date}
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 justify-start items-start gap-2 flex">
          {categories.map((category, index) => (
            <Category key={index} title={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogHeader
