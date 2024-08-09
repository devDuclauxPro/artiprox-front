import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducerToolkitStore/store/store";
import { InfoProfil } from "../infoProfil";

export const InfoProfilCommunArtisan: FC = () => {
  const { resultatUnSeulArtisans } = useSelector((state: RootState) => state.trouverArtisan);

  // Liste des informations à afficher
  const artisanInfo = [
    { label: "Le metier n'a pas encore été renseigné", value: resultatUnSeulArtisans?.metier },
    { label: "Le sexe n'a pas encore été renseigné", value: resultatUnSeulArtisans?.user?.sexe },
    { label: "L'email n'a pas encore été renseigné", value: resultatUnSeulArtisans?.user?.email },
    { label: "Le n° tel n'a pas encore été renseigné", value: resultatUnSeulArtisans?.user?.numero_telephone },
    { label: "Le pays n'a pas encore été renseigné", value: resultatUnSeulArtisans?.user?.pays },
    { label: "La ville n'a pas encore été renseignée", value: resultatUnSeulArtisans?.user?.ville },
    { label: "L'adresse n'a pas encore été renseignée", value: resultatUnSeulArtisans?.user?.adresse }
  ];

  return <InfoProfil infoList={artisanInfo} />;
};
