import { useParams, Link } from "react-router-dom";
import gite from "../data/gite";

export default function ViaggioDettagli() {
  const { id } = useParams();
  const viaggio = gite[Number(id)];

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

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">{viaggio.nome}</h2>
        <Link className="btn btn-outline-secondary" to="/">← Home</Link>
      </div>

      <p className="text-muted mb-4">
        <strong>Città:</strong> {viaggio.città} &nbsp;|&nbsp; 
        <strong>Periodo:</strong> {viaggio.dataInizio} – {viaggio.dataFine}
      </p>

      <div className="accordion" id={accId}>
        {viaggio.partecipanti?.map((p, i) => {
          const itemId = `${accId}-item-${i}`;
          const headingId = `${itemId}-heading`;
          const collapseId = `${itemId}-collapse`;

          return (
            <div className="accordion-item" key={i}>
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