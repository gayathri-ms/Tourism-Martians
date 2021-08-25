import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

const Swipe= (names , e ,setA,a) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
  {
      [1,2,3,4,5].map((e)=>(
        <SwiperSlide>Slide 1</SwiperSlide>
      )

      )
  }
      
      ...
    </Swiper>
  );
};

export default Swipe