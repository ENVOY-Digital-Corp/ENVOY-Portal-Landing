/* eslint-disable quotes */
import { format, parseISO } from "date-fns"
import HorizontalNewsCard from "../common/cards/HorizontalNewsCard"
import NewsHighlightCard from "../common/cards/NewsHighlightCard"
import JsonContent from "@/blog/content.json"
import { BlogContentType } from "@/blog/type"
import { MONTH_YEAR_FORMAT } from "@/utils/constants"

const BlogContent = JsonContent as unknown as BlogContentType
// Sort the pages by date DESC
const pageArray = Object.values(BlogContent.pages)
  .slice(0, 10)
  .sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
const highlightPages = BlogContent.highlights
  .map(highlight => BlogContent.pages[highlight])
  .slice(0, 3)

type Props = {}
const BlogHighlightSection: React.FC<Props> = ({}) => {
  return (
    <section className="flex flex-col-reverse justify-end md:grid md:grid-cols-3 gap-8 pt-8 mt-12">
      <div className="md:col-span-2 justify-start items-start gap-8 flex">
        <div className="CardGroup grow shrink basis-0 flex-col justify-start items-start gap-8 flex">
          {pageArray.map((page, index) => (
            <HorizontalNewsCard
              imageSrc={page.imageSrc}
              alt={page.alt}
              key={index}
              title={page.title}
              description={page.description}
              date={format(parseISO(page.date), MONTH_YEAR_FORMAT)}
              newsSource={page.newsSource}
              href={page.path}
            />
          ))}
        </div>
        <div className="hidden DividerVertical h-96 opacity-20 border border-white flex-col justify-start items-start md:flex">
          <div className="MinWidth w-px h-px relative" />
        </div>
      </div>

      <div className="Higlights flex-col justify-start items-end gap-10 flex">
        <div className="Title w-full flex-col justify-start items-start flex">
          <h2 className="Highlights text-white text-3xl font-semibold underline">
            Highlights
          </h2>
        </div>
        <div className="CardGroup flex-col justify-start items-start gap-6 flex">
          {highlightPages.map((page, index) => (
            <NewsHighlightCard
              key={index}
              no={`0${index + 1}`}
              title={page.title}
              description={page.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogHighlightSection
