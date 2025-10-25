import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "./styles.css";

// import required modules for a hero-style slider
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

const slidesPromise = fetch("/slideData.json").then((res) => res.json());

const Slider = () => {
  const slides = use(slidesPromise);

  return (
    <section className="w-full overflow-hidden">
      <Swiper
        effect="fade"
        loop
        spaceBetween={0}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="w-full h-full hero-swiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full min-h-[55vh] sm:min-h-[60vh] md:min-h-[80vh] lg:min-h-[85vh] overflow-hidden">
              <img
                src={slide.backgroundImage}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
              <div className="relative z-10 h-full w-full flex items-center justify-center text-center px-4 sm:px-6">
                <div className="text-neutral-content space-y-4 sm:space-y-5 md:space-y-7 max-w-3xl text-center md:mt-30 mt-20">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl text-primary">
                    {slide.title}
                  </h1>
                  <p className="mx-auto text-sm sm:text-base md:text-lg opacity-95 leading-relaxed">
                    {slide.description}
                  </p>
                  <a
                    href="/services"
                    className="btn btn-accent rounded-full shadow-lg shadow-black/20 hover:shadow-black/40 transition btn-md md:btn-lg"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
