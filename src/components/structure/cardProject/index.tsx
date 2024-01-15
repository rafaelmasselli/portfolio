import React from "react";
import { cardProps } from "interface/cardProject";

import "./style.css";

export function CardProject({ name, url, topics }: cardProps) {
  function linkProject() {
    window.open(url);
  }

  return (
    <div className="card container__card">
      <div></div>
      <div className="container__name__and__tags">
        <div>
          <h3>{name}</h3>
        </div>
        <div className="tags">
          {topics.length === 0 ? (
            <p>sem tópico disponível</p>
          ) : (
            topics.map((res, index) => (
              <div key={index} className="card__tag">
                <p>{res}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="btn__view__project">
        <button onClick={linkProject}>ver projeto</button>
      </div>
    </div>
  );
}
