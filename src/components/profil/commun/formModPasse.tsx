import { yupResolver } from "@hookform/resolvers/yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Box, Button, Container, FormControl, TextField, Typography } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { colorBlue, colorVertNature } from "utils/color";
import { schemaModifPass } from "utils/yupValidation";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column"
}));

type Inputs = {
  ancienPassword: string;
  nouveauPassword: string;
};

export const FormModPasse: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schemaModifPass)
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    console.log(errors);
  };

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
      <Box component="form" onSubmit={handleSubmit(onSubmit)} py={3}>
        <Grid container spacing={3}>
          <FormGrid item xs={12}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="ancienPassword">Ancien mot de passe</FormLabel>
              <TextField
                {...register("ancienPassword")}
                id="ancienPassword"
                name="ancienPassword"
                type="password"
                placeholder="**********"
                autoComplete="current-password"
                required
                error={!!errors.ancienPassword}
                helperText={errors.ancienPassword?.message}
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12}>
            <FormControl fullWidth required>
              <FormLabel htmlFor="nouveauPassword">Nouveau mot de passe</FormLabel>
              <TextField
                {...register("nouveauPassword")}
                id="nouveauPassword"
                name="nouveauPassword"
                type="password"
                placeholder="**********"
                autoComplete="new-password"
                required
                error={!!errors.nouveauPassword}
                helperText={errors.nouveauPassword?.message}
              />
            </FormControl>
          </FormGrid>
          <FormGrid item xs={12}>
            <Button type="submit" variant="contained" color="success" disableRipple>
              Modifier
            </Button>
          </FormGrid>
        </Grid>
      </Box>
    </Container>
  );
};
