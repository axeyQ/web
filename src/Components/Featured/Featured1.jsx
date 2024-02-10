import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import { useRef } from "react";
import FeaturedCards from "../FeaturedCards";

const Featured1 = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className='featured1-div'>
      <h2>Our Featured Items</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        autoplay={{
          delay: 80000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className='mySwiper'
      >
        <SwiperSlide>
          <FeaturedCards
            category={"Biryani"}
            item1='Murg dum Biryani'
            item2='Ghosht Dum Biryani'
            item3='Paneer-e-sabz Biryani'
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCards
            category={"Starters"}
            item1='Murg dum Biryani'
            item2='Ghosht Dum Biryani'
            item3='Paneer-e-sabz Biryani'
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCards
            category={"Specials"}
            item1='Murg dum Biryani'
            item2='Ghosht Dum Biryani'
            item3='Paneer-e-sabz Biryani'
          />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCards
            category={"Beverages"}
            item1='Murg dum Biryani'
            item2='Ghosht Dum Biryani'
            item3='Paneer-e-sabz Biryani'
          />
        </SwiperSlide>

        <div className='autoplay-progress' slot='container-end'>
          <svg viewBox='0 0 48 48' ref={progressCircle}>
            <circle cx='24' cy='24' r='20'></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Featured1;
