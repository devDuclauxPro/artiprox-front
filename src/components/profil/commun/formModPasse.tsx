import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Box, Button, Container, TextField, Typography } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import { FC } from "react";
import { colorBlue, colorVertNature } from "utils/color";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column"
}));

export const FormModPasse: FC = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: colorVertNature }}>
            <LockOutlinedIcon />
          </Avatar>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h1" textAlign="center" color={colorBlue}>
            Modifier mon mot de passe
          </Typography>
        </Grid>
      </Grid>
      <Box component="form" py={3}>
        <Grid container spacing={3}>
          <FormGrid item xs={12}>
            <FormLabel htmlFor="ancienPassword" required>
              Ancien mot de passe
            </FormLabel>
            <TextField
              id="ancienPassword"
              name="ancienPassword"
              type="password"
              placeholder="**********"
              autoComplete="current-password"
              required
              fullWidth
              variant="outlined"
            />
          </FormGrid>
          <FormGrid item xs={12}>
            <FormLabel htmlFor="nouveauPassword" required>
              Nouveau mot de passe
            </FormLabel>
            <TextField
              id="nouveauPassword"
              name="nouveauPassword"
              type="password"
              placeholder="**********"
              autoComplete="new-password"
              required
              fullWidth
              variant="outlined"
            />
          </FormGrid>
          <FormGrid item xs={12}>
            <Button variant="contained" color="success" disableRipple>
              Modifier
            </Button>
          </FormGrid>
        </Grid>
      </Box>
    </Container>
  );
};
