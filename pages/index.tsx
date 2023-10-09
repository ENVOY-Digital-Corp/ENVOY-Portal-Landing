/* eslint-disable quotes */
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Box, Button } from "@mui/material"

import { SwiperSlide } from "swiper/react"

import bgLeft from "@/assets/images/bg-2.png"
import bgFeature from "@/assets/images/bg-feature.png"
import bgFooter from "@/assets/images/bg-footer.png"
import bigLogo from "@/assets/images/big-envoy-logo.png"
import boxEl from "@/assets/images/box-el.png"
import csgo from "@/assets/images/csgo.png"
import headerIllus from "@/assets/images/header-illus.png"
import hw1 from "@/assets/images/hw1.png"
import hw2 from "@/assets/images/hw2.png"
import hw3 from "@/assets/images/hw3.png"
import hw4 from "@/assets/images/hw4.png"
import hw5 from "@/assets/images/hw5.png"
import minecraft from "@/assets/images/minecraft.png"
import sandbox from "@/assets/images/sandbox.png"
import snm1 from "@/assets/images/snm1.png"
import snm2 from "@/assets/images/snm2.png"
import snm3 from "@/assets/images/snm3.png"
import sorare from "@/assets/images/sorare.png"
import sprinterland from "@/assets/images/sprinterland.png"
import FeatureCard from "@/components/Cards/FeaturesCard"
import SectionSlider from "@/components/Landing/Section/SectionSlider"
import Link from "next/link"
import { Element } from "react-scroll"
import Image from "next/image"

