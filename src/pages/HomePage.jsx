import gite from "../data/gite";
import CardViaggi from "../components/CardViaggi";

export default function HomePage() {
  return (
    <div className="container py-4">
      <h1 className="mb-4">Gite organizzate</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {gite.map((g, idx) => (
          <CardViaggi
            key={idx}
            id={idx}
            nome={g.nome}
            città={g.città}
            dataInizio={g.dataInizio}
            dataFine={g.dataFine}
          />
        ))}
      </div>
    </div>
  );
}