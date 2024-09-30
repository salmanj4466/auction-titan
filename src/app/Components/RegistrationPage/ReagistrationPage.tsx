"use client";

import React from "react";
import { Select } from "antd";
import Link from "next/link";
import { LuUpload } from "react-icons/lu";

const ReagistrationPage = () => {
  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <div className="registration">
        <div className="container">
          <h1> inscripción </h1>

          <div className="full-name-address-fields">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre completo"
            />
            <input type="email" className="form-control" placeholder="E-mail" />
            <input
              type="text"
              className="form-control"
              placeholder="Contraseña"
            />
          </div>

          <div className="birthday-fields">
            <input
              type="text"
              className="form-control"
              placeholder="Fecha de nacimiento"
            />
            <input type="email" className="form-control" placeholder="Ciudad" />
            <input
              type="text"
              className="form-control"
              placeholder="Número de teléfono"
            />
            <div className="upload">
              <p>Sube tu foto de perfil</p>
              <div className="upload-btn" style={{ position: "relative" }}>
                <input
                  type="file"
                  id="file-input"
                  style={{
                    opacity: 0,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                  }}
                />
                <LuUpload
                  className="upload-icon"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>

          <div className="select-boxes">
            <Select
              defaultValue="Cuánto tiempo llevas jugando MTG"
              onChange={handleChange}
              options={[
                {
                  value: "Menos de un año",
                  label: "Menos de un año",
                },
                {
                  value: "De uno a tres años",
                  label: "De uno a tres años",
                },
                {
                  value: "Más de tres años",
                  label: "Más de tres años",
                },
              ]}
            />
            <Select
              defaultValue="Nivel de experiencia"
              onChange={handleChange}
              options={[
                {
                  value: "Principiante",
                  label: "Principiante",
                },
                {
                  value: "Intermedio",
                  label: "Intermedio",
                },
                {
                  value: "Avanzado",
                  label: "Avanzado",
                },
                {
                  value: "Experto",
                  label: "Experto",
                },
              ]}
            />
            <Select
              defaultValue="¿Has participado en torneos?"
              onChange={handleChange}
              options={[
                {
                  value: "Sí",
                  label: "Sí",
                },
                {
                  value: "No",
                  label: "No",
                },
              ]}
            />
            <textarea
              rows={5}
              placeholder="¿Por qué quieres unirte a la liga?"
            ></textarea>
          </div>

          <div className="btns">
            <div className="checkbox">
              <input type="checkbox" />
              <label>
                Acepto el <Link href="">reglamento</Link> del evento, la lista
                de
                <Link href=""> cartas banneadas</Link> y
                <Link href=""> términos y condiciones.</Link>
              </label>
            </div>
            <button> Confirmar </button>
            <button> Ficha de pago </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReagistrationPage;
