import React from "react";

import "./style.css";

interface CardProps {
  title: string;
  description: string;
  tags: [];
}

export function CardProject({ description, title }: CardProps) {
  return (
    <div className="card container__card">
      <div className="title__card">
        <h2>{title}</h2>
      </div>
      <div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="description__card">
        <h5>Descrição do projeto</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}
