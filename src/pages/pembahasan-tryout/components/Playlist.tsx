import YouTube, { YouTubeProps } from 'react-youtube';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Typography from '@/components/typography/Typography';

import playlist_tryout from '@/constant/pembahasan-tryout';

const opts: YouTubeProps['opts'] = {
  frameborder: '0',
  allow: 'autoplay; encrypted-media',
};

export const PlaylistSaintek = () => {
  return (
    <Swiper
      className='video relative max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl'
      modules={[Navigation]}
      navigation={true}
      slidesPerView={1}
    >
      {playlist_tryout.saintek.map(({ youtubeId, title }) => (
        <SwiperSlide
          className='intrinsic-container intrinsic-container-4x3'
          key={youtubeId}
        >
          <YouTube
            id='ytb'
            videoId={youtubeId}
            title={title}
            opts={opts}
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
};

export const PlaylistSoshum = () => {
  return (
    <Swiper
      className='video relative max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl'
      modules={[Navigation]}
      navigation={true}
      slidesPerView={1}
    >
      {playlist_tryout.soshum.map(({ youtubeId, title }) => (
        <SwiperSlide
          className='intrinsic-container intrinsic-container-4x3'
          key={youtubeId}
        >
          <YouTube
            id='ytb'
            videoId={youtubeId}
            title={title}
            opts={opts}
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
};

export const PlaylistTPS = () => {
  return (
    <Swiper
      className='video relative max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl'
      modules={[Navigation]}
      navigation={true}
      slidesPerView={1}
    >
      {playlist_tryout.tps.map(({ youtubeId, title }) => (
        <SwiperSlide
          className='intrinsic-container intrinsic-container-4x3'
          key={youtubeId}
        >
          <YouTube
            id='ytb'
            videoId={youtubeId}
            title={title}
            opts={opts}
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
};
