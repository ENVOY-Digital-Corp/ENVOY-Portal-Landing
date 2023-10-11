/* eslint-disable quotes */
import { Element } from "react-scroll"
import Image from "next/image"

const Landing = () => {
  return (
    <div className="LandingPage">
      <div className="HeroSection relative pt-20">
        <div className="Bg w-full h-full left-0 top-0 absolute">
          <div className="Ellipse1 w-full h-full left-0 top-0 absolute opacity-20 bg-cyan-900 rounded-full blur-3xl" />
          <div className="MaskGroup w-full h-full left-0 bottom-0 absolute">
            <div className="hidden Aset22 w-[50rem] h-96 left-0 bottom-0 md:absolute opacity-60">
              <Image src="/graphic1.png" alt="Aset22" fill={true} />
            </div>
          </div>
        </div>

        <div className="container z-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="Text flex-col justify-center items-start gap-8 inline-flex">
              <div className="Text flex-col justify-center items-center gap-6 flex">
                <div className="CompleteGatewayForDigitalAssetNeeds text-neutral-50 text-5xl font-bold self-stretch">
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
              <div className="Button px-5 py-2 bg-neutral-200 bg-opacity-20 rounded-full backdrop-blur-xl flex-col justify-center items-center flex">
                <div className="Base justify-center items-center gap-2 inline-flex">
                  <div className="Button text-white text-base font-normal leading-normal tracking-tight">
                    Launch App
                  </div>
                  <div className="MaskedIcon h-5 flex-col justify-center items-center inline-flex">
                    <div className="IconRight w-6 h-6 relative flex-col justify-start items-start flex" />
                  </div>
                </div>
              </div>
            </div>
            <div className="Cardmedia">
              <div className="LibraryPlaceholderImage bg-black bg-opacity-5 justify-center items-center inline-flex">
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
          <div className="flex justify-center mt-32">
            <div>
              <div className="Button w-30 h-7 px-1 py-1 opacity-60 rounded flex-col justify-center items-center inline-flex">
                <div className="Base justify-center items-center gap-2 inline-flex">
                  <div className="Button text-neutral-50 text-xs font-medium uppercase leading-snug tracking-wide">
                    Learn More
                  </div>
                  <div className="MaskedIcon h-4 flex-col justify-center items-center inline-flex">
                    <div className="IconsansBoldArrowDown2 w-4 h-4 relative flex-col justify-start items-start flex" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Frame48095568 mt-32">
        <div className="container">
          <div className="flex-col w-full justify-start items-center gap-16 inline-flex">
            <div className="SectionTitle text-center text-neutral-50 text-4xl font-bold tracking-tight">
              One stop features to infinite
              <br />
              Transactions!
            </div>
            <div className="Frame48095567 flex flex-col justify-start items-center gap-12 md:inline-flex md:flex-row">
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
              <div className="hidden DividerVertical h-28 opacity-40 bg-white flex-col justify-start items-start md:inline-flex">
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
              <div className="hidden DividerVertical h-28 opacity-40 bg-white flex-col justify-start items-start md:inline-flex">
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

      <div className="CardGroup mt-48">
        <div className="container">
          <div className="flex-col justify-start items-end gap-20 inline-flex">
            <div className="Card self-stretch rounded flex-col justify-start items-start flex">
              <div className="Paper self-stretch rounded flex-col justify-start items-start flex">
                <div className="CardElements flex-col md:flex-row self-stretch rounded justify-start items-center gap-28 inline-flex">
                  <div className="Cardheader grow shrink basis-0 p-4 justify-start items-center flex">
                    <div className="Content grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                      <div className="Header self-stretch text-white text-3xl font-bold leading-10 tracking-tight">
                        Accept Feature
                      </div>
                      <div className="Subheader self-stretch text-stone-300 text-base font-normal leading-normal tracking-tight">
                        Ease of mass disbursement for web3 game guilds to manage
                        thousands of scholar rewards simultaneously from token
                        to fiat (bank accounts and e-wallets).
                      </div>
                    </div>
                  </div>
                  <div className="Cardmedia p-2 bg-neutral-200 bg-opacity-10 rounded-2xl border border-white border-opacity-10 flex-col justify-center items-center inline-flex">
                    <div className="hidden md:block Thumbnail1 w-96 h-64 rounded-lg relative">
                      <Image
                        alt="Thumbnail"
                        src="/video-thumbnail.png"
                        fill={true}
                      />
                    </div>
                    <div className="md:hidden Thumbnail1 w-full h-64 rounded-lg relative">
                      <Image
                        alt="Thumbnail"
                        src="/video-thumbnail.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Card self-stretch rounded flex-col justify-start items-start flex">
              <div className="Paper self-stretch rounded flex-col justify-start items-start flex">
                <div className="CardElements flex-col md:flex-row self-stretch rounded justify-start items-center gap-28 inline-flex">
                  <div className="hidden Cardmedia p-2 bg-neutral-200 bg-opacity-10 rounded-2xl border border-white border-opacity-10 flex-col justify-center items-center md:inline-flex">
                    <div className="Thumbnail1 w-96 h-64 rounded-lg relative">
                      <Image
                        alt="Thumbnail"
                        src="/video-thumbnail.png"
                        fill={true}
                      />
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
                        book, no KYC process, with safe and secure transactions.
                      </div>
                    </div>
                  </div>
                  <div className="md:hidden Cardmedia p-2 bg-neutral-200 bg-opacity-10 rounded-2xl border border-white border-opacity-10 flex-col justify-center items-center inline-flex">
                    <div className="Thumbnail1 w-full h-64 rounded-lg relative">
                      <Image
                        alt="Thumbnail"
                        src="/video-thumbnail.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Card self-stretch rounded flex-col justify-start items-start flex">
              <div className="Paper self-stretch rounded flex-col justify-start items-start flex">
                <div className="CardElements flex-col md:flex-row self-stretch rounded justify-start items-center gap-28 inline-flex">
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
                  <div className="Cardmedia p-2 bg-neutral-200 bg-opacity-10 rounded-2xl border border-white border-opacity-10 flex-col justify-center items-center inline-flex">
                    <div className="hidden md:block Thumbnail1 w-96 h-64 rounded-lg relative">
                      <Image
                        alt="Thumbnail"
                        src="/video-thumbnail.png"
                        fill={true}
                      />
                    </div>
                    <div className="md:hidden Thumbnail1 w-full h-64 rounded-lg relative">
                      <Image
                        alt="Thumbnail"
                        src="/video-thumbnail.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Frame48095565 mt-40">
        <div className="container">
          <div className="w-full flex-col justify-start items-center gap-28 inline-flex">
            <div className="Title self-stretch flex-col justify-start items-center gap-7 flex">
              <div className="SectionTitle self-stretch text-center text-white text-4xl font-bold tracking-tight">
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
                  <Image alt="Image40" src="/circle-graphic.png" fill={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Frame48095566 mt-40">
        <div className="container">
          <div className="flex-col w-full justify-start items-center gap-16 inline-flex">
            <div className="SectionTitle text-center text-white text-4xl font-bold">
              Our Partners
            </div>
            {/* PC */}
            <div className="hidden Wrapper flex-col justify-center items-center gap-8 md:flex">
              <div className="CardGroup justify-center items-center gap-6 inline-flex">
                <div className="Cardmedia w-28 h-28 lg:w-44 lg:h-44 rounded-2xl flex-col justify-start items-start inline-flex">
                  <div className="LibraryPlaceholderImage w-28 h-28 lg:w-44 lg:h-44 p-5 lg:p-10 bg-zinc-900 rounded-2xl border border-white border-opacity-10 backdrop-blur-xl justify-center items-center inline-flex">
                    <div className="GggGarudaIcon2 w-20 h-20 lg:w-32 lg:h-32 relative">
                      <Image alt="Logo" src="/partner-garuda.png" fill={true} />
                    </div>
                  </div>
                </div>
                <div className="Cardmedia w-28 h-28 lg:w-44 lg:h-44 rounded-2xl flex-col justify-start items-start inline-flex">
                  <div className="LibraryPlaceholderImage w-28 h-28 lg:w-44 lg:h-44 p-5 lg:p-10 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                    <div className="Wtw1 w-20 h-20 lg:w-32 lg:h-32 rounded-2xl relative">
                      <Image src="/partner-wolf.png" alt="Wtw1" fill={true} />
                    </div>
                  </div>
                </div>
                <div className="Cardmedia w-28 h-28 lg:w-44 lg:h-44 rounded-2xl flex-col justify-start items-start inline-flex">
                  <div className="LibraryPlaceholderImage w-28 h-28 lg:w-44 lg:h-44 p-5 lg:p-10 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                    <div className="Playmining w-20 h-20 lg:w-32 lg:h-32 relative">
                      <Image
                        src="/partner-playmining.png"
                        alt="Playmining"
                        fill={true}
                      />
                    </div>
                  </div>
                </div>
                <div className="Cardmedia w-28 h-28 lg:w-44 lg:h-44 rounded-2xl flex-col justify-start items-start inline-flex">
                  <div className="LibraryPlaceholderImage w-28 h-28 lg:w-44 lg:h-44 px-8 py-6 lg:px-16 lg:py-10 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                    <div className="KMSKDeinze1 w-12 h-20 lg:w-20 lg:h-32 relative">
                      <Image
                        className="KMSKDeinze1"
                        src="/partner-kmsk.png"
                        alt="KMSKDeinze1"
                        fill={true}
                      />
                    </div>
                  </div>
                </div>
                <div className="Cardmedia w-28 h-28 lg:w-44 lg:h-44 rounded-2xl flex-col justify-start items-start inline-flex">
                  <div className="LibraryPlaceholderImage w-28 h-28 lg:w-44 lg:h-44 p-5 lg:p-10 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                    <div className="Frame48095537 flex-col justify-start items-center gap-2 inline-flex">
                      <div className="Logo2 w-8 h-8 lg:w-16 lg:h-16 relative">
                        <Image
                          src="/partner-digital-asset.png"
                          alt="Logo2"
                          fill={true}
                        />
                      </div>
                      <div className="Logo1 w-20 h-3 lg:w-36 lg:h-6 relative">
                        <Image
                          src="/partner-digital-asset-title.png"
                          alt="Logo1"
                          fill={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="CardGroup justify-center items-center gap-6 inline-flex">
                <div className="Cardmedia w-28 h-28 lg:w-44 lg:h-44 rounded-2xl flex-col justify-start items-start inline-flex">
                  <div className="LibraryPlaceholderImage w-28 h-28 lg:w-44 lg:h-44 p-5 lg:p-10 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                    <div className="EternalCrypt1 w-24 h-8 lg:w-44 lg:h-11 relative">
                      <Image
                        src="/partner-eternal-crypt.png"
                        alt="EternalCrypt1"
                        fill={true}
                      />
                    </div>
                  </div>
                </div>
                <div className="Cardmedia w-28 h-28 lg:w-44 lg:h-44 rounded-2xl flex-col justify-start items-start inline-flex">
                  <div className="LibraryPlaceholderImage w-28 h-28 lg:w-44 lg:h-44 p-5 lg:p-10 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                    <div className="Sakura w-24 h-8 lg:w-44 lg:h-14 relative">
                      <Image
                        src="/partner-sakura-guide-game.png"
                        alt="Sakura"
                        fill={true}
                      />
                    </div>
                  </div>
                </div>
                <div className="Cardmedia w-28 h-28 lg:w-44 lg:h-44 rounded-2xl flex-col justify-start items-start inline-flex">
                  <div className="LibraryPlaceholderImage w-28 h-28 lg:w-44 lg:h-44 p-5 lg:p-10 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                    <div className="PlaysiaTV w-24 h-8 lg:w-44 lg:h-10 relative">
                      <Image
                        src="/partner-playsia-tv.png"
                        alt="PlaysiaTV"
                        fill={true}
                      />
                    </div>
                  </div>
                </div>
                <div className="Cardmedia w-28 h-28 lg:w-44 lg:h-44 rounded-2xl flex-col justify-start items-start inline-flex">
                  <div className="LibraryPlaceholderImage w-28 h-28 lg:w-44 lg:h-44 p-5 lg:p-10 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                    <div className="ACA w-24 h-8 lg:w-44 lg:h-11 relative">
                      <Image src="/partner-aca.png" alt="ACA" fill={true} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SP */}
            <div className="md:hidden Wrapper grid grid-cols-3 justify-center items-center gap-8">
              <div className="Cardmedia w-24 h-24 rounded-2xl flex-col justify-start items-start inline-flex">
                <div className="LibraryPlaceholderImage w-24 h-24 p-4 bg-zinc-900 rounded-2xl border border-white border-opacity-10 backdrop-blur-xl justify-center items-center inline-flex">
                  <div className="GggGarudaIcon2 w-16 h-16 relative">
                    <Image alt="Logo" src="/partner-garuda.png" fill={true} />
                  </div>
                </div>
              </div>
              <div className="Cardmedia w-24 h-24 rounded-2xl flex-col justify-start items-start inline-flex">
                <div className="LibraryPlaceholderImage w-24 h-24 p-4 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                  <div className="Wtw1 w-16 h-16 rounded-2xl relative">
                    <Image src="/partner-wolf.png" alt="Wtw1" fill={true} />
                  </div>
                </div>
              </div>
              <div className="Cardmedia w-24 h-24 rounded-2xl flex-col justify-start items-start inline-flex">
                <div className="LibraryPlaceholderImage w-24 h-24 p-4 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                  <div className="Playmining w-16 h-16 relative">
                    <Image
                      src="/partner-playmining.png"
                      alt="Playmining"
                      fill={true}
                    />
                  </div>
                </div>
              </div>
              <div className="Cardmedia w-24 h-24 rounded-2xl flex-col justify-start items-start inline-flex">
                <div className="LibraryPlaceholderImage w-24 h-24 p-4 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                  <div className="KMSKDeinze1 w-10 h-16 relative">
                    <Image
                      className="KMSKDeinze1"
                      src="/partner-kmsk.png"
                      alt="KMSKDeinze1"
                      fill={true}
                    />
                  </div>
                </div>
              </div>
              <div className="Cardmedia w-24 h-24 rounded-2xl flex-col justify-start items-start inline-flex">
                <div className="LibraryPlaceholderImage w-24 h-24 p-4 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                  <div className="Frame48095537 flex-col justify-start items-center gap-2 inline-flex">
                    <div className="Logo2 w-8 h-8 relative">
                      <Image
                        src="/partner-digital-asset.png"
                        alt="Logo2"
                        fill={true}
                      />
                    </div>
                    <div className="Logo1 w-14 h-4 relative">
                      <Image
                        src="/partner-digital-asset-title.png"
                        alt="Logo1"
                        fill={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="Cardmediaw-24 h-24 rounded-2xl flex-col justify-start items-start inline-flex">
                <div className="LibraryPlaceholderImage w-24 h-24 p-4 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                  <div className="EternalCrypt1 w-16 h-5 relative">
                    <Image
                      src="/partner-eternal-crypt.png"
                      alt="EternalCrypt1"
                      fill={true}
                    />
                  </div>
                </div>
              </div>
              <div className="Cardmedia w-24 h-24 rounded-2xl flex-col justify-start items-start inline-flex">
                <div className="LibraryPlaceholderImage w-24 h-24 p-4 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                  <div className="Sakura w-16 h-5 relative">
                    <Image
                      src="/partner-sakura-guide-game.png"
                      alt="Sakura"
                      fill={true}
                    />
                  </div>
                </div>
              </div>
              <div className="Cardmedia w-24 h-24 rounded-2xl flex-col justify-start items-start inline-flex">
                <div className="LibraryPlaceholderImage w-24 h-24 p-4 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                  <div className="PlaysiaTV w-16 h-5 relative">
                    <Image
                      src="/partner-playsia-tv.png"
                      alt="PlaysiaTV"
                      fill={true}
                    />
                  </div>
                </div>
              </div>
              <div className="Cardmedia w-24 h-24 rounded-2xl flex-col justify-start items-start inline-flex">
                <div className="LibraryPlaceholderImage w-24 h-24 p-4 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                  <div className="ACA w-16 h-5 relative">
                    <Image src="/partner-aca.png" alt="ACA" fill={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="News mt-40">
        <div className="container">
          <div className="justify-center items-center inline-flex">
            <div className="Wrapper self-stretch flex-col justify-start items-start gap-16 inline-flex">
              <div className="Title w-full justify-between items-center inline-flex">
                <div className="Title text-white text-4xl font-bold">
                  Browse our latest news
                </div>
                <div className="Button px-8 py-2 bg-sky-500 rounded-3xl shadow flex-col justify-center items-center inline-flex">
                  <div className="Base justify-center items-center gap-2 inline-flex">
                    <div className="Button text-white text-base font-medium uppercase leading-relaxed tracking-wide">
                      See All
                    </div>
                  </div>
                </div>
              </div>
              <div className="Cardgroup grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="Card p-4 bg-neutral-200 bg-opacity-5 rounded-2xl border border-white border-opacity-10 flex-col justify-start items-start inline-flex">
                  <div className="Cardmedia flex-col justify-start items-start flex">
                    <div className="LibraryPlaceholderImage relative w-full h-44 bg-black bg-opacity-5 justify-center items-center inline-flex">
                      <Image
                        className="rounded-lg"
                        src="/news-x-eternal-crypt.png"
                        alt="NewsX"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="Cardheader py-4 justify-center items-start inline-flex">
                    <div className="Content grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                      <div className="EternalCryptWizardryBcSignsPartnershipWithSoutheastAsiaGameGuildGarudaGuildGames text-white text-base font-bold leading-normal tracking-tight">
                        "Eternal Crypt - Wizardry BC -" signs partnership with
                        Southeast Asia game guild "Garuda Guild Games"
                      </div>
                      <div className="DividerHorizontal h-px border border-white border-opacity-10 flex-col justify-start items-start flex">
                        <div className="MinHeight w-px h-px relative" />
                      </div>
                      <div className="GggEnvoyPortalThePioneerOfTheWeb3PaymentSolution opacity-40 text-white text-sm font-normal leading-tight tracking-tight">
                        GGG "Envoy Portal", the pioneer of the Web3 payment
                        solution.
                      </div>
                    </div>
                  </div>
                  <div className="Description w-full justify-end items-start inline-flex">
                    <div className="Month text-white text-xs font-normal leading-none tracking-tight">
                      September 2023
                    </div>
                    <div className="Publisher text-white text-xs font-normal leading-none tracking-tight">
                      prtimes.jp
                    </div>
                  </div>
                </div>
                <div className="Card p-4 bg-neutral-200 bg-opacity-5 rounded-2xl border border-white border-opacity-10 flex-col justify-start items-start inline-flex">
                  <div className="Cardmedia h-44 flex-col justify-start items-start flex">
                    <div className="LibraryPlaceholderImage relative w-full h-44 bg-black bg-opacity-5 justify-center items-center inline-flex">
                      <Image
                        className="rounded-lg"
                        src="/news-x-playmining.png"
                        alt="NewsXPlaymining"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="Cardheader py-4 justify-center items-start inline-flex">
                    <div className="Content grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                      <div className="EternalCryptWizardryBcSignsPartnershipWithSoutheastAsiaGameGuildGarudaGuildGames text-white text-base font-bold leading-normal tracking-tight">
                        "Eternal Crypt - Wizardry BC -" signs partnership with
                        Southeast Asia game guild "Garuda Guild Games"
                      </div>
                      <div className="DividerHorizontal h-px border border-white border-opacity-10 flex-col justify-start items-start flex">
                        <div className="MinHeight w-px h-px relative" />
                      </div>
                      <div className="GggEnvoyPortalThePioneerOfTheWeb3PaymentSolution opacity-40 text-white text-sm font-normal leading-tight tracking-tight">
                        GGG "Envoy Portal", the pioneer of the Web3 payment
                        solution.
                      </div>
                    </div>
                  </div>
                  <div className="Description w-full justify-end items-start inline-flex">
                    <div className="Month text-white text-xs font-normal leading-none tracking-tight">
                      September 2023
                    </div>
                    <div className="Publisher text-white text-xs font-normal leading-none tracking-tight">
                      prtimes.jp
                    </div>
                  </div>
                </div>
                <div className="Card p-4 bg-neutral-200 bg-opacity-5 rounded-2xl border border-white border-opacity-10 flex-col justify-start items-start inline-flex">
                  <div className="Cardmedia h-44 flex-col justify-start items-start flex">
                    <div className="LibraryPlaceholderImage relative w-full h-44 bg-black bg-opacity-5 justify-center items-center inline-flex">
                      <Image
                        className="rounded-lg"
                        src="/news-playsia-tv.png"
                        alt="NewsXPlaysia"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="Cardheader py-4 justify-center items-start inline-flex">
                    <div className="Content grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                      <div className="EternalCryptWizardryBcSignsPartnershipWithSoutheastAsiaGameGuildGarudaGuildGames text-white text-base font-bold leading-normal tracking-tight">
                        "Eternal Crypt - Wizardry BC -" signs partnership with
                        Southeast Asia game guild "Garuda Guild Games"
                      </div>
                      <div className="DividerHorizontal h-px border border-white border-opacity-10 flex-col justify-start items-start flex">
                        <div className="MinHeight w-px h-px relative" />
                      </div>
                      <div className="GggEnvoyPortalThePioneerOfTheWeb3PaymentSolution opacity-40 text-white text-sm font-normal leading-tight tracking-tight">
                        GGG "Envoy Portal", the pioneer of the Web3 payment
                        solution.
                      </div>
                    </div>
                  </div>
                  <div className="Description w-full justify-end items-start inline-flex">
                    <div className="Month text-white text-xs font-normal leading-none tracking-tight">
                      September 2023
                    </div>
                    <div className="Publisher text-white text-xs font-normal leading-none tracking-tight">
                      prtimes.jp
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
