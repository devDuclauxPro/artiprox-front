import { Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

interface FinalStepProps {
  title?: string;
  message?: string;
  quoteNumber?: string;
  linkText?: string;
  linkTo?: string;
}

export const FinalStep: FC<FinalStepProps> = ({
  title = "📦",
  message = "Nous vous remercions d'avoir demandé un devis !",
  quoteNumber = "#140396",
  linkText = "Trouver un autre artisan",
  linkTo = "/trouver-un-artisan"
}) => (
  <Stack spacing={2} useFlexGap py={5}>
    <Typography variant="h1">{title}</Typography>
    <Typography variant="h5">{message}</Typography>
    <Typography variant="body1" color="text.secondary">
      Votre numéro demande est le <strong>&nbsp;{quoteNumber}</strong>.
    </Typography>
    <Button
      component={Link}
      to={linkTo}
      variant="contained"
      sx={{ alignSelf: "start", width: { xs: "100%", sm: "auto" } }}
    >
      {linkText}
    </Button>
  </Stack>
);
