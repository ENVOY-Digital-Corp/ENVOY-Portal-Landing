/* eslint-disable quotes */
import { Element, Link as ScrollLink } from "react-scroll"
import Image from "next/image"
import Link from "next/link"
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos"
import PartnerCard from "@/components/Cards/PartnerCard"
import NewsCard from "@/components/Cards/NewsCard"
import HorizontalNewsCard from "@/components/Cards/HorizontalNewsCard"
import NewsHighlightCard from "@/components/Cards/NewsHighlightCard"
import SectionSlider from "@/components/Landing/Section/SectionSlider"
import { SwiperSlide } from "swiper/react"
import BlogHighlightSection from "@/components/Blog/BlogHighlightSection"

const Blog = () => {
  return (
    <div className="Blog container">
      <div className="Title flex-col justify-start items-start gap-1.5 flex pt-8">
        <div className="LatestNewsOnEnvoyPortal self-stretch text-neutral-50 text-5xl md:text-6xl font-semibold">
          Latest news <br className="hidden md:block" />
          on Envoy Portal
        </div>
        <div className="SectionTitle self-stretch opacity-80 text-white text-lg font-normal">
          Envoy Portal provides features that are ready to answer your various
          digital
          <br />
          asset transaction needs quickly, safely and completely .
        </div>
      </div>

      <div className="hidden justify-center items-center md:flex pt-8 mt-4">
        <div className="Wrapper self-stretch flex-col justify-start items-start gap-8 md:gap-16 flex">
          <div className="Cardgroup grid grid-cols-1 sm:grid-cols-3 gap-6">
            <NewsCard
              imageSrc="/news-x-sgg.webp"
              alt="news-x-sgg"
              title={`"Sakura Guild Games - SUP" signed partnership with ENVOY Portal`}
              description={`SGG enter the integrated ecosystem of ENVOY by providing GMS and ENVOY Portal access to thousands of scholars.`}
              date="August 2023"
              newsSource="prtimes.jp"
            />

            <NewsCard
              imageSrc="/news-x-playmining.webp"
              alt="news-x-playmining"
              title={`ENVOY Portal is supporting PlayMining Games to use GMS and Accept Feature to Disburse scholars earnings`}
              description={`JobTribes and Cooking Burger is natively supported on ENVOY's GMS and Accept Feature.`}
              date="September 2023"
              newsSource="prtimes.jp"
            />

            <NewsCard
              imageSrc="/news-playsia-tv.webp"
              alt="news-playsia-tv"
              title={`ENVOY Portal signed exclusive partnership with PlaysiaTV`}
              description={`PlaysiaTV (a project from ACAFP) is exclusively partnering with ENVOY Portal to provide best crypto UX to its users`}
              date="October 2023"
              newsSource="prtimes.jp"
            />
          </div>
        </div>
      </div>

      <div className="justify-center w-full items-center flex pt-8 mt-4 md:hidden">
        <SectionSlider>
          <SwiperSlide>
            <div className="flex flex-col gap-4">
              <NewsCard
                imageSrc="/news-x-sgg.webp"
                alt="news-x-sgg"
                title={`"Sakura Guild Games - SUP" signed partnership with ENVOY Portal`}
                description={`SGG enter the integrated ecosystem of ENVOY by providing GMS and ENVOY Portal access to thousands of scholars.`}
                date="August 2023"
                newsSource="prtimes.jp"
              />
              <div className="h-4"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-4">
              <NewsCard
                imageSrc="/news-x-playmining.webp"
                alt="news-x-playmining"
                title={`ENVOY Portal is supporting PlayMining Games to use GMS and Accept Feature to Disburse scholars earnings`}
                description={`JobTribes and Cooking Burger is natively supported on ENVOY's GMS and Accept Feature.`}
                date="September 2023"
                newsSource="prtimes.jp"
              />
              <div className="h-4"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col gap-4">
              <NewsCard
                imageSrc="/news-playsia-tv.webp"
                alt="news-playsia-tv"
                title={`ENVOY Portal signed exclusive partnership with PlaysiaTV`}
                description={`PlaysiaTV (a project from ACAFP) is exclusively partnering with ENVOY Portal to provide best crypto UX to its users`}
                date="October 2023"
                newsSource="prtimes.jp"
              />
              <div className="h-4"></div>
            </div>
          </SwiperSlide>
        </SectionSlider>
      </div>

      <BlogHighlightSection />
    </div>
  )
}

export default Blog
