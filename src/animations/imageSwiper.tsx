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
      spaceBetween={10} // Espacement entre les diapositives
      loop={true}
      autoplay={{ delay: 5000 }} // Défilement automatique avec délai de 5s
      navigation={true}
      pagination={{ clickable: true }} // Pagination cliquable pour améliorer la navigation
      breakpoints={listBreakPoint} // Points de rupture pour la réactivité
    >
      {listImage.map((image, id) => (
        <SwiperSlide key={id}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              style={{ objectFit: "contain", width: "100%", height: "auto" }} // Largeur dynamique pour une meilleure adaptabilité
              src={image.name}
              alt={`Image ${id + 1}`} // Texte alternatif amélioré
              loading="lazy"
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
