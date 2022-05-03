import React from "react";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
  EffectFade,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/Home.module.css";
import Slider from "./Slider";
SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Navigation, EffectFade]);
function Testimonial() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center">
      <div className="w-full flex items-center justify-center flex-col">
        <div className="flex flex-col items-center justify-center space-y-3 mb-3">
          <h2 className="text-xl font-sans font-medium ">Testimonial</h2>
          <span className="md:text-3xl text-lg font-bold text-white">
            HAPPY CLIENTS
          </span>
        </div>
        <div className="md:w-[70%] w-[80%] md:h-[50vh] h-[70vh] bg-slate-300">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            effect="fade"
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, EffectFade]}
            className={styles.mySwiper}
            // loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
          >
            <SwiperSlide className={styles.swiperslider}>
              <Slider
                testimonial=" I am glad to inform you that I received an email from a Talent
                  Acquisition Specialist – Global Talent Acquisition HUB, in
                  respect of my application with a Bank in Dublin for a
                  interview tomorrow. I want to share this piece of testimony
                  because if not for Bethel, I would not have received any
                  invitation for an interview. Please wish me well to be another
                  success story, for the great service BETHEL is providing."
                name="Seyi Akinleye"
                country="Dublin"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperslider}>
              <Slider
                testimonial=" I am very happy with the services rendered by
                Bethel Digitech. Helping with our IT solutions in our company. They are timely, generous, very patient and we get the best quality of service. I will recommend Bethel Digitech any day, anytime, anywhere. Thank you.
      "
                name="Paul Jason"
                country="South Africa"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperslider}>
              <Slider
                testimonial="I have currently joined a new team here on Work Placement Training at Bethel Digitech, and I am loving it. Within a short space, I have discovered its actually a thin line between failure and success. Hands on training is the key in this modern days to get to where you want to be in life in your career. I have been given hope like never before ."
                name="Clara Rogers"
                country="London"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperslider}>
              <Slider
                testimonial="Before I joined Bethel, one thing I had in mind was career growth and progression. This is one big support the team has been giving me from start. 
                I needed a job and career in the IT or Software industry, but I was never lucky for many years, neither was I invited for any interview until Bethel gave me professional skills. 
                I am currently at the last stage of getting hired."
                name="Brenda Falconer"
                country="London"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperslider}>
              <Slider
                testimonial=" I have a little experience in IT but just as a beginner. I enrolled with Bethel Digitech and to my greatest suprise I got a job before the end of my first month on Work Placement. You guys are a genius."
                name="Enoch"
                country="Nigeria"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
