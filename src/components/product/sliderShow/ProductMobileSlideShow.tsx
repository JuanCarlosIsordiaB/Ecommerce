"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./stylesSlide.css";
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductMobileSlideShow = ({ images, title, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
      
        style={{ width: "100vw", height: "500px" , "--swiper-pagination-color": "#fff", "--swiper-navigation-color": "#fff", } as React.CSSProperties}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 2500 }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              width={600}
              height={500}
              src={`/products/${image}`}
              alt={title}
              className=" object-fill"
              key={image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductMobileSlideShow;
