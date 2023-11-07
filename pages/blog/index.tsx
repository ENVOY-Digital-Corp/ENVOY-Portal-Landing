import NewsCard from "@/components/common/cards/NewsCard"
import SectionSlider from "@/components/common/wrappers/SectionSlider"
import { SwiperSlide } from "swiper/react"
import BlogHighlightSection from "@/components/blog-page/BlogHighlightSection"
import JsonContent from "@/blog/content.json"
import { BlogContentType } from "@/blog/type"
import { format, parseISO } from "date-fns"
import { MONTH_YEAR_FORMAT } from "@/utils/constants"

const BlogContent = JsonContent as unknown as BlogContentType
// Sort the pages by date DESC
export const newBlogPages = Object.values(BlogContent.pages)
  .slice(0, 3)
  .sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

const Blog = () => {
  return (
    <div className="Blog container">
      <div className="Title flex-col justify-start items-start gap-1.5 flex pt-8">
        <div className="LatestNewsOnEnvoyPortal self-stretch text-neutral-50 text-5xl md:text-6xl font-semibold">
          Latest news <br className="hidden md:block" />
          on Envoy Portal
        </div>
        <div className="SectionTitle self-stretch opacity-80 text-white text-lg font-normal">
          We are committed to bring progresses to ENVOY Portal ecosystem!
        </div>
      </div>

      <div className="hidden justify-center items-center md:flex pt-8 mt-4">
        <div className="Wrapper self-stretch flex-col justify-start items-start gap-8 md:gap-16 flex">
          <div className="Cardgroup grid grid-cols-1 sm:grid-cols-3 gap-6">
            {newBlogPages.map((page, index) => (
              <NewsCard
                key={index}
                imageSrc={page.imageSrc}
                alt={page.alt}
                title={page.title}
                description={page.description}
                date={format(parseISO(page.date), MONTH_YEAR_FORMAT)}
                newsSource={page.newsSource}
                href={page.path}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="justify-center w-full items-center flex pt-8 mt-4 md:hidden">
        <SectionSlider>
          {newBlogPages.map((page, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-4">
                <NewsCard
                  imageSrc={page.imageSrc}
                  alt={page.alt}
                  title={page.title}
                  description={page.description}
                  date={format(parseISO(page.date), MONTH_YEAR_FORMAT)}
                  newsSource={page.newsSource}
                  href={page.path}
                />
                <div className="h-4"></div>
              </div>
            </SwiperSlide>
          ))}
        </SectionSlider>
      </div>

      <BlogHighlightSection />
    </div>
  )
}

export default Blog
