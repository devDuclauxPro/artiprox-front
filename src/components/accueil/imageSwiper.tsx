import { Box } from "@mui/material";
import { FC } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TImageSwiperProps } from "types/types";
import { listBreakPoint } from "utils/imageBreakPoint";

// Composant ImageSwiper qui affiche un carrousel d'images avec Swiper
export const ImageSwiper: FC<TImageSwiperProps> = ({ listImage }) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]} // Modules Swiper utilisés
      spaceBetween={2}
      loop={true}
      autoplay={{ delay: 5000 }} // Défilement automatique avec délai de 5s
      navigation={true}
      breakpoints={listBreakPoint} // Points de rupture pour la réactivité
    >
      {listImage.map((list, id) => (
        <SwiperSlide key={id}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              style={{ objectFit: "contain", width: 250, height: 320 }}
              src={list.name}
              alt={`Images ${id}`}
              loading="lazy"
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
