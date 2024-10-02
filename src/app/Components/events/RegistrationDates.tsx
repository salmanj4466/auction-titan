import Link from "next/link";
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
            <h2 className="mt-3 mt-lg-0">
              Fecha de cierre de inscripción
              <br /> <span>14 de julio</span>
            </h2>
            <h1>
              Fecha del próximo evento <br />
              <span>30 de julio</span>
            </h1>
          </div>
          <div className="btns">
            <Link href='/banned-cards'>
              <button className="left-btn">Cartas Banneadas</button>
            </Link>
            <Link href='/registration-page'>
              <button className="right-btn">INSCRIBETE</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationDates;
