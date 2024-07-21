import { Box, Grid, Typography } from "@mui/material";
import iconeSavoirFaire from "images/home/icone-cle.png";
import iconeProfessionnalisme from "images/home/icone-professionnalisme-min.png";
import iconeRelation from "images/home/icone-relation-client-min.png";
import { colorBlue, colorOrange } from "utils/color";

type TInfoItem = { src: string; alt: string; title: string; description: string };

// Composant pour afficher un élément d'information avec une icône, un titre et une description
const InfoItem = ({ src, alt, title, description }: TInfoItem) => (
  <Grid item xs={12} md={4}>
    {/* Affichage de l'icône avec un centrage automatique */}
    <Box component="img" sx={{ height: 30, width: 30, display: "block", margin: "0 auto" }} alt={alt} src={src} />
    <Typography
      variant="subtitle2"
      component="p"
      textAlign="center"
      sx={{ mt: 1 }} // Marge supérieure pour espacer du contenu au-dessus
    >
      {title}
    </Typography>
    <Typography
      variant="body2"
      component="p"
      textAlign="center"
      sx={{ mt: 0.5 }} // Marge supérieure pour espacer de la description
    >
      {description}
    </Typography>
  </Grid>
);

// Composant principal pour afficher la section "Pourquoi faire appel à nous ?"
export const MilieuGauchePourquoi = () => {
  return (
    <>
      <Box>
        {/* Titre principal avec un sous-titre coloré */}
        <Typography
          variant="h5"
          component="h1"
          sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          textAlign={{ xs: "center", md: "justify" }}
          color={colorBlue}
        >
          ArtiProx :
          <Typography
            variant="h5"
            component="span"
            color={colorOrange}
            sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Pourquoi faire appel à nous ?
          </Typography>
        </Typography>
        {/* Paragraphe d'introduction */}
        <Typography variant="body1" component="p" pt={2} textAlign="justify">
          Nous savons qu'il n'est pas toujours simple de trouver le bon artisan. Partant de ce constat, nous avons créé
          en 2024 un service de mise en relation. Depuis, nous l'améliorons sans cesse grâce à vos retours. Déjà
          porteurs de plus de 100 projets, notre objectif se résume simplement : vous assurer la bonne rencontre.
        </Typography>
        {/* Paragraphe d'accompagnement */}
        <Typography variant="body1" component="p" py={2} textAlign="justify">
          Pour le permettre, nous offrons un accompagnement de tous les instants et leur assurons une meilleure
          visibilité.
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" py={5}>
        <Box width="50vw">
          <Grid container spacing={2}>
            <InfoItem
              src={iconeProfessionnalisme}
              alt="Image professionnalisme"
              title="Professionnalisme"
              description="Tous nos artisans sont mieux organisés depuis plus de deux ans et nous vérifions leur stabilité ainsi que leur bonne foi."
            />
            <InfoItem
              src={iconeSavoirFaire}
              alt="Image savoir faire"
              title="Savoir Faire"
              description="Nos partenaires doivent mettre en avant leur travail. Vous avez ainsi une assurance supplémentaire avant de démarrer vos travaux."
            />
            <InfoItem
              src={iconeRelation}
              alt="Image relation client"
              title="Relation client"
              description="Un artisan d'ArtiProx n'a jamais reçu une plainte d'un particulier et vous garantit un délai de réponse sous 48h."
            />
          </Grid>
        </Box>
      </Box>
    </>
  );
};
