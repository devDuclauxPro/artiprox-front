import * as yup from "yup";

const passwordValidation = yup
  .string()
  .required("Le mot de passe est obligatoire")
  .min(8, "Le mot de passe doit contenir au minimum huit caractères")
  .matches(/[A-Z]/, "Le mot de passe doit contenir au moins une lettre majuscule")
  .matches(/[a-z]/, "Le mot de passe doit contenir au moins une lettre minuscule")
  .matches(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre")
  .matches(/[@$!%*?&]/, "Le mot de passe doit contenir au moins un caractère spécial (@$!%*?&)");

const nameValidation = yup
  .string()
  .required("Le nom est obligatoire")
  .min(3, "Le nom doit contenir au minimum trois caractères");

const prenomsValidation = yup
  .string()
  .required("Les prénoms sont obligatoires")
  .min(3, "Les prénoms doivent contenir au minimum trois caractères");

const descriptionValidation = yup
  .string()
  .required("La description est obligatoire")
  .min(3, "La description doit contenir au minimum trois caractères");

const adresseValidation = yup
  .string()
  .required("L'adresse est obligatoire")
  .min(3, "L'adresse doit contenir au minimum trois caractères");

const telephoneValidation = yup
  .string()
  .required("Le numéro de mobile est obligatoire")
  .matches(/^\d{10}$/, "Le numéro de mobile doit contenir exactement dix chiffres");

const emailValidation = yup.string().required("L'email est obligatoire").email("Format d'email invalide");

export const schemaInscription = yup.object().shape({
  nom: nameValidation,
  prenoms: prenomsValidation,
  profil: yup.string().required("Le choix du profil est obligatoire"),
  description: descriptionValidation,
  pays: yup.string().required("Le pays est obligatoire"),
  ville: yup.string().required("La ville est obligatoire"),
  adresse: adresseValidation,
  telephone: telephoneValidation,
  email: emailValidation,
  password: passwordValidation,
  confPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Les mots de passe doivent correspondre")
    .required("La confirmation du mot de passe est obligatoire")
});

export const schemaConnexion = yup.object().shape({
  email: emailValidation,
  password: passwordValidation
});

export const schemaOublierPass = yup.object().shape({
  email: emailValidation
});

export const schemaModifInfo = yup.object().shape({
  nom: nameValidation,
  prenoms: prenomsValidation,
  description: descriptionValidation,
  pays: yup.string().required("Le pays est obligatoire"),
  ville: yup.string().required("La ville est obligatoire"),
  adresse: adresseValidation,
  telephone: telephoneValidation
});

export const schemaModifPass = yup.object().shape({
  ancienPassword: passwordValidation,
  nouveauPassword: passwordValidation
});
