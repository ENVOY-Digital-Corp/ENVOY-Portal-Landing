/* eslint-disable quotes */
import HorizontalNewsCard from "../Cards/HorizontalNewsCard"
import NewsHighlightCard from "../Cards/NewsHighlightCard"

type Props = {}
const BlogHighlightSection: React.FC<Props> = ({}) => {
  return (
    <div className="HiglightSection flex flex-col-reverse justify-end md:grid md:grid-cols-3 gap-8 pt-8 mt-12">
      <div className="md:col-span-2 justify-start items-start gap-8 flex">
        <div className="CardGroup grow shrink basis-0 flex-col justify-start items-start gap-8 flex">
          <HorizontalNewsCard
            title="Eternal Crypt - Wizardry BC signs partnership with Southeast Asia game guild, Garuda Guild Games"
            description={`GGG " Envoy Portal", the pioneer of the Web3 payment solution.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum ac aliquet odio mattis.`}
            date="August 2023"
            newsSource="prtimes.jp"
          />
          <HorizontalNewsCard
            title="Eternal Crypt - Wizardry BC signs partnership with Southeast Asia game guild, Garuda Guild Games"
            description={`GGG " Envoy Portal", the pioneer of the Web3 payment solution.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum ac aliquet odio mattis.`}
            date="August 2023"
            newsSource="prtimes.jp"
          />
          <HorizontalNewsCard
            title="Eternal Crypt - Wizardry BC signs partnership with Southeast Asia game guild, Garuda Guild Games"
            description={`GGG " Envoy Portal", the pioneer of the Web3 payment solution.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum ac aliquet odio mattis.`}
            date="August 2023"
            newsSource="prtimes.jp"
          />
          <HorizontalNewsCard
            title="Eternal Crypt - Wizardry BC signs partnership with Southeast Asia game guild, Garuda Guild Games"
            description={`GGG " Envoy Portal", the pioneer of the Web3 payment solution.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum ac aliquet odio mattis.`}
            date="August 2023"
            newsSource="prtimes.jp"
          />
          <HorizontalNewsCard
            title="Eternal Crypt - Wizardry BC signs partnership with Southeast Asia game guild, Garuda Guild Games"
            description={`GGG " Envoy Portal", the pioneer of the Web3 payment solution.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum ac aliquet odio mattis.`}
            date="August 2023"
            newsSource="prtimes.jp"
          />
          <HorizontalNewsCard
            title="Eternal Crypt - Wizardry BC signs partnership with Southeast Asia game guild, Garuda Guild Games"
            description={`GGG " Envoy Portal", the pioneer of the Web3 payment solution.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum ac aliquet odio mattis.`}
            date="August 2023"
            newsSource="prtimes.jp"
          />
          <HorizontalNewsCard
            title="Eternal Crypt - Wizardry BC signs partnership with Southeast Asia game guild, Garuda Guild Games"
            description={`GGG " Envoy Portal", the pioneer of the Web3 payment solution.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum ac aliquet odio mattis.`}
            date="August 2023"
            newsSource="prtimes.jp"
          />
          <HorizontalNewsCard
            title="Eternal Crypt - Wizardry BC signs partnership with Southeast Asia game guild, Garuda Guild Games"
            description={`GGG " Envoy Portal", the pioneer of the Web3 payment solution.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum ac aliquet odio mattis.`}
            date="August 2023"
            newsSource="prtimes.jp"
          />
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
          <NewsHighlightCard
            no="01"
            title="Eternal Crypt - Wizardry BC signs partnership with Southeast Asia game guild, Garuda Guild Games"
            description={`GGG " Envoy Portal", the pioneer of the Web3 payment solution.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum ac aliquet odio mattis.`}
          />
          <NewsHighlightCard
            no="02"
            title="Eternal Crypt - Wizardry BC signs partnership with Southeast Asia game guild, Garuda Guild Games"
            description={`GGG " Envoy Portal", the pioneer of the Web3 payment solution.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum ac aliquet odio mattis.`}
          />
          <NewsHighlightCard
            no="03"
            title="Eternal Crypt - Wizardry BC signs partnership with Southeast Asia game guild, Garuda Guild Games"
            description={`GGG " Envoy Portal", the pioneer of the Web3 payment solution.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc vulputate libero et velit interdum ac aliquet odio mattis.`}
          />
        </div>
      </div>
    </div>
  )
}

export default BlogHighlightSection
