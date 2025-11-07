import { Link } from "react-router-dom";

export default function CardViaggi({ id, nome, città, dataInizio, dataFine }) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-2">{nome}</h5>
          <p className="card-text mb-1"><strong>Città:</strong> {città}</p>
          <p className="card-text mb-1"><strong>Inizio:</strong> {dataInizio}</p>
          <p className="card-text"><strong>Fine:</strong> {dataFine}</p>
          <Link to={`/viaggio/${id}`} className="btn btn-primary w-100">
            Apri dettagli
          </Link>
        </div>
      </div>
    </div>
  );
}