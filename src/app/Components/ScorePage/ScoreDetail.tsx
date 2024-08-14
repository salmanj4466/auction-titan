import React from "react";

const ScoreDetail = () => {
  const data = [
    {
      description: "Morbi ultricies mi vel consectetur elementum.",
      points: 200,
    },
    {
      description: "Aenean commodo, risus eget blandit vehicula.",
      points: 150,
    },
    {
      description:
        "ligula massa fermentum nisl, sed sagittis sapien velit eu eros.",
      points: 150,
    },
    {
      description:
        "Duis eu ante et lorem hendrerit condimentum vitae id magna.",
      points: 150,
    },
    {
      description:
        "Aenean volutpat, nulla non rhoncus elementum, ligula risu s ornare neque.",
      points: 120,
    },
    {
      description:
        "Reget maximus massa lacus quis nibh. Etiam tincidunt massa mauri.",
      points: 120,
    },
    {
      description: "Aenean commodo, risus eget blandit vehicula.",
      points: 110,
    },
    {
      description:
        "ligula massa fermentum nisl, sed sagittis sapien velit eu eros.",
      points: 110,
    },
    {
      description:
        "Duis eu ante et lorem hendrerit condimentum vitae id magna.",
      points: 100,
    },
    {
      description:
        "Aenean volutpat, nulla non rhoncus elementum, ligula risu s ornare neque.",
      points: 100,
    },
    {
      description:
        "Reget maximus massa lacus quis nibh. Etiam tincidunt massa mauri.",
      points: 80,
    },
    { description: "Aenean commodo, risus eget blandit vehicula.", points: 50 },
    {
      description:
        "ligula massa fermentum nisl, sed sagittis sapien velit eu eros.",
      points: 50,
    },
    {
      description:
        "Duis eu ante et lorem hendrerit condimentum vitae id magna.",
      points: 20,
    },
  ];

  return (
    <>
      <div className="score-page">
        <div className="container">
          <h1> Puntos a ganar </h1>
          <button className="btn-lg-warning">
            Visita nuestras reglas generales
          </button>

          <table className="custom-table">
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Puntos</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.description}</td>
                  <td>{item.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ScoreDetail;
