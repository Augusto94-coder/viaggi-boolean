import { useState } from "react";

export default function FormAggiuntaViaggi() {
    const [formData, setFormData] = useState({
        nome: "",
        città: "",
        dataInizio: "",
        dataFine: "",
        partecipanti: [],
    });

    const [gite, setGite] = useState([]);

    function handleFormData(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    // solo prototipo perché l'array gite.js quando lo importi è read only
    function handleSubmit(e) {
        e.preventDefault();
        setGite((prev) => [...prev, formData]);
        setFormData({
            nome: "",
            città: "",
            dataInizio: "",
            dataFine: "",
            partecipanti: [],
        });
        console.log(gite);
        alert("Viaggio aggiunto con successo!");
    }

    return (
        <div className="my-4">
            <div className="accordion" id="accordionViaggi">
                <div className="accordion-item">
                    <h2 className="accordion-header bg-gradient-chip" id="headingForm">
                        <button
                            className="accordion-button "
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseForm"
                            aria-expanded="true"
                            aria-controls="collapseForm"
                        >
                            Aggiungi un nuovo viaggio
                        </button>
                    </h2>

                    <div
                        id="collapseForm"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingForm"
                        data-bs-parent="#accordionViaggi"
                    >
                        <div className="accordion-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Inserisci il nome del viaggio</label>
                                    <textarea
                                        className="form-control"
                                        name="nome"
                                        value={formData.nome}
                                        onChange={handleFormData}
                                        rows="1"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Inserisci la destinazione</label>
                                    <textarea
                                        className="form-control"
                                        name="città"
                                        value={formData.città}
                                        onChange={handleFormData}
                                        rows="1"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Inserisci la data di inizio</label>
                                    <input
                                        className="form-control"
                                        type="date"
                                        name="dataInizio"
                                        value={formData.dataInizio}
                                        onChange={handleFormData}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Inserisci la data di fine</label>
                                    <input
                                        className="form-control"
                                        type="date"
                                        name="dataFine"
                                        value={formData.dataFine}
                                        onChange={handleFormData}
                                    />
                                </div>

                                <button className="btn btn-primary w-100" type="submit">
                                    Inserisci
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}