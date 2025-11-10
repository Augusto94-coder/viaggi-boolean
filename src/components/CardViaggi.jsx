import { Link } from "react-router-dom";

export default function CardViaggi({ id, gita }) {
  const { nome, città, dataInizio, dataFine } = gita;

  return (
    <div className="col">
      <div className="card h-100 d-flex">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title mb-3">{nome}</h5>

          <div className="d-flex flex-wrap gap-2 mb-3">
            <span className="meta-pill"><span className="dot"></span>Città: {città}</span>
            <span className="meta-pill"><span className="dot"></span>Inizio: {dataInizio}</span>
            <span className="meta-pill"><span className="dot"></span>Fine: {dataFine}</span>
          </div>

          <Link to={`/viaggio/${id}`} className="btn btn-primary w-100 mt-auto">
            Apri dettagli
          </Link>
        </div>
      </div>
    </div>
  );
}