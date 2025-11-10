import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import gite from "../data/gite";

export default function ViaggioDettagli() {
  const { id } = useParams();
  const viaggio = gite[Number(id)];

  const [query, setQuery] = useState("");
  const [filteredPartecipanti, setFilteredPartecipanti] = useState(
    viaggio?.partecipanti || []
  );

  if (!viaggio) {
    return (
      <div className="container py-4">
        <div className="alert alert-danger d-flex align-items-center" role="alert">
          <div>Viaggio non trovato.</div>
        </div>
        <Link className="btn btn-secondary" to="/">Torna alla Home</Link>
      </div>
    );
  }

  const accId = `accordionViaggiatori-${id}`;

  // Normalizzazione semplice per ricerca case-insensitive
  const normalize = (s) => (s || "").toString().toLowerCase().trim();

  // Filtraggio con useEffect 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const q = normalize(query);
    if (!q) {
      setFilteredPartecipanti(viaggio.partecipanti || []);
      return;
    }

    const next = (viaggio.partecipanti || []).filter((p) => {
      const haystack = [
        p.nome,
        p.cognome,
        p.CF,
        p.telefono
      ].map(normalize).join(" ");
      return haystack.includes(q);
    });

    setFilteredPartecipanti(next);
  }, [query, viaggio.partecipanti]);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">{viaggio.nome}</h2>
        <Link className="btn btn-outline-secondary" to="/">← Home</Link>
      </div>

      <div className="rounded-2xl shadow-soft p-3 bg-gradient-chip mb-3">
        <span className="me-3"><strong>Città:</strong> {viaggio.città}</span>
        <span className="me-3"><strong>Periodo:</strong> {viaggio.dataInizio} – {viaggio.dataFine}</span>
        <span>
          <strong>Viaggiatori:</strong>{" "}
          {filteredPartecipanti.length}{" "}
          <small className="text-muted">/ {viaggio.partecipanti.length}</small>
        </span>
      </div>

      
      <div className="mb-3">
        <input
          type="search"
          className="form-control"
          placeholder="Cerca partecipanti per nome, cognome, CF o telefono..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      
      {filteredPartecipanti.length === 0 ? (
        <div className="alert alert-warning" role="alert">
          Nessun partecipante trovato.
        </div>
      ) : null}

      <div className="accordion" id={accId}>
        {filteredPartecipanti.map((p, i) => {
          const itemId = `${accId}-item-${i}`;
          const headingId = `${itemId}-heading`;
          const collapseId = `${itemId}-collapse`;

          return (
            <div className="accordion-item" key={p.CF || itemId}>
              <h2 className="accordion-header" id={headingId}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${collapseId}`}
                  aria-expanded="false"
                  aria-controls={collapseId}
                >
                  {p.nome} {p.cognome}
                </button>
              </h2>
              <div
                id={collapseId}
                className="accordion-collapse collapse"
                aria-labelledby={headingId}
                data-bs-parent={`#${accId}`}
              >
                <div className="accordion-body">
                  <ul className="mb-0">
                    <li><strong>Nome:</strong> {p.nome}</li>
                    <li><strong>Cognome:</strong> {p.cognome}</li>
                    <li><strong>CF:</strong> {p.CF}</li>
                    <li><strong>Telefono:</strong> {p.telefono}</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}