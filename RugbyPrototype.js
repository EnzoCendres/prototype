import { useState } from "react";

const categories = ["National", "Fédéral", "Régional"];
const niveaux = {
  National: ["National 1", "National 2"],
  Fédéral: ["Fédéral 1", "Fédéral 2", "Fédéral 3"],
  Régional: ["Régional 1", "Régional 2", "Régional 3"],
};
const poules = ["Poule 1", "Poule 2", "Poule 3", "Poule 4"];
const clubs = ["Club A", "Club B", "Club C", "Club D"];
const matchs = [
  { equipe1: "Équipe A", equipe2: "Équipe B" },
  { equipe1: "Équipe C", equipe2: "Équipe D" },
  { equipe1: "Équipe E", equipe2: "Équipe F" },
];

export default function RugbyPrototype() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedNiveau, setSelectedNiveau] = useState(null);
  const [selectedPoule, setSelectedPoule] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h1>Prototype Rugby</h1>
      {!selectedCategory ? (
        <div>
          <h2>Sélectionne une catégorie</h2>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setSelectedCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>
      ) : !selectedNiveau ? (
        <div>
          <h2>Sélectionne un niveau</h2>
          {niveaux[selectedCategory].map((niv) => (
            <button key={niv} onClick={() => setSelectedNiveau(niv)}>
              {niv}
            </button>
          ))}
        </div>
      ) : !selectedPoule ? (
        <div>
          <h2>Sélectionne une poule</h2>
          {poules.map((poule) => (
            <button key={poule} onClick={() => setSelectedPoule(poule)}>
              {poule}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>Matchs de {selectedPoule}</h2>
          {matchs.map((match, index) => (
            <div key={index}>
              {match.equipe1} vs {match.equipe2}
            </div>
          ))}
        </div>
      )}
      <div>
        <h2>Recherche de clubs</h2>
        <input
          type="text"
          placeholder="Rechercher un club..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          {clubs.filter((club) => club.toLowerCase().includes(searchTerm.toLowerCase())).map((club, index) => (
            <p key={index}>{club}</p>
          ))}
        </div>
      </div>
    </div>
  );
}