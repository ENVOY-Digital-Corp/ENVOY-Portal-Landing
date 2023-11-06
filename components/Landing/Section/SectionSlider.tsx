/* eslint-disable import/no-unresolved */
import { Box } from "@mui/material"

import { Autoplay, Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper } from "swiper/react"
import styles from "./styles.module.scss"

type Props = {
  children: React.ReactNode
}

const SectionSlider: React.FC<Props> = ({ children }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className={styles.swiper}
    >
      {children}
    </Swiper>
  )
}

export default SectionSlider
