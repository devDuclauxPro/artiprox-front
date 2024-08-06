import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "reducerToolkitStore/store/store";
import { CardTrouver } from "./cardTrouver";

export const ResultatArtisan = () => {
  const { resultatArtisans } = useSelector((state: RootState) => state.trouverArtisan);

  // Gestion des cas où aucun artisan n'est trouvé
  if (resultatArtisans === undefined) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Typography variant="h6" color="error">
          Une erreur est survenue lors de la récupération des artisans.
        </Typography>
      </Box>
    );
  }

  if (resultatArtisans.length === 0) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <Typography variant="h6">Aucun artisan trouvé pour votre recherche.</Typography>
      </Box>
    );
  }

  return (
    <>
      {resultatArtisans.map((artisan) => (
        <CardTrouver
          key={artisan?.id_artisan}
          id={artisan?.id_artisan}
          nom={artisan.nom}
          prenoms={artisan.prenoms}
          description={artisan.description}
          numero_telephone={artisan.numero_telephone}
          notation={artisan.notation}
        />
      ))}
    </>
  );
};
