import React from "react";
import "./style.css";
import { Button } from "../../components/structure/button";

export function Home() {
  function linkGithub() {
    window.open("https://github.com/rafaelmasselli");
  }

  return (
    <div className="container container__home">
      <main>
        <div className="container profile__content">
          <div className="container__profile__content">
            <h2>
              Ola, o meu nome e Rafael <br></br> sou um desenvolvedor Full stack{" "}
            </h2>
            <h5>
              Como desenvolvedor full stack, estou comprometido em transformar
              ideias em realidade, combinando habilidades sólidas em front-end e
              back-end.
            </h5>
            <Button title="Veja meus projetos" showIcon onClick={linkGithub} />
          </div>
          <div className="container__img">
            <img src="https://github.com/rafaelmasselli.png" alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}
