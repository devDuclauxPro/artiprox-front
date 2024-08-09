import { Box } from "@mui/material";
import { FC } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TImageSwiperProps } from "types/types";
import { listBreakPoint } from "utils/imageBreakPoint";

// Composant ImageSwiper qui affiche un carrousel d'images avec Swiper
export const ImageSwiper: FC<TImageSwiperProps> = ({ listImage, artisanImage = false }) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={10} // Espacement entre les diapositives
      loop={true}
      autoplay={{ delay: 5000 }} // Défilement automatique avec délai de 5s
      navigation={true}
      pagination={{ clickable: true }} // Pagination cliquable pour améliorer la navigation
      breakpoints={listBreakPoint} // breakpoint
    >
      {listImage?.map((image, id) => (
        <SwiperSlide key={id}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              style={{ objectFit: "contain", width: "100%", height: "auto" }}
              src={
                artisanImage ? `http://127.0.0.1:8000/images/articles/${image.images_article}` : image.images_article
              }
              alt={`Image ${id + 1}`}
              loading="lazy"
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
