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

const Landing = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="flex items-center">
            <Box
              className="sm:w-4/5"
              sx={{
                "&:after": {
                  background: `url(${bgLeft.src}) left`,
                  position: "absolute",
                  left: 0,
                  top: 70,
                  width: {
                    xs: "100%",
                    sm: "50%",
                  },
                  backgroundSize: {
                    xs: "cover",
                    md: "contain",
                  },
                  backgroundRepeat: "no-repeat",
                  height: 500,
                  zIndex: 1,
                  content: '" "',
                },
              }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl relative z-10">
                <p className=" uppercase font-extrabold leading-normal">
                  own your <span className="text-secondary">games</span>,
                </p>
                <p className="uppercase font-bold leading-normal">
                  build your <span className="text-secondary">stash</span>,
                </p>
                <p className="uppercase font-bold leading-normal">
                  earn real <span className="text-secondary">rewards!</span>
                </p>
                <div className="mt-8">
                  <Link href="https://app.envoyportal.com">
                    <Button
                      variant="contained"
                      sx={{ color: "white" }}
                      size="large"
                      color="warning"
                    >
                      Launch App
                    </Button>
                  </Link>
                </div>
              </div>
            </Box>
            <Box
              className="sm:w-1/2 h-[500px]"
              sx={{
                "&:after": {
                  background: `url(${headerIllus.src}) right`,
                  position: "absolute",
                  right: "10%",
                  top: 70,
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                  width: "60%",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  height: 500,
                  // eslint-disable-next-line quotes
                  content: '" "',
                },
              }}
            ></Box>
          </div>
        </div>
      </section>
      <Element name="about">
        <section className="py-12">
          <div className="container">
            <div className="max-w-lg mx-auto text-center">
              <h3 className="text-4xl font-bold uppercase">
                portal to <span className="text-secondary">unlimited</span>{" "}
                possibility
              </h3>
              <p className="mt-6">
                Buy whatever you want from any game.{" "}
                <span className="text-ep-yellow">
                  No Credit Card, no PayPal, no USD/EUR needed
                </span>
                . Just pay with Local Currency (Bank Transfer or e-Wallets).
              </p>
            </div>
            <div className="mt-6">
              <SectionSlider>
                <SwiperSlide>
                  <div className="relative">
                    <div>
                      <img src={sprinterland.src} alt="Envoy Portal X GGG" />
                      <div className="ml-5 mb-4 justify-center mt-4 flex text-white text-xl space-x-3 items-center font-bold">
                        <p>Buy and build your ultimate deck</p>
                        <div className="flex-none">
                          <Link href="https://app.envoyportal.com">
                            <Button
                              variant="contained"
                              sx={{ color: "white" }}
                              color="warning"
                            >
                              Launch App
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative">
                    <div>
                      <img src={minecraft.src} alt="Envoy Portal X GGG" />
                      <div className="ml-5 mb-4 justify-center mt-4 flex text-white text-xl space-x-3 items-center font-bold">
                        <p>Buy packs from marketplace</p>
                        <div className="flex-none">
                          <Link href="https://app.envoyportal.com">
                            <Button
                              variant="contained"
                              sx={{ color: "white" }}
                              color="warning"
                            >
                              Launch App
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative">
                    <div>
                      <img src={sorare.src} alt="Envoy Portal X GGG" />
                      <div className="ml-5 mb-4 justify-center mt-4 flex text-white text-xl space-x-3 items-center font-bold">
                        <p>Buy your dream players</p>
                        <div className="flex-none">
                          <Link href="https://app.envoyportal.com">
                            <Button
                              variant="contained"
                              sx={{ color: "white" }}
                              color="warning"
                            >
                              Launch App
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative">
                    <div>
                      <img src={csgo.src} alt="Envoy Portal X GGG" />
                      <div className="ml-5 mb-4 justify-center mt-4 flex text-white text-xl space-x-3 items-center font-bold">
                        <p>Buy rare CS:GO skins</p>
                        <div className="flex-none">
                          <Link href="https://app.envoyportal.com">
                            <Button
                              variant="contained"
                              sx={{ color: "white" }}
                              color="warning"
                            >
                              Launch App
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative">
                    <div>
                      <img src={sandbox.src} alt="Envoy Portal X GGG" />
                      <div className="ml-5 mb-4 justify-center mt-4 flex text-white text-xl space-x-3 items-center font-bold">
                        <p>Customize your avatar</p>
                        <div className="flex-none">
                          <Link href="https://app.envoyportal.com">
                            <Button
                              variant="contained"
                              sx={{ color: "white" }}
                              color="warning"
                            >
                              Launch App
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </SectionSlider>
            </div>
          </div>
        </section>
      </Element>
      <Box
        sx={{
          "&:after": {
            background: `url(${boxEl.src}) right`,
            position: "absolute",
            right: 0,
            top: -130,
            width: "600px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: "400px",
            content: '" "',
          },
        }}
        className="pt-[200px] pb-12 relative"
      >
        <div className="container">
          <div className="block sm:flex items-center space-x-3">
            <div className="sm:w-4/12">
              <div className="max-w-lg text-center sm:text-left">
                <h3 className="text-6xl font-bold uppercase">
                  how it <span className="text-ep-yellow">work</span>
                </h3>
                <div className="mt-6 text-lg">
                  <a href="#">
                    <span>Check it out</span>
                    <ArrowForwardIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="sm:w-8/12 mt-10 sm:mt-0">
              <SectionSlider>
                <SwiperSlide>
                  <div>
                    <img src={hw1.src} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={hw2.src} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={hw3.src} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={hw4.src} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={hw5.src} alt="" />
                  </div>
                </SwiperSlide>
              </SectionSlider>
            </div>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          "&:after": {
            background: `url(${bgFeature.src}) top`,
            position: "absolute",
            right: 0,
            top: 0,
            left: 0,
            width: "100%",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: "100%",
            content: '" "',
          },
        }}
        className="py-12 relative"
      >
        <div className="container">
          <div className="max-w-lg mx-auto text-center">
            <p className="uppercase text-xl">
              Win some tournament prize? .. or do you want to cash out your
              rewards?
            </p>
            <h3 className="text-4xl font-bold uppercase mt-6">
              say <span className="text-ep-yellow">no more!</span>
            </h3>
          </div>
          <div className="mt-14">
            <SectionSlider>
              <SwiperSlide>
                <div>
                  <img src={snm1.src} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src={snm2.src} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src={snm3.src} alt="" />
                </div>
              </SwiperSlide>
            </SectionSlider>
          </div>
        </div>
        <Element name="features">
          <div className="mt-28">
            <div className="container">
              <div className="max-w-lg mx-auto text-center">
                <h3 className="text-4xl font-bold uppercase">
                  designed by <span className="text-ep-yellow">gamers</span> for
                  gamers
                </h3>
                <p className="mt-6">
                  Intuitive solutions designed by Gamers to overcome the
                  problems within modern gaming ecosystems.
                </p>
              </div>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-14">
                  <FeatureCard
                    title="Global support game"
                    description="The Portal will keep growing to support every Global Top and
                Trending Games."
                  />
                  <FeatureCard
                    title="intuitive mechanism"
                    description="Designed by Gamers to make every experience to be fun and
                familiar. Skip the tutorial and jump right to the action."
                  />
                  <FeatureCard
                    title="ease of payments"
                    description="Simply pay with local currency using bank transfer or e-wallet app. No Credit Card, no PayPal or EUR/USD or any foreign payment method needed."
                  />
                  <FeatureCard
                    title="DARK MODE FTW"
                    description="Because we know, Dark Mode is mandatory. Portal will pamper gamers with sleek, elegant and modern interfaces. Keep you stay in the zone, Winning!"
                  />
                  <FeatureCard
                    title="STATE OF ART CODE QUALITY"
                    description="Built with battle-tested codes, to ensure maximum security and most efficient experience."
                  />
                  <FeatureCard
                    title="WELL DOCUMENTED"
                    description="Designed to be modular and developer friendly. Always open to cooperate with any game/project."
                  />
                  <FeatureCard
                    title="COMPETITIVE PRICING"
                    description="Provide best service with competitive fees, ensuring our users to get the best bang for their bucks."
                  />
                  <FeatureCard
                    title="CASH-IN & CASH-OUT"
                    description="Vice versa. Use the Portal to plant the seed, use it again to reap the rewards."
                  />
                </div>
              </div>
            </div>
          </div>
        </Element>
      </Box>
      <section className="py-12 relative">
        <div className="container">
          <div className="max-w-lg mx-auto text-center relative z-40">
            <h3 className="text-4xl font-bold uppercase mt-6">
              .. and so much more!
            </h3>
            <div className="mt-8">
              <Link href="https://app.envoyportal.com">
                <Button
                  variant="contained"
                  sx={{ color: "white" }}
                  color="warning"
                >
                  Launch App
                </Button>
              </Link>
            </div>
          </div>
          <Box
            sx={{
              "&:after": {
                background: `url(${bgFooter.src}) center`,
                position: "absolute",
                right: 0,
                top: 70,
                left: 0,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: 387,
                content: '" "',
              },
            }}
            className="mt-14"
          >
            <img className="mx-auto h-[120px]" src={bigLogo.src} alt="" />
          </Box>
        </div>
      </section>
    </div>
  )
}

export default Landing
