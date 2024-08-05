import { useSelector } from "react-redux";
import { RootState } from "reducerToolkitStore/store/store";
import { CardTrouver } from "./cardTrouver";

export const ResultatArtisan = () => {
  const { resultatArtisans } = useSelector((state: RootState) => state.trouverArtisan);

  return (
    <>
      {resultatArtisans?.map((artisan) => (
        <CardTrouver
          key={artisan.id}
          id={artisan?.id}
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
