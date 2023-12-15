import React from "react";
import "./style.css";
import { Button } from "../../components/structure/button";
import { CardProject } from "../../components/structure/cardProject";
import { api } from "../../lib/axio";

export function Home() {
  api.get("").then((response) => {
    console.log(response.data);
  });

  function linkGithub() {
    window.open("https://github.com/rafaelmasselli");
  }

  return (
    <div className="container container__home">
      <main>
        <section>
          <div className="container profile__content">
            <div className="container__profile__content">
              <h2>
                Ola, o meu nome e Rafael <br></br> sou um desenvolvedor Full
                stack{" "}
              </h2>
              <h5>
                Como desenvolvedor full stack, estou comprometido em transformar
                ideias em realidade, combinando habilidades sólidas em front-end
                e back-end.
              </h5>
              <div className="container___button">
                <Button
                  title="Veja meus projetos"
                  showIcon
                  onClick={linkGithub}
                />
              </div>
            </div>
            <figure className="container__img">
              <img src="https://github.com/rafaelmasselli.png" alt="" />
            </figure>
          </div>
        </section>
        <div className="container__projects__content container">
          <h2>Projetos pessoais</h2>
          <div className="container__cards">
            <CardProject
              description="O projeto consiste no desenvolvimento do back-end do site de streaming Netflix, utilizando autenticação com token JWT. Para a implementação, foi utilizado o framework NestJS e o banco de dados PostgreSQL, que está hospedado em ambiente Docker"
              title="api-netflix"
              tags={[]}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
