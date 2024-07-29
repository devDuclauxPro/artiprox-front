import { Box, Container, Typography } from "@mui/material";
import { zoomInOutGenericOne } from "animations/animation";
import { BtnGeneric } from "components/generic/btnGeneric";
import { FC } from "react";
import { colorGris } from "utils/color";
import { listImage } from "utils/listImage";
import { ImageSwiper } from "../../animations/imageSwiper";

// Styles extraits pour réutilisation
const sectionStyle = {
  backgroundColor: colorGris,
  paddingY: 4
};

const titleStyle = {
  textAlign: "center" as const,
  marginBottom: 2
};

const descriptionStyle = {
  textAlign: "center" as const,
  marginBottom: 4
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 4
};

// Composant pour afficher une section dédiée à la présentation des artisans
export const MilieuNosArtisan: FC = () => {
  return (
    <Box sx={sectionStyle}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" sx={titleStyle} gutterBottom>
          Nos artisans
        </Typography>
        <Typography variant="body1" component="p" sx={descriptionStyle}>
          Découvrez une sélection d'artisans de votre région.
        </Typography>
        <ImageSwiper listImage={listImage} />
        <Box sx={buttonContainerStyle}>
          <BtnGeneric
            btnText="Trouver un artisan"
            btnLink="trouver-un-artisan"
            btnZooInOutCard={zoomInOutGenericOne}
            btnVariant="outlined"
          />
        </Box>
      </Container>
    </Box>
  );
};
