import { CardTrouver } from "./cardTrouver";
import { DescriptionArtisan } from "./descriptionArtisan";

const listArtisans = [
  {
    id: 1,
    titre: "Nex artisan",
    description:
      "Autres activités : Rénovation plomberie complète ou partielle, Cloisons, Autres activités : Rénovation plomberie complète ou partielle, Cloisons, Autres activités",
    numero: "+225070700707",
    notation: 4
  },
  {
    id: 2,
    titre: "Nex artisan 2",
    description:
      "Autres activités : Rénovation plomberie complète ou partielle, Cloisons, Autres activités : Rénovation plomberie complète ou partielle, Cloisons, Autres activités",
    numero: "+22550505005",
    notation: 1
  }
];
export const ResultatArtisan = () => {
  return (
    <>
      <DescriptionArtisan />
      {listArtisans.map((artisan) => (
        <CardTrouver
          key={artisan.id}
          titre={artisan.titre}
          description={artisan.description}
          numero={artisan.numero}
          notation={artisan.notation}
        />
      ))}
    </>
  );
};
