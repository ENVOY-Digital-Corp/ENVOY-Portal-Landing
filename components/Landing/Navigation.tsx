import { useState } from "react"

import DehazeIcon from "@mui/icons-material/Dehaze"
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material"
import { Link as ScrollLink } from "react-scroll"

import logo from "@/assets/images/envoy-white.png"
import Link from "next/link"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"

const Navigation = () => {
  const [toggle, setToggle] = useState(false)
  const [follow, setFollow] = useState<null | HTMLElement>(null)

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    setToggle(true)
  }

  const handleFollowClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFollow(e.currentTarget)
  }

  const handleFollowClose = () => {
    setFollow(null)
  }

  return (
    <nav className="bg-[#12082B] h-[70px] z-40">
      <div className="container">
        <div className="flex justify-between h-[70px] items-center">
          <div>
            <Link href="/">
              <img src={logo.src} alt="envoy portal logo" className="w-24" />
            </Link>
          </div>
          <Box
            sx={{
              display: {
                xs: toggle ? "block" : "none",
                sm: "block",
              },
            }}
            className="
              absolute
              sm:relative
              left-0
              top-[70px]
              sm:top-auto
              bg-[#12082B]
              sm:bg-transparent
              z-50
              w-full
              sm:w-auto
              px-8
              py-4
              pb-10
              sm:p-0
            "
          >
            <ul className="sm:flex sm:space-x-10 space-y-4 sm:space-y-0 uppercase font-medium items-center">
              <li>
                <div>
                  <ScrollLink
                    to="about"
                    smooth={true}
                    className="cursor-pointer"
                  >
                    <Button variant="text" className="text-white">
                      About
                    </Button>
                  </ScrollLink>
                </div>
              </li>
              <li>
                <div>
                  <ScrollLink
                    to="features"
                    smooth={true}
                    className="cursor-pointer"
                  >
                    <Button variant="text" className="text-white">
                      Feature
                    </Button>
                  </ScrollLink>
                </div>
              </li>
              <li>
                <div>
                  <Button
                    variant="text"
                    onClick={handleFollowClick}
                    className="text-white"
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
                <div>
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
              </li>
            </ul>
          </Box>
          <div className="sm:hidden">
            <IconButton onClick={handleToggle} sx={{ color: "#F19C1D" }}>
              <DehazeIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
