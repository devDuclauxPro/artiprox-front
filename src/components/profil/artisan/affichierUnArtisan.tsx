import { AfficherProfilArtisan } from "components/artisan/afficherUnArtisan/afficherProfilArtisan";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "reducerToolkitStore/store/store";

export const AffichierUnArtisan: FC = () => {
  const { user } = useSelector((state: RootState) => state.user);
  return (
    <AfficherProfilArtisan
      nom={user?.nom as string}
      prenoms={user?.prenoms as string}
      description={`Consultez les informations détaillées de ${user?.nom} ${user?.prenoms}`}
    />
  );
};
