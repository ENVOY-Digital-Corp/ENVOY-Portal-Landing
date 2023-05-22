/* eslint-disable import/no-unresolved */
import { Box } from '@mui/material';

import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper } from 'swiper/react';

type Props = {
  children: React.ReactNode;
};

const SectionSlider: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        '.swiper-button-prev': {
          color: 'white',
          left: 0,
        },
        '.swiper-button-next': {
          color: 'white',
          right: 0,
        },
        '.swiper-pagination': {
          '.swiper-pagination-bullet-active': {
            backgroundColor: 'white',
          },
        },
      }}
      className="max-w-3xl mx-auto text-center"
    >
      <Swiper
        // install Swiper modules
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        {children}
      </Swiper>
    </Box>
  );
};

export default SectionSlider;
