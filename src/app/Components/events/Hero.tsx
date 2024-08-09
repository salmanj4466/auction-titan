import { Input } from "antd";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <p>
            Registra tu correo electrónico para estar al tanto de nuestra fecha
            de inscripción.
          </p>
          <Input placeholder="ejemplo@gmail.com" />
          <button> Subscribirme </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
