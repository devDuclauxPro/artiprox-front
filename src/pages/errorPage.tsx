import { Box, Container, Typography } from "@mui/material";
import error404 from "images/errors/404.png";
import { Layout } from "layouts/layout";
import { FC } from "react";
import { colorBlue } from "utils/color";

// Composant ErrorPage qui rend la page ErrorPage avec tous les sections
export const ErrorPage: FC = () => {
  return (
    <Layout>
      <Container maxWidth="md">
        <Box mt={10} mb={8} display="flex" justifyContent="center" alignContent="center">
          <Box
            component="img"
            sx={{
              width: { xs: 200, sm: 250, md: 350 },
              display: "block",
              cursor: "pointer",
              margin: "0 auto"
            }}
            alt="image d'erreur"
            src={error404}
          />
        </Box>
        <Box>
          <Typography
            my={3}
            variant="h4"
            component="p"
            textAlign="center"
            color={colorBlue}
            sx={{
              fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" }
            }}
          >
            Oops... La page n'a pas pu être trouvée !
          </Typography>
        </Box>
        <Box>
          <Typography
            my={3}
            variant="h6"
            component="p"
            textAlign="center"
            fontWeight={300}
            sx={{
              fontSize: { xs: ".8rem", sm: "1.3rem", md: "1.8rem" }
            }}
          >
            La page que vous recherchez n'est pas disponible, veuillez vérifier l'URL vers laquelle vous vous dirigez.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
};
