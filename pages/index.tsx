/* eslint-disable quotes */
import { Element, Link as ScrollLink } from "react-scroll"
import Image from "next/image"
import Link from "next/link"
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos"
import PartnerCard from "@/components/Cards/PartnerCard"
import NewsCard from "@/components/Cards/NewsCard"

const Landing = () => {
  return (
    <div className="LandingPage">
      <div className="HeroSection relative pt-20">
        <div className="Bg w-full h-full left-0 top-0 absolute">
          <div className="Ellipse1 w-full h-full left-0 top-0 absolute opacity-20 bg-cyan-900 rounded-full blur-3xl" />
          <div className="MaskGroup w-full h-full left-0 bottom-0 absolute">
            <div className="Aset22 w-[15rem] h-[20rem] md:w-[35rem] md:h-96 lg:w-[50rem] lg:h-96 left-0 bottom-0 absolute opacity-60">
              <Image src="/graphic1.png" alt="Aset22" fill={true} />
            </div>
          </div>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-4">
            <div className="Text flex-col justify-center items-center md:items-start gap-8 inline-flex">
              <div className="Text flex-col justify-center items-center gap-6 flex text-center md:text-start">
                <div className="CompleteGatewayForDigitalAssetNeeds text-neutral-50 text-4xl md:text-5xl font-bold self-stretch">
                  Complete Gateway
                  <br />
                  for Digital Asset
                  <br />
                  Needs!
                </div>
                <div className="TheSimpleWayToTransactionsAndTradesWithManyDigitalCurrenciesInSinglePlatform self-stretch text-neutral-50 text-base font-normal leading-normal tracking-tight">
                  The simple way to transactions and trades with many digital
                  currencies in single platform.
                </div>
              </div>
              <Link
                href="https://app.envoyportal.com"
                className="Button px-5 py-2 bg-neutral-200 bg-opacity-20 rounded-full backdrop-blur-xl flex-col justify-center items-center flex"
              >
                <div className="Base justify-center items-center gap-2 inline-flex">
                  <div className="Button text-white text-base font-normal leading-normal tracking-tight">
                    Launch App
                  </div>
                  <div className="MaskedIcon flex-col justify-center items-center inline-flex">
                    <ArrowForwardIos className="IconRight relative flex-col justify-start items-start flex text-sm" />
                  </div>
                </div>
              </Link>
            </div>
            <div className="Cardmedia">
              <div className="LibraryPlaceholderImage w-full bg-black bg-opacity-5 justify-center items-center inline-flex">
                <Image
                  className="Image39"
                  src="/graphic2.png"
                  alt="Image39"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12 md:mt-32">
            <div>
              <div className="Button w-30 h-7 px-1 py-1 opacity-60 rounded flex-col justify-center items-center inline-flex">
                <ScrollLink
                  to="transactions"
                  smooth={true}
                  className="cursor-pointer"
                >
                  <div className="Base justify-center items-center gap-2 inline-flex">
                    <div className="Button text-neutral-50 text-xs font-medium uppercase leading-snug tracking-wide">
                      Learn More
                    </div>
                    <div className="MaskedIcon h-4 flex-col justify-center items-center inline-flex">
                      <ArrowForwardIos className="IconsansBoldArrowDown2 w-4 h-4 relative flex-col justify-start items-start flex rotate-90" />
                    </div>
                  </div>
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Element name="transactions">
        <div className="Frame48095568 mt-24 pt-8">
          <div className="container">
            <div className="flex-col w-full justify-start items-center gap-16 inline-flex">
              <div className="SectionTitle text-center text-neutral-50 text-3xl md:text-4xl font-bold tracking-tight">
                One stop features to infinite{" "}
                <br className="hidden md:inline-block" />
                Transactions!
              </div>
              <div className="Frame48095567 flex flex-col justify-start items-center gap-6 md:gap-12 md:inline-flex md:flex-row">
                <div className="Wrapper flex-col justify-start items-center gap-4 inline-flex">
                  <div className="Text justify-center items-end gap-2 inline-flex">
                    <div className="999 text-center text-white text-6xl md:max-lg:text-5xl font-medium">
                      99.999
                    </div>
                    <div className=" text-center text-white text-5xl md:max-lg:text-4xl font-medium">
                      +
                    </div>
                  </div>
                  <div className="Description text-center text-white text-lg font-medium">
                    Active user, and growing!
                  </div>
                </div>

                <div className="DividerVertical w-full h-auto md:w-auto md:h-28 opacity-40 bg-white flex-col justify-start items-start inline-flex">
                  <div className="MinWidth w-px h-px relative" />
                </div>

                <div className="Wrapper flex-col justify-start items-center gap-4 inline-flex">
                  <div className="Text justify-center items-end gap-2 inline-flex">
                    <div className="999999 text-center text-white text-6xl md:max-lg:text-5xl font-medium">
                      99.999.999
                    </div>
                    <div className=" text-center text-white text-5xl md:max-lg:text-4xl font-medium">
                      +
                    </div>
                  </div>
                  <div className="Description text-center text-white text-lg font-medium">
                    Transaction
                  </div>
                </div>

                <div className="DividerVertical w-full h-auto md:w-auto md:h-28 opacity-40 bg-white flex-col justify-start items-start inline-flex">
                  <div className="MinWidth w-px h-px relative" />
                </div>

                <div className="Wrapper flex-col justify-start items-center gap-4 inline-flex">
                  <div className="Text justify-center items-end gap-2 inline-flex">
                    <div className=" text-center text-white text-6xl md:max-lg:text-5xl font-medium">
                      9999
                    </div>
                    <div className=" text-center text-white text-5xl md:max-lg:text-4xl font-medium">
                      +
                    </div>
                  </div>
                  <div className="Description text-center text-white text-lg font-medium">
                    Supported Token
                  </div>
                </div>
              </div>
              <div className="SectionTitle text-center text-white text-base font-normal">
                Envoy Portal provides features that are ready to answer your
                various digital asset transaction
                <br />
                needs quickly, safely and completely. Start your trading now!
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element name="features">
        <div className="CardGroup mt-10 md:mt-40 pt-8">
          <div className="container">
            <div className="flex-col justify-start items-end gap-10 md:gap-20 inline-flex text-center md:text-start">
              <div className="Card self-stretch rounded flex-col justify-start items-start flex">
                <div className="Paper self-stretch rounded flex-col justify-start items-start flex">
                  <div className="CardElements flex-col md:flex-row self-stretch rounded justify-start items-center gap-10 lg:gap-28 inline-flex">
                    <div className="Cardheader grow shrink basis-0 p-4 justify-start items-center flex">
                      <div className="Content grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                        <div className="Header self-stretch text-white text-3xl font-bold leading-10 tracking-tight">
                          Accept Feature
                        </div>
                        <div className="Subheader self-stretch text-stone-300 text-base font-normal leading-normal tracking-tight">
                          Ease of mass disbursement for web3 game guilds to
                          manage thousands of scholar rewards simultaneously
                          from token to fiat (bank accounts and e-wallets).
                        </div>
                      </div>
                    </div>
                    <div className="Cardmedia w-full md:w-auto p-2 bg-neutral-200 bg-opacity-10 rounded-2xl border border-white border-opacity-10 flex-col justify-center items-center inline-flex">
                      <div className="Thumbnail1 w-full md:w-96 h-64 rounded-lg relative">
                        <iframe
                          className="w-full h-full rounded-lg"
                          src="https://www.youtube.com/embed/L_SF48vjqfU?loop=1&controls=1&playlist=L_SF48vjqfU"
                          title="Envoy Portal Bridge feature"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Card self-stretch rounded flex-col justify-start items-start flex">
                <div className="Paper self-stretch rounded flex-col justify-start items-start flex">
                  <div className="CardElements flex-col md:flex-row self-stretch rounded justify-start items-center gap-10 lg:gap-28 inline-flex">
                    <div className="hidden Cardmedia p-2 bg-neutral-200 bg-opacity-10 rounded-2xl border border-white border-opacity-10 flex-col justify-center items-center md:inline-flex">
                      <div className="Thumbnail1 w-full md:w-96 h-64 rounded-lg relative">
                        <iframe
                          className="w-full h-full rounded-lg"
                          src="https://www.youtube.com/embed/L_SF48vjqfU?loop=1&controls=1&playlist=L_SF48vjqfU"
                          title="Envoy Portal Bridge feature"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                    <div className="Cardheader grow shrink basis-0 p-4 justify-start items-center flex">
                      <div className="Content grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                        <div className="Header self-stretch text-white text-3xl font-bold leading-10 tracking-tight">
                          Bridge Feature
                        </div>
                        <div className="Subheader self-stretch text-stone-300 text-base font-normal leading-normal tracking-tight">
                          An easily facilitate Buy/Sell Web3 digital tokens,
                          without using any exchange, enable direct fiat payment
                          like QRIS/e-wallet. No excessive gas-fees, no order
                          book, no KYC process, with safe and secure
                          transactions.
                        </div>
                      </div>
                    </div>
                    <div className="md:hidden Cardmedia w-full p-2 bg-neutral-200 bg-opacity-10 rounded-2xl border border-white border-opacity-10 flex-col justify-center items-center inline-flex">
                      <div className="Thumbnail1 w-full md:w-96 rounded-lg relative">
                        <iframe
                          className="w-full rounded-lg"
                          src="https://www.youtube.com/embed/L_SF48vjqfU?loop=1&controls=1&playlist=L_SF48vjqfU"
                          title="Envoy Portal Bridge feature"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Card self-stretch rounded flex-col justify-start items-start flex">
                <div className="Paper self-stretch rounded flex-col justify-start items-start flex">
                  <div className="CardElements flex-col md:flex-row self-stretch rounded justify-start items-center gap-10 lg:gap-28 inline-flex">
                    <div className="Cardheader grow shrink basis-0 p-4 justify-start items-center flex">
                      <div className="Content grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                        <div className="Header self-stretch text-white text-3xl font-bold leading-10 tracking-tight">
                          Trade Feature
                        </div>
                        <div className="Subheader self-stretch text-stone-300 text-base font-normal leading-normal tracking-tight">
                          Trade NFTs, virtual items without the use of middlemen
                          safely. Automated Escrow to facilitate P2P trade (both
                          regular & blockchain-based).
                        </div>
                      </div>
                    </div>
                    <div className="Cardmedia w-full md:w-auto p-2 md:bg-neutral-200 md:bg-opacity-10 rounded-2xl md:border md:border-white md:border-opacity-10 flex-col justify-center items-center inline-flex">
                      <div className="hidden md:block Thumbnail1 w-96 rounded-lg relative">
                        <Image
                          alt="Thumbnail"
                          src="/feature-trade-pc.png"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                      <div className="md:hidden Thumbnail1 w-full rounded-lg relative">
                        <Image
                          alt="Thumbnail"
                          src="/feature-trade-sp.png"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element name="about">
        <div className="Frame48095565 mt-14 md:mt-32 pt-8">
          <div className="container">
            <div className="w-full flex-col justify-start items-center gap-20 md:gap-28 inline-flex">
              <div className="Title self-stretch flex-col justify-start items-center gap-7 flex">
                <div className="SectionTitle self-stretch text-center text-white text-3xl md:text-4xl font-bold tracking-tight">
                  Simply digital ecosystem for modern
                  <br />
                  Digital trades
                </div>
                <div className="Description self-stretch text-center text-white text-base font-normal">
                  A perfect solution for maintenance your digital assets easily
                  <br />
                  and safely with a modern digital ecosystems
                </div>
              </div>
              <div className="Cardmedia flex-col justify-center items-center flex">
                <div className="LibraryPlaceholderImage bg-black bg-opacity-5 flex-col justify-center items-center flex">
                  <div className="Image40 w-[20rem] h-[20rem] md:w-[35rem] md:h-[35rem] lg:w-[50rem] lg:h-[50rem] relative">
                    <Image
                      alt="Image40"
                      src="/circle-graphic.png"
                      fill={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <div className="ExchangePartners mt-36 md:mt-52 pt-8">
        <div className="container">
          <div className="flex flex-col justify-center gap-8 md:gap-16">
            <div className="text-white text-3xl md:text-4xl font-bold text-center">
              Exchange Partners
            </div>
            <div className="LibraryPlaceholderImage px-10 lg:px-64 py-8 lg:py-16 bg-zinc-900 rounded-2xl border border-white border-opacity-10 backdrop-blur-xl justify-center items-center flex">
              <div>
                <Image
                  src="/partner-indo-dax.png"
                  alt="partner-indo-dax"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Frame48095566 mt-14 md:mt-40">
        <div className="container">
          <div className="flex-col w-full justify-start items-center gap-16 inline-flex">
            <div className="SectionTitle text-center text-white text-3xl md:text-4xl font-bold">
              Our Partners
            </div>
            {/* PC */}
            <div className="hidden Wrapper flex-col justify-center items-center gap-8 md:flex">
              <div className="CardGroup justify-center items-center gap-6 inline-flex">
                <PartnerCard
                  imageSrc="/partner-garuda.png"
                  alt="partner-garuda"
                />
                <PartnerCard imageSrc="/partner-wolf.png" alt="partner-wolf" />
                <PartnerCard
                  imageSrc="/partner-playmining.png"
                  alt="partner-playmining"
                />
                <PartnerCard imageSrc="/partner-kmsk.png" alt="partner-kmsk" />
                <PartnerCard
                  imageSrc="/partner-digital-asset.png"
                  alt="partner-digital-asset"
                />
              </div>
              <div className="CardGroup justify-center items-center gap-6 inline-flex">
                <PartnerCard
                  imageSrc="/partner-eternal-crypt.png"
                  alt="partner-eternal-crypt"
                />
                <PartnerCard
                  imageSrc="/partner-sakura-guide-game.png"
                  alt="partner-sakura-guide-game"
                />
                <PartnerCard
                  imageSrc="/partner-playsia-tv.png"
                  alt="partner-playasia-tv"
                />
                <PartnerCard imageSrc="/partner-aca.png" alt="partner-aca" />
              </div>
            </div>

            {/* SP */}
            <div className="md:hidden Wrapper grid grid-cols-3 justify-center items-center gap-8">
              <PartnerCard
                imageSrc="/partner-garuda.png"
                alt="partner-garuda"
              />
              <PartnerCard imageSrc="/partner-wolf.png" alt="partner-wolf" />
              <PartnerCard
                imageSrc="/partner-playmining.png"
                alt="partner-playmining"
              />
              <PartnerCard imageSrc="/partner-kmsk.png" alt="partner-kmsk" />
              <PartnerCard
                imageSrc="/partner-digital-asset.png"
                alt="partner-digital-asset"
              />
              <PartnerCard
                imageSrc="/partner-eternal-crypt.png"
                alt="partner-eternal-crypt"
              />
              <PartnerCard
                imageSrc="/partner-sakura-guide-game.png"
                alt="partner-sakura-guide-game"
              />
              <PartnerCard
                imageSrc="/partner-playsia-tv.png"
                alt="partner-playasia-tv"
              />
              <PartnerCard imageSrc="/partner-aca.png" alt="partner-aca" />
            </div>
          </div>
        </div>
      </div>

      <div className="News mt-16 md:mt-40">
        <div className="container">
          <div className="justify-center items-center inline-flex">
            <div className="Wrapper self-stretch flex-col justify-start items-start gap-8 md:gap-16 inline-flex">
              <div className="Title w-full justify-between items-center inline-flex">
                <div className="Title text-white text-3xl md:text-4xl font-bold">
                  Browse our latest news
                </div>
                <div className="hidden Button px-8 py-2 bg-sky-500 rounded-3xl shadow flex-col justify-center items-center md:inline-flex">
                  <div className="Base justify-center items-center gap-2 inline-flex">
                    <div className="Button text-white text-base font-medium uppercase leading-relaxed tracking-wide">
                      See All
                    </div>
                  </div>
                </div>
              </div>
              <div className="Cardgroup grid grid-cols-1 md:grid-cols-3 gap-6">
                <NewsCard
                  imageSrc="/news-x-eternal-crypt.png"
                  alt="news-x-eternal-crypt"
                  title={`"Eternal Crypt - Wizardry BC -" signs partnership with
                  Southeast Asia game guild "Garuda Guild Games"`}
                  description={`GGG "Envoy Portal", the pioneer of the Web3 payment
                  solution.`}
                  date="September 2023"
                  newsSource="prtimes.jp"
                />

                <NewsCard
                  imageSrc="/news-x-playmining.png"
                  alt="news-x-playmining"
                  title={`"Eternal Crypt - Wizardry BC -" signs partnership with
                  Southeast Asia game guild "Garuda Guild Games"`}
                  description={`GGG "Envoy Portal", the pioneer of the Web3 payment
                  solution.`}
                  date="September 2023"
                  newsSource="prtimes.jp"
                />

                <NewsCard
                  imageSrc="/news-playsia-tv.png"
                  alt="news-playsia-tv"
                  title={`"Eternal Crypt - Wizardry BC -" signs partnership with
                  Southeast Asia game guild "Garuda Guild Games"`}
                  description={`GGG "Envoy Portal", the pioneer of the Web3 payment
                  solution.`}
                  date="September 2023"
                  newsSource="prtimes.jp"
                />
              </div>
              <div className="flex w-full justify-center">
                <div className="md:hidden Button px-8 py-2 bg-sky-500 rounded-3xl shadow flex-col justify-center items-center inline-flex">
                  <div className="Base justify-center items-center gap-2 inline-flex">
                    <div className="Button text-white text-base font-medium uppercase leading-relaxed tracking-wide">
                      See All
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
