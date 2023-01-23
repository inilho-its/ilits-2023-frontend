import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Typography from '@/components/typography/Typography';

import playlist_tryout from '@/constant/pembahasan-tryout';

const css = `.intrinsic-container {
  position: relative;
  height: 0;
}


/* 16x9 Aspect Ratio */

.intrinsic-container-16x9 {
  padding-bottom: 56.25%;
}


/* 4x3 Aspect Ratio */

.intrinsic-container-4x3 {
  padding-bottom: 70%;
}

.intrinsic-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
}`;

export default function Youtube() {
  const opts: YouTubeProps['opts'] = {
    width: '100%',
  };
  return (
    <Swiper
      className='video relative max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl'
      modules={[Navigation]}
      navigation={true}
      slidesPerView={1}
    >
      <style>{css}</style>
      {playlist_tryout.map(({ youtubeId, title }) => (
        <SwiperSlide
          className='intrinsic-container intrinsic-container-4x3'
          key={youtubeId}
        >
          <YouTube
            id='ytb'
            videoId={youtubeId}
            opts={opts}
            title={title}
            loading='lazy'
          />
          <Typography
            variant='h4'
            className='stroke -bottom-[3.55rem] hidden text-xl font-bold text-red-300 sm:px-8 sm:text-3xl md:absolute md:block md:text-3xl lg:-left-10 lg:-bottom-[3.67rem]  lg:mx-10 lg:px-12 lg:text-4xl'
          >
            {title}
          </Typography>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
