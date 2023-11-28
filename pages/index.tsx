/* eslint-disable quotes */
import { Element, Link as ScrollLink } from "react-scroll"
import Image from "next/image"
import Link from "next/link"
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos"
import PartnerCard from "@/components/common/cards/PartnerCard"
import NewsCard from "@/components/common/cards/NewsCard"
import SectionSlider from "@/components/common/wrappers/SectionSlider"
import { SwiperSlide } from "swiper/react"
import { Button } from "@mui/material"
import { newBlogPages } from "./blog"
import { format, parseISO } from "date-fns"
import { MONTH_YEAR_FORMAT } from "@/utils/constants"

const Landing = () => {
  return (
    <div className="LandingPage">
      <Element name="introduction">
        <div className="relative pt-20">
          {/* graphic */}
          <div className="w-full h-full left-0 top-0 absolute">
            <div className="w-full h-full left-0 top-0 absolute opacity-20 bg-cyan-900 rounded-full blur-3xl" />
            <div className="w-full h-full left-0 bottom-0 absolute">
              <div className="w-[15rem] h-[20rem] md:w-[35rem] md:h-96 lg:w-[50rem] lg:h-96 left-0 bottom-0 absolute opacity-60">
                <Image src="/graphic1.webp" alt="Aset22" fill={true} />
              </div>
            </div>
          </div>

          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-4">
              <div className="flex-col justify-center items-center md:items-start gap-8 inline-flex">
                <article className="flex-col justify-center items-center gap-6 flex text-center md:text-start">
                  <h2 className="text-neutral-50 text-4xl md:text-5xl font-bold self-stretch">
                    The Ultimate
                    <br />
                    Non-Custodial
                    <br />
                    Crypto Gateway!
                  </h2>
                  <p className="TheSimpleWayToTransactionsAndTradesWithManyDigitalCurrenciesInSinglePlatform self-stretch text-neutral-50 text-base font-normal leading-normal tracking-tight">
                    One stop solutions to Buy/Sell Crypto Tokens with fiat money
                    and digital payment, easier than ordering food online.
                  </p>
                </article>

                <Link
                  href="https://app.envoyportal.com"
                  className="px-5 py-2 bg-neutral-200 bg-opacity-20 rounded-full backdrop-blur-xl flex-col justify-center items-center flex"
                >
                  <div className="justify-center items-center gap-2 inline-flex">
                    <h3 className="text-white text-base font-normal leading-normal tracking-tight">
                      Launch App
                    </h3>
                    <div className="flex-col justify-center items-center inline-flex">
                      <ArrowForwardIos className="relative flex-col justify-start items-start flex text-sm" />
                    </div>
                  </div>
                </Link>
              </div>

              <div className="w-full bg-black bg-opacity-5 justify-center items-center inline-flex">
                <Image
                  src="/graphic2.webp"
                  alt="envoy-portal-intro"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className="flex justify-center mt-12 md:mt-32">
              <div>
                <div className="w-30 h-7 px-1 py-1 opacity-60 rounded flex-col justify-center items-center inline-flex">
                  <ScrollLink
                    to="transactions"
                    smooth={true}
                    className="cursor-pointer"
                  >
                    <div className="justify-center items-center gap-2 inline-flex">
                      <h3 className="text-neutral-50 text-xs font-medium uppercase leading-snug tracking-wide">
                        Learn More
                      </h3>
                      <div className="h-4 flex-col justify-center items-center inline-flex">
                        <ArrowForwardIos className="w-4 h-4 relative flex-col justify-start items-start flex rotate-90" />
                      </div>
                    </div>
                  </ScrollLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element name="transactions">
        <div className="mt-24 pt-8">
          <div className="container">
            <article className="flex-col w-full justify-start items-center gap-16 inline-flex">
              <h2 className="text-center text-neutral-50 text-3xl md:text-4xl font-bold tracking-tight">
                No complex steps, No confusing charts <br />
                Enter amount, Sign, get that cash!
              </h2>

              <div className="flex flex-col justify-start items-center gap-6 md:gap-12 md:inline-flex md:flex-row">
                <div className="flex-col justify-start items-center gap-4 inline-flex">
                  <div className="justify-center items-end gap-2 inline-flex">
                    <p className="text-center text-white text-6xl md:max-lg:text-5xl font-medium">
                      4,500
                    </p>
                    <p className="text-center text-white text-5xl md:max-lg:text-4xl font-medium">
                      +
                    </p>
                  </div>
                  <p className="text-center text-white text-lg font-medium">
                    Active users, and growing!
                  </p>
                </div>

                <div className="w-full h-auto md:w-auto md:h-28 opacity-40 bg-white flex-col justify-start items-start inline-flex">
                  <div className="w-px h-px relative" />
                </div>

                <div className="flex-col justify-start items-center gap-4 inline-flex">
                  <div className="justify-center items-end gap-2 inline-flex">
                    <p className="text-center text-white text-6xl md:max-lg:text-5xl font-medium">
                      31,654
                    </p>
                  </div>
                  <p className="text-center text-white text-lg font-medium">
                    Transactions
                  </p>
                </div>

                <div className="w-full h-auto md:w-auto md:h-28 opacity-40 bg-white flex-col justify-start items-start inline-flex">
                  <div className="w-px h-px relative" />
                </div>

                <div className="flex-col justify-start items-center gap-4 inline-flex">
                  <div className="justify-center items-end gap-2 inline-flex">
                    <p className="text-center text-white text-6xl md:max-lg:text-5xl font-medium">
                      300
                    </p>
                    <p className="text-center text-white text-5xl md:max-lg:text-4xl font-medium">
                      +
                    </p>
                  </div>
                  <p className="text-center text-white text-lg font-medium">
                    Supported Tokens
                  </p>
                </div>
              </div>
              <p className="text-center text-white text-base font-normal">
                Why make life complicated?
                <br />
                With ENVOY Portal, turning your cash into crypto or vice versa
                is as easy as making your morning coffee.
              </p>
            </article>
          </div>
        </div>
      </Element>

      <Element name="features">
        <article className="mt-10 md:mt-40 pt-8">
          <div className="container">
            <div className="flex-col justify-start items-end gap-10 md:gap-20 inline-flex text-center md:text-start">
              <div className="self-stretch rounded flex-col justify-start items-start flex">
                <div className="self-stretch rounded flex-col justify-start items-start flex">
                  <div className="flex-col md:flex-row self-stretch rounded justify-start items-center gap-10 lg:gap-28 inline-flex">
                    <div className="grow shrink basis-0 p-4 justify-start items-center flex">
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                        <h3 className="self-stretch text-white text-3xl font-bold leading-10 tracking-tight">
                          Bridge Feature
                        </h3>
                        <p className="self-stretch text-stone-300 text-base font-normal leading-normal tracking-tight">
                          Buy/Sell any Crypto Tokens directly using Fiat money
                          (digital payment), as simple as ordering coffee from
                          an app. No Exchange account needed, No complex Charts,
                          No excessive gas fee or Withdraw fee.
                        </p>
                      </div>
                    </div>
                    <div className="w-full md:w-auto p-2 bg-neutral-200 bg-opacity-10 rounded-2xl border border-white border-opacity-10 flex-col justify-center items-center inline-flex">
                      <div className="w-full md:w-96 h-64 rounded-lg relative">
                        <iframe
                          className="w-full h-full rounded-lg"
                          src="https://www.youtube.com/embed/wDvQ8xdltPw?loop=1&controls=1"
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

              <div className="self-stretch rounded flex-col justify-start items-start flex">
                <div className="self-stretch rounded flex-col justify-start items-start flex">
                  <div className="flex-col-reverse md:flex-row self-stretch rounded justify-start items-center gap-10 lg:gap-28 inline-flex">
                    <div className="p-2 bg-neutral-200 bg-opacity-10 rounded-2xl border border-white border-opacity-10 flex-col justify-center items-center md:inline-flex">
                      <div className="w-full md:w-96 h-64 rounded-lg relative">
                        <iframe
                          className="w-full h-full rounded-lg"
                          src="https://www.youtube.com/embed/8SZUcGlEbe0?loop=1&controls=1"
                          title="Envoy Portal Accept feature"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                    <div className="grow shrink basis-0 p-4 justify-start items-center flex">
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                        <h3 className="self-stretch text-white text-3xl font-bold leading-10 tracking-tight">
                          Accept Feature
                        </h3>
                        <p className="self-stretch text-stone-300 text-base font-normal leading-normal tracking-tight">
                          Receive Game Rewards or Revenue sharing from Web3 Game
                          Guilds, easing mass disbursements to thousands
                          receiver at once. Receiver can opt to directly receive
                          in fiat money (Bank account/e-wallets).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="self-stretch rounded flex-col justify-start items-start flex">
                <div className="self-stretch rounded flex-col justify-start items-start flex">
                  <div className="flex-col md:flex-row self-stretch rounded justify-start items-center gap-10 lg:gap-28 inline-flex">
                    <div className="grow shrink basis-0 p-4 justify-start items-center flex">
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                        <h3 className="self-stretch text-white text-3xl font-bold leading-10 tracking-tight">
                          Trade Feature
                        </h3>
                        <p className="self-stretch text-stone-300 text-base font-normal leading-normal tracking-tight">
                          Trade NFTs, virtual items without the use of middlemen
                          safely. Automated Escrow to facilitate P2P trade (both
                          regular & blockchain-based).
                        </p>
                      </div>
                    </div>
                    <div className="w-full md:w-auto p-2 md:bg-neutral-200 md:bg-opacity-10 rounded-2xl md:border md:border-white md:border-opacity-10 flex-col justify-center items-center inline-flex">
                      <div className="hidden md:block w-96 rounded-lg relative">
                        <Image
                          alt="feature trade pc envoy portal"
                          src="/feature-trade-pc.webp"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                      <div className="md:hidden w-full rounded-lg relative">
                        <Image
                          alt="feature trade pc envoy portal"
                          src="/feature-trade-sp.webp"
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
        </article>
      </Element>

      <Element name="about">
        <article className="mt-14 md:mt-32 pt-8">
          <div className="container">
            <div className="w-full flex-col justify-start items-center gap-20 md:gap-28 inline-flex">
              <div className="self-stretch flex-col justify-start items-center gap-7 flex">
                <h2 className="self-stretch text-center text-white text-3xl md:text-4xl font-bold tracking-tight">
                  Your Gateway
                  <br />
                  to access Decentralized Ecosystems
                </h2>
                <p className="self-stretch text-center text-white text-base font-normal">
                  ENVOY Portal put you on the captain seat.
                  <br />
                  Navigate in-and-out to any Web3 ecosystem with full control,
                  No Deposit/Withdraw, 100% non-custodial.
                </p>
              </div>
              <div className="flex-col justify-center items-center flex">
                <div className="bg-black bg-opacity-5 flex-col justify-center items-center flex">
                  <div className="w-[20rem] h-[20rem] md:w-[35rem] md:h-[35rem] relative">
                    <Image
                      alt="envoy portal circle graphic"
                      src="/circle-graphic.webp"
                      fill={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Element>

      <Element name="exchange-partner">
        <div className="mt-36 md:mt-52 pt-8">
          <div className="container">
            <div className="flex flex-col justify-center gap-8 md:gap-16">
              <h3 className="text-white text-3xl md:text-4xl font-bold text-center">
                Exchange Partners
              </h3>
              <div className="LibraryPlaceholderImage px-10 sm:px-32 md:px-48 lg:px-64 py-8 lg:py-16 bg-zinc-900 rounded-2xl border border-white border-opacity-10 backdrop-blur-xl justify-center items-center flex">
                <div className="w-full h-24">
                  <Image
                    src="/partner-indo-dax.webp"
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
      </Element>

      <Element name="partners">
        <div className="mt-14 md:mt-40">
          <div className="container">
            <div className="flex-col w-full justify-start items-center gap-16 inline-flex">
              <h2 className="text-center text-white text-3xl md:text-4xl font-bold">
                Our Partners
              </h2>
              {/* PC */}
              <div className="hidden Wrapper flex-col justify-center items-center gap-6 md:flex">
                <div className="justify-center items-center gap-6 inline-flex">
                  <PartnerCard
                    imageSrc="/partner-garuda.webp"
                    alt="partner-garuda"
                  />
                  <PartnerCard imageSrc="/partner-wtw.webp" alt="partner-wtw" />
                  <PartnerCard
                    imageSrc="/partner-playmining.webp"
                    alt="partner-playmining"
                  />
                  <PartnerCard
                    imageSrc="/partner-kmsk.webp"
                    alt="partner-kmsk"
                  />
                  <PartnerCard
                    imageSrc="/partner-digital-asset.webp"
                    alt="partner-digital-asset"
                  />
                </div>
                <div className="justify-center items-center gap-6 inline-flex">
                  <PartnerCard
                    imageSrc="/partner-eternal-crypt.webp"
                    alt="partner-eternal-crypt"
                  />
                  <PartnerCard
                    imageSrc="/partner-sakura-guild-game.webp"
                    alt="partner-sakura-guild-game"
                  />
                  <PartnerCard
                    imageSrc="/partner-playsia-tv.webp"
                    alt="partner-playasia-tv"
                  />
                  <PartnerCard imageSrc="/partner-aca.webp" alt="partner-aca" />
                </div>
              </div>

              {/* SP */}
              <div className="md:hidden Wrapper grid grid-cols-3 justify-center items-center gap-8">
                <PartnerCard
                  imageSrc="/partner-garuda.webp"
                  alt="partner-garuda"
                />
                <PartnerCard imageSrc="/partner-wtw.webp" alt="partner-wtw" />
                <PartnerCard
                  imageSrc="/partner-playmining.webp"
                  alt="partner-playmining"
                />
                <PartnerCard imageSrc="/partner-kmsk.webp" alt="partner-kmsk" />
                <PartnerCard
                  imageSrc="/partner-digital-asset.webp"
                  alt="partner-digital-asset"
                />
                <PartnerCard
                  imageSrc="/partner-eternal-crypt.webp"
                  alt="partner-eternal-crypt"
                />
                <PartnerCard
                  imageSrc="/partner-sakura-guild-game.webp"
                  alt="partner-sakura-guild-game"
                />
                <PartnerCard
                  imageSrc="/partner-playsia-tv.webp"
                  alt="partner-playasia-tv"
                />
                <PartnerCard imageSrc="/partner-aca.webp" alt="partner-aca" />
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element name="news">
        <div className="mt-16 md:mt-40">
          <div className="container">
            <div className="justify-center items-center flex">
              <article className="w-full self-stretch flex-col justify-start items-start gap-8 md:gap-16 flex">
                <div className="w-full justify-between items-center inline-flex">
                  <h2 className="text-white text-3xl md:text-4xl font-bold">
                    Browse our latest news
                  </h2>
                  <Link href="/blog">
                    <Button className="hidden Button px-8 py-2 bg-sky-500 rounded-3xl shadow flex-col justify-center items-center md:inline-flex">
                      <h3 className="text-white text-base font-medium uppercase leading-relaxed tracking-wide">
                        See All
                      </h3>
                    </Button>
                  </Link>
                </div>

                <div className="hidden sm:grid sm:grid-cols-3 gap-6">
                  {newBlogPages.map((page, index) => (
                    <NewsCard
                      key={index}
                      imageSrc={page.imageSrc}
                      imageAlt={page.imageAlt}
                      title={page.title}
                      description={page.description}
                      date={format(parseISO(page.date), MONTH_YEAR_FORMAT)}
                      href={page.path}
                    />
                  ))}
                </div>

                <div className="w-full justify-center items-center flex sm:hidden">
                  <SectionSlider>
                    {newBlogPages.map((page, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex flex-col gap-4">
                          <NewsCard
                            imageSrc={page.imageSrc}
                            imageAlt={page.imageAlt}
                            title={page.title}
                            description={page.description}
                            date={format(
                              parseISO(page.date),
                              MONTH_YEAR_FORMAT
                            )}
                            href={page.path}
                          />
                          <div className="h-4"></div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </SectionSlider>
                </div>

                <div className="flex md:hidden w-full justify-center">
                  <Link href="/blog">
                    <Button className="Button px-8 py-2 bg-sky-500 rounded-3xl shadow flex-col justify-center items-center inline-flex">
                      <p className="Button text-white text-base font-medium uppercase leading-relaxed tracking-wide">
                        See All
                      </p>
                    </Button>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </Element>
    </div>
  )
}

export default Landing
