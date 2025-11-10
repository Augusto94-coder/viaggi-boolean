import gite from "../data/gite";
import CardViaggi from "../components/CardViaggi";
import FormAggiuntaViaggi from "../components/FormAggiuntaViaggi";

export default function HomePage() {
  return (
    <div className="container py-4">
      <h1 className="mb-2">Gite organizzate</h1>
      <p className="text-muted mt-4 mb-4 bg-gradient-chip rounded-2xl px-3 py-2 d-inline-block">
        Scopri le prossime partenze e i dettagli dei partecipanti
      </p>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {gite.map((gita, index) => (
          <CardViaggi
            key={index}
            id={index}
            gita={gita}
          />
        ))}
      </div>
        <FormAggiuntaViaggi />

    </div>
  );
}