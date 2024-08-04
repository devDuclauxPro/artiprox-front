import * as yup from "yup";

const passwordValidation = yup
  .string()
  .required("Le mot de passe est obligatoire")
  .min(6, "Le mot de passe doit contenir au minimum six caractères");
// .matches(/[A-Z]/, "Le mot de passe doit contenir au moins une lettre majuscule")
// .matches(/[a-z]/, "Le mot de passe doit contenir au moins une lettre minuscule")
// .matches(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre")
// .matches(/[@$!%*?&]/, "Le mot de passe doit contenir au moins un caractère spécial (@$!%*?&)");

const nameValidation = yup
  .string()
  .required("Le nom est obligatoire")
  .min(3, "Le nom doit contenir au minimum trois caractères");

const prenomsValidation = yup
  .string()
  .required("Les prénoms sont obligatoires")
  .min(3, "Les prénoms doivent contenir au minimum trois caractères");

const adresseValidation = yup
  .string()
  .required("L'adresse est obligatoire")
  .min(3, "L'adresse doit contenir au minimum trois caractères");

const telephoneValidation = yup
  .string()
  .required("Le numéro de mobile est obligatoire")
  .matches(/^\d{10}$/, "Le numéro de mobile doit contenir exactement dix chiffres");

const emailValidation = yup.string().required("L'email est obligatoire").email("Format d'email invalide");

export const imageValidation = yup.object().shape({
  nom_article: yup.string().optional(),
  images_article: yup
    .mixed<FileList>() // Changed to FileList
    .required("L'image est obligatoire")
    .test("fileType", "Le fichier doit être une image", (value) => {
      if (!value || value.length === 0) return false;
      const file = value[0];
      return ["image/jpeg", "image/jpg", "image/png", "image/gif"].includes(file.type);
    })
    .test("fileSize", "La taille du fichier doit être inférieure à 2 Mo", (value) => {
      if (!value || value.length === 0) return false;
      const file = value[0];
      return file.size <= 2000000; // 2 Mo
    }),
  prix_article: yup.string().optional(),
  nom_categorie: yup.string().optional()
});

export const schemaInscription = yup.object().shape({
  nom: nameValidation,
  prenoms: prenomsValidation,
  role_id: yup.string().required("Le choix du profil est obligatoire"),
  sexe: yup.string().required("Le choix du du sexe est obligatoire"),
  metier: yup.string().optional(),
  description: yup.string().optional(),
  pays: yup.string().required("Le pays est obligatoire"),
  ville: yup.string().required("La ville est obligatoire"),
  adresse: adresseValidation,
  numero_telephone: telephoneValidation,
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
  sexe: yup.string().required("Le sexe est obligatoire"),
  metier: yup.string().optional(),
  description: yup.string().optional(),
  pays: yup.string().required("Le pays est obligatoire"),
  ville: yup.string().required("La ville est obligatoire"),
  adresse: adresseValidation,
  numero_telephone: telephoneValidation
});

export const schemaModifPass = yup.object().shape({
  ancienPassword: passwordValidation,
  nouveauPassword: passwordValidation
});

export const categorieValidation = yup.object().shape({
  nom_categorie: yup.string().required("Le nom de la categorie est obligatoire")
});
export const roleValidation = yup.object().shape({
  nom_role: yup.string().required("Le nom du rôle est obligatoire")
});
