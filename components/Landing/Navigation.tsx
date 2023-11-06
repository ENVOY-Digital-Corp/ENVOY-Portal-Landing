import { Fragment, MouseEventHandler, useRef, useState } from "react"

import DehazeIcon from "@mui/icons-material/Dehaze"
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material"
import { Link as ScrollLink } from "react-scroll"

import logo from "@/assets/images/envoy-white.png"
import Link from "next/link"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import Image from "next/image"
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos"

const Navigation = () => {
  const [toggle, setToggle] = useState(false)
  const [follow, setFollow] = useState<null | HTMLElement>(null)

  const handleToggle = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    console.log("setToggle")
    setToggle(!toggle)
  }

  const handleFollowClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFollow(e.currentTarget)
  }

  const handleFollowClose = () => {
    setFollow(null)
  }

  return (
    <Fragment>
      <nav className="h-[70px]">
        <div
          className={`navbar-backdrop fixed ${
            !toggle && "hidden"
          } inset-0 bg-gray-800 opacity-25 z-40`}
          onClick={handleToggle}
        />
        <div className="container">
          <div className="flex justify-between h-[70px] items-center">
            <div>
              <Link href="/">
                <div className="w-24 relative">
                  <Image
                    src={logo.src}
                    alt="envoy portal logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </Link>
            </div>
            <Box
              className={`
              ${toggle ? "block" : "hidden"}
              md:block
              absolute
              md:relative
              left-0
              top-[70px]
              md:top-auto
              bg-[#0D0B0A]
              md:bg-transparent
              z-50
              w-full
              md:w-auto
              px-8
              py-4
              pb-10
              md:p-0
            `}
            >
              <ul className="md:flex md:space-x-5 space-y-4 md:space-y-0 font-medium items-center">
                <li>
                  <div>
                    <ScrollLink
                      to="features"
                      smooth={true}
                      className="cursor-pointer"
                    >
                      <Button
                        variant="text"
                        className="text-white normal-case max-md:justify-start"
                      >
                        Feature
                      </Button>
                    </ScrollLink>
                  </div>
                </li>
                <li>
                  <div>
                    <ScrollLink
                      to="about"
                      smooth={true}
                      className="cursor-pointer"
                    >
                      <Button
                        variant="text"
                        className="text-white normal-case max-md:justify-start"
                      >
                        About
                      </Button>
                    </ScrollLink>
                  </div>
                </li>
                <li>
                  <div>
                    <Button
                      variant="text"
                      onClick={handleFollowClick}
                      className="text-white normal-case max-md:justify-start"
                      endIcon={<ExpandMoreIcon />}
                    >
                      Follow
                    </Button>
                    <Menu
                      anchorEl={follow}
                      open={Boolean(follow)}
                      onClose={handleFollowClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={handleFollowClose}>
                        <a href="https://twitter.com/envoycorp" target="_blank">
                          <Button
                            variant="text"
                            onClick={handleFollowClick}
                            className="text-white"
                            endIcon={<ArrowOutwardIcon />}
                          >
                            Twitter
                          </Button>
                        </a>
                      </MenuItem>
                      <MenuItem onClick={handleFollowClose}>
                        <a href="https://t.me/envoyportal" target="_blank">
                          <Button
                            variant="text"
                            onClick={handleFollowClick}
                            className="text-white"
                            endIcon={<ArrowOutwardIcon />}
                          >
                            Telegram
                          </Button>
                        </a>
                      </MenuItem>
                    </Menu>
                  </div>
                </li>
                <li>
                  <Link href="/blog">
                    <Button
                      variant="text"
                      className="text-white normal-case max-md:justify-start"
                    >
                      Blog
                    </Button>
                  </Link>
                </li>
                <li>
                  <div>
                    <Link
                      href="https://app.envoyportal.com"
                      className="Button px-5 py-2 bg-neutral-200 bg-opacity-20 rounded-full backdrop-blur-xl flex-col justify-center items-center flex"
                    >
                      <div className="Base justify-center items-center gap-2 inline-flex">
                        <div className="Button text-white text-base font-normal leading-normal tracking-tight uppercase">
                          Launch App
                        </div>
                        <div className="MaskedIcon flex-col justify-center items-center inline-flex">
                          <ArrowForwardIos className="IconRight relative flex-col justify-start items-start flex text-sm" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </li>
              </ul>
            </Box>
            <div className="md:hidden">
              <IconButton onClick={handleToggle} sx={{ color: "white" }}>
                <DehazeIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navigation
