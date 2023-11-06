import { Button } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { Element, Link as ScrollLink } from "react-scroll"

const Footer = () => {
  return (
    <footer className="w-full px-6 lg:px-16 pb-6 pt-[4.5rem] md:pt-[19rem] bg-stone-950 flex-col justify-start items-start gap-12 inline-flex">
      <div className="self-stretch flex-col justify-start items-start gap-12 flex">
        <div className="self-stretch h-72 relative">
          <div className="left-0 top-0 w-full h-full absolute bg-black rounded-3xl">
            <Image
              className="rounded-3xl"
              src="/footer-graphic.webp"
              alt="footer graphic"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="absolute w-full h-full">
            <div className="flex w-full h-full md:items-center">
              <div className="px-4 md:px-10 w-full grid grid-cols-1 md:grid-cols-2">
                <div className="justify-start items-center flex">
                  <div className="w-[35rem] grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="text-white text-3xl md:text-5xl font-semibold leading-10">
                      Join our newsletter
                    </div>
                    <div className="text-neutral-200 text-base md:text-lg font-normal leading-relaxed tracking-tight">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      Suspendisse varius enim in eros elementum tristique.
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-start gap-4">
                  <div className="max-md:w-full self-stretch justify-end md:justify-start items-start gap-4 inline-flex">
                    <div>
                      <input
                        className="h-10 px-6 md:h-12 md:px-6 rounded-full border border-white focus:outline-none text-white placeholder:text-white text-sm md:text-base font-normal bg-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    <Button className="bg-sky-500 rounded-3xl flex-col justify-center items-center inline-flex px-3 md:h-12 md:px-6">
                      <p className="text-white text-sm lg:text-base font-medium uppercase leading-relaxed tracking-wide">
                        Sign Up
                      </p>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-20 flex-col justify-center items-start gap-12 flex mt-6 md:mt-0">
          <div className="flex-col md:flex-row self-stretch justify-between items-start inline-flex gap-6">
            <div className="w-full md:w-40 self-stretch flex-col justify-center items-center gap-16 inline-flex">
              <div className="w-40 h-11 py-5 max-md:justify-center max-md:items-center relative">
                <Image
                  src="/envoy-logo-white-big.png"
                  alt="envoy portal logo"
                  fill={true}
                />
              </div>
            </div>
            <div className="w-full md:w-[40rem] grid grid-cols-3 justify-start items-start md:flex">
              <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-10 px-2.5 py-2 rounded flex-col justify-center items-center flex">
                  <div className="justify-center items-center gap-2 inline-flex">
                    <div className="text-white text-base font-medium uppercase leading-relaxed tracking-wide">
                      <a
                        href="https://twitter.com/envoycorp"
                        target="_blank"
                        className="block p-2 uppercase"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-10 px-2.5 py-2 rounded flex-col justify-center items-center flex">
                  <div className="justify-center items-center gap-2 inline-flex">
                    <div className="text-white text-base font-medium uppercase leading-relaxed tracking-wide">
                      <a
                        href="https://www.linkedin.com/company/envoy-digital-corp-pte-ltd/"
                        target="_blank"
                        className="block p-2 uppercase"
                      >
                        Linkedin
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-10 px-2.5 py-2 rounded flex-col justify-center items-center flex">
                  <div className="justify-center items-center gap-2 inline-flex">
                    <ScrollLink
                      to="about"
                      smooth={true}
                      className="cursor-pointer"
                    >
                      <div className="text-white text-base font-medium uppercase leading-relaxed tracking-wide">
                        About
                      </div>
                    </ScrollLink>
                  </div>
                </div>
                <div className="self-stretch h-10 px-2.5 py-2 rounded flex-col justify-center items-center flex">
                  <div className="Base justify-center items-center gap-2 inline-flex">
                    <ScrollLink
                      to="features"
                      smooth={true}
                      className="cursor-pointer"
                    >
                      <div className="text-white text-base font-medium uppercase leading-relaxed tracking-wide">
                        Features
                      </div>
                    </ScrollLink>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start inline-flex">
                <div className="self-stretch h-10 px-2.5 py-2 rounded flex-col justify-center items-center flex">
                  <div className="justify-center items-center gap-2 inline-flex">
                    <div className="text-white text-base font-medium uppercase leading-relaxed tracking-wide">
                      <Link href="/privacy" className="block p-2 uppercase">
                        Privacy
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-10 px-2.5 py-2 rounded flex-col justify-center items-center flex">
                  <div className="justify-center items-center gap-2 inline-flex">
                    <div className="text-white text-base font-medium uppercase leading-relaxed tracking-wide">
                      <Link href="/imprint" className="block p-2 uppercase">
                        Imprint
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-col justify-center items-center gap-6 flex">
        <div className="w-full opacity-60 text-center text-white text-xs font-normal uppercase">
          © ENVOY Portal {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}

export default Footer
