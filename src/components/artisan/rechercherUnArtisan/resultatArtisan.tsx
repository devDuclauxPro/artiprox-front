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
          id={artisan.id}
          titre={`${artisan.nom} ${artisan.prenoms}`}
          description={artisan.description as string}
          numero={artisan.numero_telephone}
          notation={artisan.notation}
        />
      ))}
    </>
  );
};