const Landing = () => {
  return (
    <div className="LandingPage bg-stone-950 font-['Euclid_Circular_B']">
      <div className="HeroSection relative">
        <div className="Bg w-full h-full left-0 top-0 absolute">
          <div className="Ellipse1 w-full h-full left-0 top-0 absolute opacity-20 bg-cyan-900 rounded-full blur-3xl" />
          <div className="MaskGroup w-full h-full left-0 bottom-0 absolute">
            <div className="Aset22 w-[50rem] h-96 left-0 bottom-0 absolute opacity-60">
              <Image src="/graphic1.png" alt="Aset22" fill={true} />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="grid grid-cols-2 gap-4">
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
            <div className="Cardmedia flex-col justify-start items-start inline-flex">
              <div className="LibraryPlaceholderImage bg-black bg-opacity-5 justify-center items-center inline-flex">
                <img className="Image39 w-full" src="/graphic2.png" />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
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

      <div className="Frame48095568">
        <div className="container">
          <div className="flex-col w-full justify-start items-center gap-16 inline-flex">
            <div className="SectionTitle text-center text-neutral-50 text-4xl font-bold tracking-tight">
              One stop features to infinite
              <br />
              Transactions!
            </div>
            <div className="Frame48095567 justify-start items-center gap-12 inline-flex">
              <div className="Wrapper flex-col justify-start items-center gap-4 inline-flex">
                <div className="Text justify-center items-end gap-2 inline-flex">
                  <div className="999 text-center text-white text-6xl font-medium">
                    99.999
                  </div>
                  <div className=" text-center text-white text-5xl font-medium">
                    +
                  </div>
                </div>
                <div className="Description text-center text-white text-lg font-medium">
                  Active user, and growing!
                </div>
              </div>
              <div className="DividerVertical h-28 opacity-40 bg-white flex-col justify-start items-start inline-flex">
                <div className="MinWidth w-px h-px relative" />
              </div>
              <div className="Wrapper flex-col justify-start items-center gap-4 inline-flex">
                <div className="Text justify-center items-end gap-2 inline-flex">
                  <div className="999999 text-center text-white text-6xl font-medium">
                    99.999.999
                  </div>
                  <div className=" text-center text-white text-5xl font-medium">
                    +
                  </div>
                </div>
                <div className="Description text-center text-white text-lg font-medium">
                  Transaction
                </div>
              </div>
              <div className="DividerVertical h-28 opacity-40 bg-white flex-col justify-start items-start inline-flex">
                <div className="MinWidth w-px h-px relative" />
              </div>
              <div className="Wrapper flex-col justify-start items-center gap-4 inline-flex">
                <div className="Text justify-center items-end gap-2 inline-flex">
                  <div className=" text-center text-white text-6xl font-medium">
                    9999
                  </div>
                  <div className=" text-center text-white text-5xl font-medium">
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

      <div className="CardGroup">
        <div className="container">
          <div className="flex-col justify-start items-end gap-20 inline-flex">
            <div className="Card self-stretch rounded flex-col justify-start items-start flex">
              <div className="Paper self-stretch rounded flex-col justify-start items-start flex">
                <div className="CardElements self-stretch rounded justify-start items-center gap-28 inline-flex">
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
                    <div className="Thumbnail1 w-96 h-64 rounded-lg relative">
                      <Image
                        alt="Thumbnail"
                        src="/video-thumbnail.png"
                        fill={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Card self-stretch rounded flex-col justify-start items-start flex">
              <div className="Paper self-stretch rounded flex-col justify-start items-start flex">
                <div className="CardElements self-stretch rounded justify-start items-center gap-28 inline-flex">
                  <div className="Cardmedia p-2 bg-neutral-200 bg-opacity-10 rounded-2xl border border-white border-opacity-10 flex-col justify-center items-center inline-flex">
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
                </div>
              </div>
            </div>
            <div className="Card self-stretch rounded flex-col justify-start items-start flex">
              <div className="Paper self-stretch rounded flex-col justify-start items-start flex">
                <div className="CardElements self-stretch rounded justify-start items-center gap-28 inline-flex">
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
                    <div className="Thumbnail1 w-96 h-64 rounded-lg relative">
                      <Image
                        alt="Thumbnail"
                        src="/video-thumbnail.png"
                        fill={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Frame48095565">
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
                <div className="Image40 w-[50rem] h-[50rem] relative">
                  <Image alt="Image40" src="/circle-graphic.png" fill={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Frame48095566">
        <div className="container">
          <div className="flex-col w-full justify-start items-center gap-16 inline-flex">
            <div className="SectionTitle text-center text-white text-4xl font-bold">
              Our Partners
            </div>
            <div className="Wrapper flex-col justify-center items-center gap-8 flex">
              <div className="CardGroup justify-center items-center gap-6 inline-flex">
                <div className="Cardmedia w-52 h-52 rounded-2xl flex-col justify-start items-start inline-flex">
                  <div className="LibraryPlaceholderImage w-52 h-52 p-10 bg-zinc-900 rounded-2xl border border-white border-opacity-10 backdrop-blur-xl justify-center items-center inline-flex">
                    <div className="GggGarudaIcon2 w-32 h-32 relative">
                      <Image alt="Logo" src="/partner-garuda.png" fill={true} />
                    </div>
                  </div>
                </div>
                <div className="Cardmedia w-52 h-52 rounded-2xl flex-col justify-start items-start inline-flex">
                  <div className="LibraryPlaceholderImage w-52 h-52 p-10 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                    <img
                      className="Wtw1 w-32 h-32 rounded-2xl"
                      src="https://via.placeholder.com/130x130"
                    />
                  </div>
                </div>
                <div className="Cardmedia w-52 h-52 rounded-2xl flex-col justify-start items-start inline-flex">
                  <div className="LibraryPlaceholderImage w-52 h-52 p-10 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                    <img
                      className="1 w-32 h-32"
                      src="https://via.placeholder.com/130x130"
                    />
                  </div>
                </div>
                <div className="Cardmedia w-52 h-52 rounded-2xl flex-col justify-start items-start inline-flex">
                  <div className="LibraryPlaceholderImage w-52 h-52 px-16 py-10 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                    <img
                      className="KMSKDeinze1 w-20 h-32"
                      src="https://via.placeholder.com/76x130"
                    />
                  </div>
                </div>
                <div className="Cardmedia w-52 h-52 rounded-2xl flex-col justify-start items-start inline-flex">
                  <div className="LibraryPlaceholderImage px-8 py-14 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                    <div className="Frame48095537 flex-col justify-start items-center gap-2 inline-flex">
                      <img
                        className="Logo2 w-16 h-16"
                        src="https://via.placeholder.com/69x69"
                      />
                      <img
                        className="Logo1 w-36 h-6"
                        src="https://via.placeholder.com/147x23"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="CardGroup justify-center items-center gap-6 inline-flex">
                <div className="Cardmedia w-52 h-52 rounded-2xl flex-col justify-start items-start inline-flex">
                  <div className="LibraryPlaceholderImage w-52 h-52 px-5 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                    <img
                      className="EternalCrypt1 w-44 h-11"
                      src="https://via.placeholder.com/172x44"
                    />
                  </div>
                </div>
                <div className="Cardmedia w-52 h-52 rounded-2xl flex-col justify-start items-start inline-flex">
                  <div className="LibraryPlaceholderImage w-52 h-52 px-5 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                    <img
                      className="1 w-44 h-14"
                      src="https://via.placeholder.com/172x58"
                    />
                  </div>
                </div>
                <div className="Cardmedia w-52 h-52 rounded-2xl flex-col justify-start items-start inline-flex">
                  <div className="LibraryPlaceholderImage w-52 h-52 px-5 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                    <img
                      className="1 w-44 h-10"
                      src="https://via.placeholder.com/172x40"
                    />
                  </div>
                </div>
                <div className="Cardmedia w-52 h-52 rounded-2xl flex-col justify-start items-start inline-flex">
                  <div className="LibraryPlaceholderImage w-52 h-52 px-5 bg-zinc-900 rounded-2xl border border-white border-opacity-10 justify-center items-center inline-flex">
                    <img
                      className="Image3 w-44 h-11"
                      src="https://via.placeholder.com/172x44"
                    />
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
