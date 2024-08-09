import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducerToolkitStore/store/store";
import { InfoProfil } from "../infoProfil";

export const InfoProfilCommun: FC = () => {
  const { user } = useSelector((state: RootState) => state.user);

  // Liste des champs à afficher
  const userInfo = [
    { label: "Le métier n'a pas encore été renseigné", value: user?.metier },
    { label: "Le sexe n'a pas encore été renseigné", value: user?.sexe },
    { label: "L'email n'a pas encore été renseigné", value: user?.email },
    { label: "Le numéro de téléphone n'a pas encore été renseigné", value: user?.numero_telephone },
    { label: "Le pays n'a pas encore été renseigné", value: user?.pays },
    { label: "La ville n'a pas encore été renseignée", value: user?.ville },
    { label: "L'adresse n'a pas encore été renseignée", value: user?.adresse }
  ];

  return <InfoProfil infoList={userInfo} />;
};
