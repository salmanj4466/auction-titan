import React from "react";

const RegistrationDates = () => {
  return (
    <>
      <div className="registration-dates">
        <div className="container">
          <div className="content">
            <h2>
              Fecha de apertura de inscripción <br /> <span>2 de julio</span>
            </h2>
            <h2>
              Fecha de cierre de inscripción
              <br /> <span>14 de julio</span>
            </h2>
            <h1>
              Fecha del próximo evento <br />
              <span>30 de julio</span>
            </h1>
            <div className="btns">
              <button className="left-btn">Cartas Banneadas</button>
              <button className="right-btn">INSCRIBETE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationDates;
