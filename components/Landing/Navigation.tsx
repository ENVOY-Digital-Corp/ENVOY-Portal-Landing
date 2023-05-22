import { useState } from "react"

import DehazeIcon from "@mui/icons-material/Dehaze"
import { Box, Button, IconButton } from "@mui/material"

import logo from "@/assets/images/envoy-white.png"

const Navigation = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <nav className="bg-[#12082B] h-[70px] z-40">
      <div className="container">
        <div className="flex justify-between h-[70px] items-center">
          <div>
            <a href="#">
              <img src={logo.src} alt="envoy portal logo" className="w-24" />
            </a>
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
            <ul className="sm:flex sm:space-x-10 space-y-4 sm:space-y-0 items-center">
              <li>
                <div>
                  <a href="#">About</a>
                </div>
              </li>
              <li>
                <div>
                  <a href="#">Feature</a>
                </div>
              </li>
              <li>
                <div>
                  <a href="#">Follow</a>
                </div>
              </li>
              <li>
                <div>
                  <Button
                    variant="contained"
                    sx={{ color: "white" }}
                    color="warning"
                  >
                    Launch App
                  </Button>
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
